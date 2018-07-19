import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminModuloService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll(UrlBaseApi): Observable<any>{
    return this._http.get(UrlBaseApi + '/modulo/Lista');
  }

  getData(UrlBaseApi, id): Observable<any>{
    return this._http.get(UrlBaseApi + '/modulo/getdata/' + id)
  }

  getVista(UrlBaseApi): Observable<any>{
    return this._http.get(UrlBaseApi + '/modulo/vista');
  }

  get(UrlBaseApi, id): Observable<any> {
    return this._http.get(UrlBaseApi + '/modulo/get/' + id);
  }

  add(UrlBaseApi, modulo): Observable<any> {
    return this._http.post(UrlBaseApi + '/modulo/save', modulo);
  }

  delete(UrlBaseApi, id): Observable<any>{
    return this._http.get(UrlBaseApi + '/modulo/delete/' + id);
  }
}
