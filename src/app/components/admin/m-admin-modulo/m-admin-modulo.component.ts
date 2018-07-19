import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelModulo, ModelCurso, ModelUnidad, AppGlobals } from './index';
import { AdminModuloService, AdminUnidadService, AdminCursoService } from './index';

@Component({
  selector: 'app-m-admin-modulo',
  templateUrl: './m-admin-modulo.component.html',
  styleUrls: ['./m-admin-modulo.component.css']
})
export class MAdminModuloComponent implements OnInit {
  arrayModulo: ModelModulo[];

  constructor(
    private moduloService: AdminModuloService,
    private _global: AppGlobals,
    private _route: Router
  ) { }

  deleteModulo(id){
    const r = confirm('¿ Deseas eliminar el registro seleccionado ?');
    if (r === true) {
      this.moduloService.delete(this._global.baseAPIUrl, id).subscribe(res => {
        console.log('REGISTRO ELIMINADO CORECTAMENTE');
      });
      this._route.navigate(['admin/modulo']);
    }
  }

  listarModulo(){
    this.moduloService
    .getVista(this._global.baseAPIUrl)
    .subscribe(
      data => {
        this.arrayModulo = data.result
      })
  }
  ngOnInit() {
    this.listarModulo()
  }

}
