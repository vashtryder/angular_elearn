import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../_services/admin/authentication.service';

// El interceptor de errores intercepta las respuestas http de la API para verificar si hubo algún error.
// Si hay una respuesta 401 no autorizada, el usuario se desconecta automáticamente de la aplicación,
// todos los demás errores se vuelven a capturar para que los capture el servicio de llamadas,
// por lo que se puede mostrar una alerta al usuario.

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
