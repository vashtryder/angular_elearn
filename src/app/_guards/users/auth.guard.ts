import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// El protector de autenticación se utiliza para evitar que usuarios no autentificados
// accedan a rutas restringidas, en este ejemplo se usa en app.routing.ts
// para proteger la ruta de la página de inicio.

@Injectable()
export class UsersAuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
             // hay una sesion iniciada devolvera verdadero
            return true;
        }

        // no ha una sesion iniciada entonces redirige a la página de Login con la URL de retorno
        this.router.navigate(['users/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
