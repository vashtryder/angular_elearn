import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelRespuesta, ModelCurso, ModelModulo } from '.';
import { AdminRespuestaService, AdminCursoService, AdminModuloService } from '.';
import { AppGlobals } from '.';

@Component({
  selector: 'app-m-admin-respuesta',
  templateUrl: './m-admin-respuesta.component.html',
  styleUrls: ['./m-admin-respuesta.component.css']
})
export class MAdminRespuestaComponent implements OnInit {
  arrayRespuesta: ModelRespuesta[] = [];

  constructor(
    private RespuestaService: AdminRespuestaService,
    private _global: AppGlobals,
    private _route: Router
  ) { }

  deleteRespuesta(id){
    const r = confirm('¿ Deseas eliminar el registro seleccionado ?');
    if (r === true) {
      this.RespuestaService.delete(this._global.baseAPIUrl, id)
      .subscribe(res => { console.log(res); });
      this._route.navigate(['admin/respuesta']);
    }
  }

  listarRespuesta(){
    this.RespuestaService
    .getVista(this._global.baseAPIUrl)
    .subscribe(
      data => {
        this.arrayRespuesta = data.result
      })
  }
  ngOnInit() {
    this.listarRespuesta()
  }

}
