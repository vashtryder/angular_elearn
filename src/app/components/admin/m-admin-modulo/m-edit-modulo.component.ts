import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModelModulo } from '../../../modules/admin/modulo';
import { AdminModuloService } from '../../../services/admin/admin-modulo.service';
import { AppGlobals } from '../../../services/admin-global';
import { AdminUnidadService } from '../../../services/admin/admin-unidad.service';
import { AdminCursoService } from '../../../services/admin/admin-curso.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModelCurso } from '../../../modules/admin/curso';
import { ModelUnidad } from '../../../modules/admin/unidad';


@Component({
  selector: 'app-m-edit-modulo',
  templateUrl: './m-edit-modulo.component.html',
  styleUrls: ['./m-admin-modulo.component.css']
})
export class MEditModuloComponent implements OnInit {
  angForm: FormGroup;
  arrayData: ModelModulo[];
  arrayCurso: ModelCurso[];
  arrayUnidad: ModelUnidad[];
  arrayModulo: any = {};

  constructor(
    private moduloService: AdminModuloService,
    private unidadService: AdminUnidadService,
    private cursoService: AdminCursoService,
    private _global: AppGlobals,
    private _route: Router,
    private _activeroute: ActivatedRoute
  ) { this.createForm() }

  createForm(){
    this.angForm = new FormGroup({
      idModulo: new FormControl(''),
      idUnidad: new FormControl(''),
      idCurso: new FormControl(''),
      nombreModulo: new FormControl('', Validators.required)
    })
  }

  getModulo(){
    this._activeroute.params.subscribe(
      params => {
        this.moduloService.get(this._global.baseAPIUrl, params['id'])
        .subscribe(
          data => {
            this.arrayData = data.result;
            this.arrayModulo = Array.of(this.arrayData);
            this.angForm.setValue({
              idModulo: this.arrayModulo[0].idModulo,
              idUnidad: this.arrayModulo[0].idUnidad,
              idCurso: this.arrayModulo[0].idCurso,
              nombreModulo: this.arrayModulo[0].nombre
            })
          }
        )
      }
    )
  }

  updateModulo(){
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
    this.getModulo();
    this.getCurso();
    this.getUnidad();
  }
}
