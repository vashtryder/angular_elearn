import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminUnidadService {
  constructor(private _http: HttpClient) { }

  getAll(UrlBaseApi): Observable<any>{
      return this._http.get(UrlBaseApi + '/unidad/Lista');
  }

  get(UrlBaseApi, id): Observable<any> {
    return this._http.get(UrlBaseApi + '/unidad/get/' + id);
  }

  add(UrlBaseApi, unidad): Observable<any> {
    return this._http.post(UrlBaseApi + '/unidad/save', unidad);
  }

  delete(UrlBaseApi, id): Observable<any>{
    return this._http.get(UrlBaseApi + '/unidad/delete/' + id);
  }
}

