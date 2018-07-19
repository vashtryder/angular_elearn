import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminRespuestaService {
  constructor(private _http: HttpClient) { }

  getAll(UrlBaseApi): Observable<any>{
      return this._http.get(UrlBaseApi + '/respuesta/Lista');
  }

  getVista(UrlBaseApi): Observable<any>{
    return this._http.get(UrlBaseApi + '/respuesta/vista');
  }

  get(UrlBaseApi, id): Observable<any> {
    return this._http.get(UrlBaseApi + '/respuesta/get/' + id);
  }

  add(UrlBaseApi, respuesta): Observable<any> {
    return this._http.post(UrlBaseApi + '/respuesta/save', respuesta);
  }

  delete(UrlBaseApi, id): Observable<any>{
    return this._http.get(UrlBaseApi + '/respuesta/delete/' + id);
  }
}
