import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminTemaService {

  constructor(private _http: HttpClient) { }

  subirImagen(url, file): Observable<any>{
    return this._http.post(url + '/script.php', file);
  }

  getAll(UrlBaseApi): Observable<any>{
    return this._http.get(UrlBaseApi + '/tema/Lista');
  }

  getVista(UrlBaseApi): Observable<any>{
    return this._http.get(UrlBaseApi + '/tema/vista');
  }

  get(UrlBaseApi, id): Observable<any> {
    return this._http.get(UrlBaseApi + '/tema/get/' + id);
  }

  add(UrlBaseApi, tema): Observable<any> {
    return this._http.post(UrlBaseApi + '/tema/save', tema);
  }

  delete(UrlBaseApi, id): Observable<any>{
    return this._http.get(UrlBaseApi + '/tema/delete/' + id);
  }
}
