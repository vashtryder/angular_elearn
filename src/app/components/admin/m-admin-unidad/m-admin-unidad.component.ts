import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelUnidad, AdminUnidadService, AppGlobals } from '.';
@Component({
  selector: 'app-m-admin-unidad',
  templateUrl: './m-admin-unidad.component.html',
  styleUrls: ['./m-admin-unidad.component.css'],
  providers: [AdminUnidadService]
})
export class MAdminUnidadComponent implements OnInit {
  arrayUnidad: ModelUnidad[];

  constructor(
    private unidadService: AdminUnidadService,
    private _global: AppGlobals,
    private _route: Router
  ) { }

  ngOnInit() {
    this.listarUnidad();
  }

  deleteUnidad(id){
    const r = confirm('¿ Deseas eliminar el registro seleccionado ?');
    if (r === true) {
      this.unidadService.delete(this._global.baseAPIUrl, id).subscribe(res => {
        console.log('REGISTRO ELIMINADO CORECTAMENTE');
        this._route.navigate(['admin/unidad']);
      });
    }
  }

  listarUnidad(){
    this.unidadService
    .getAll(this._global.baseAPIUrl)
    .subscribe(
      data => {
        this.arrayUnidad = data.result;
      })
  }
}
