import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminModuloService } from '../../../services/admin/admin-modulo.service';
import { AdminUnidadService } from '../../../services/admin/admin-unidad.service';
import { AdminCursoService } from '../../../services/admin/admin-curso.service';
import { AppGlobals } from '../../../services/admin-global';
import { Router } from '@angular/router';
import { ModelCurso } from '../../../modules/admin/curso';
import { ModelUnidad } from '../../../modules/admin/unidad';

@Component({
  selector: 'app-m-new-modulo',
  templateUrl: './m-new-modulo.component.html',
  styleUrls: ['./m-admin-modulo.component.css']
})
export class MNewModuloComponent implements OnInit {
  angForm: FormGroup;
  arrayCurso: ModelCurso[];
  arrayUnidad: ModelUnidad[];

  constructor(
    private moduloService: AdminModuloService,
    private unidadService: AdminUnidadService,
    private cursoService: AdminCursoService,
    private _global: AppGlobals,
    private _route: Router
  ) { this.createForm() }

  createForm(){
    this.angForm = new FormGroup({
      idUnidad: new FormControl(''),
      idCurso: new FormControl(''),
      nombreModulo: new FormControl('', Validators.required)
    })
  }

  addModulo(){
    this.moduloService.add(this._global.baseAPIUrl, this.angForm.value)
    .subscribe(
      res => console.log(res)
    );
    this._route.navigate(['admin/modulo'])
  }

  getCurso(){
    this.cursoService.getAll(this._global.baseAPIUrl)
    .subscribe(
      data => {
        this.arrayCurso = data.result
      })
  }

  getUnidad(){
    this.unidadService.getAll(this._global.baseAPIUrl)
    .subscribe(
      data => {
        this.arrayUnidad = data.result
      })
  }

  ngOnInit(): void {
    this.getCurso();
    this.getUnidad();
  }
}
