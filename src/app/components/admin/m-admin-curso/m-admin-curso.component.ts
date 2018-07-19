import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminCursoService, ModelCurso, AppGlobals } from '.';

@Component({
  selector: 'app-m-admin-curso',
  templateUrl: './m-admin-curso.component.html',
  styleUrls: ['./m-admin-curso.component.css']
})
export class MAdminCursoComponent implements OnInit {
  arrayCurso: ModelCurso[];

  constructor(
    private cursoService: AdminCursoService,
    private _global: AppGlobals,
    private _route: Router
  ) { }

  deleteCurso(id){
    const r = confirm('¿ Deseas eliminar el registro seleccionado ?');
    if (r === true) {
      this.cursoService.delete(this._global.baseAPIUrl, id)
      .subscribe(res => {
        console.log(res);
      });
    }
    this._route.navigate(['admin/curso']);
  }

  listarCurso(){
    this.cursoService
    .getAll(this._global.baseAPIUrl)
    .subscribe(
      data => {
        this.arrayCurso = data.result
      })
  }
  ngOnInit() {
    this.listarCurso()
  }


}
