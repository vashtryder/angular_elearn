import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminExamenService {
  constructor(private _http: HttpClient) { }

  getAll(UrlBaseApi): Observable<any>{
      return this._http.get(UrlBaseApi + '/examen/Lista');
  }

  getVista(UrlBaseApi): Observable<any>{
    return this._http.get(UrlBaseApi + '/examen/vista');
  }

  get(UrlBaseApi, id): Observable<any> {
    return this._http.get(UrlBaseApi + '/examen/get/' + id);
  }

  add(UrlBaseApi, examen): Observable<any> {
    return this._http.post(UrlBaseApi + '/examen/save', examen);
  }

  delete(UrlBaseApi, id): Observable<any>{
    return this._http.get(UrlBaseApi + '/examen/delete/' + id);
  }
}
