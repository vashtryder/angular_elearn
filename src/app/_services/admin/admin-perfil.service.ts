import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPerfilService {

  constructor(private _http: HttpClient) { }

  getAll(UrlBaseApi): Observable<any>{
    return this._http.get(UrlBaseApi + '/perfil/Lista');
  }

  get(UrlBaseApi, id): Observable<any> {
    return this._http.get(UrlBaseApi + '/perfil/get/' + id);
  }

  add(UrlBaseApi, perfil): Observable<any> {
    return this._http.post(UrlBaseApi + '/perfil/save', perfil);
  }

  delete(UrlBaseApi, id): Observable<any>{
    return this._http.get(UrlBaseApi + '/perfil/delete/' + id);
  }
}
