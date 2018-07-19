import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelExamen, AdminExamenService, AppGlobals } from '.';

@Component({
  selector: 'app-m-admin-examen',
  templateUrl: './m-admin-examen.component.html',
  styleUrls: ['./m-admin-examen.component.css']
})
export class MAdminExamenComponent implements OnInit {
  arrayExamen: ModelExamen[] = []

  constructor(
    private examenService: AdminExamenService,
    private _global: AppGlobals,
    private _route: Router
  ) { }

  deleteExamen(id){
    const r = confirm('¿ Deseas eliminar el registro seleccionado ?');
    if (r === true) {
      this.examenService.delete(this._global.baseAPIUrl, id).subscribe(res => {
        console.log(res);
      });
    }
    this._route.navigate(['admin/examen']);
  }

  listarExamen(){
    this.examenService
    .getVista(this._global.baseAPIUrl)
    .subscribe(
      data => {
        this.arrayExamen = data.result
      })
  }
  ngOnInit() {
    this.listarExamen()
  }

}
