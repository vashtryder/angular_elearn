import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class AdminFakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // array en el almacenamiento local para usuarios registrados
        let users: any[] = JSON.parse(localStorage.getItem('users')) || [];

        // envolver en observable con retraso para simular la llamada api del servidor
        return of(null).pipe(mergeMap(() => {

            // autenticar
            if (request.url.endsWith('/admin/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                let filteredUsers = users.filter(user => {
                    return user.username === request.body.username && user.password === request.body.password;
                });

                if (filteredUsers.length) {
                    // si los datos de inicio de sesión son válidos, devuelva 200 OK con detalles de usuario y token falso de jwt
                    let user = filteredUsers[0];
                    let body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };

                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    // sino retorna 400 Bad Resquest
                    return throwError({ error: { message: 'Nombre de usuario o contraseña incorrecta' } });
                }
            }

            // get users
            if (request.url.endsWith('/admin') && request.method === 'GET') {
                // comprueba si el token de autenticación falso está en el encabezado y devuelve los usuarios si es válido,
                // esta seguridad se implementa en el lado del servidor en una aplicación real
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: users }));
                } else {
                    // return 401 no autorizado si el token es nulo o inválido
                    return throwError({ error: { message: 'No autorizado' } });
                }
            }

            // get user by id
            if (request.url.match(/\/admin\/\d+$/) && request.method === 'GET') {
                // comprueba si el token de autenticación falso está en el encabezado y devuelve el usuario si es válido,
                // esta seguridad se implementa en el lado del servidor en una aplicación real
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    let matchedUsers = users.filter(user => { return user.id === id; });
                    let user = matchedUsers.length ? matchedUsers[0] : null;

                    return of(new HttpResponse({ status: 200, body: user }));
                } else {
                    // return 401 no autorizado si el token es nulo o inválido
                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }

            // register user
            if (request.url.endsWith('admin/register') && request.method === 'POST') {
                // obtener nuevo objeto de usuario del cuerpo del mensaje
                let newUser = request.body;

                // validation
                let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                if (duplicateUser) {
                    return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
                }

                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }

            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid,
                // this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        let user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }

                    // respond 200 OK
                    return of(new HttpResponse({ status: 200 }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }

            // pass through any requests not handled above
            return next.handle(request);

        }))

        // la llamada se materializa y se desmaterializa para garantizar el retraso incluso si se produce un error
        // (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: AdminFakeBackendInterceptor,
    multi: true
};
