import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppGlobals } from '../admin-global'

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor( private _http: HttpClient, private _global: AppGlobals) { }

  login(username: string, password: string){
    return this._http.post<any>(this._global.baseAPIUrl + '/login/authenticate', { username: username, password: password })
    .pipe(
      map(user => {
        if (user && user.token){
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      })
    );
  }

  logout(){
    localStorage.removeItem('currentUser');
  }
}
