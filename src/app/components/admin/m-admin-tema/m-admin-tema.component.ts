import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminTemaService, AdminCursoService, AdminModuloService } from '.';
import { ModelTema, ModelCurso, ModelModulo } from '.';
import { AppGlobals } from '.';

@Component({
  selector: 'app-m-admin-tema',
  templateUrl: './m-admin-tema.component.html',
  styleUrls: ['./m-admin-tema.component.css']
})
export class MAdminTemaComponent implements OnInit {
  arrayTema: ModelTema[] = [];

  constructor(
    private temaService: AdminTemaService,
    private _global: AppGlobals,
    private _route: Router
  ) { }

  deleteTema(id){
    const r = confirm('¿ Deseas eliminar el registro seleccionado ?');
    if (r === true) {
      this.temaService.delete(this._global.baseAPIUrl, id)
      .subscribe(res => {
        console.log(res);
      });
      this._route.navigate(['admin/tema']);
    }
  }

  listarTema(){
    this.temaService
    .getVista(this._global.baseAPIUrl)
    .subscribe(
      data => {
        this.arrayTema = data.result
      })
  }
  ngOnInit() {
    this.listarTema()
  }

}
