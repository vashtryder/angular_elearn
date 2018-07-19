import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AdminCursoService {
  constructor(private _http: HttpClient) { }

  getAll(UrlBaseApi): Observable<any>{
      return this._http.get(UrlBaseApi + '/curso/Lista');
  }

  get(UrlBaseApi, id): Observable<any> {
    return this._http.get(UrlBaseApi + '/curso/get/' + id);
  }

  add(UrlBaseApi, curso): Observable<any> {
    return this._http.post(UrlBaseApi + '/curso/save', curso);
  }

  delete(UrlBaseApi, id): Observable<any>{
    return this._http.get(UrlBaseApi + '/curso/delete/' + id);
  }
}
