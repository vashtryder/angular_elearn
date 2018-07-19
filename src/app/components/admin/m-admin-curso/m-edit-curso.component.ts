import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminCursoService, ModelCurso, AppGlobals } from '.';

@Component({
  selector: 'app-m-edit-curso',
  templateUrl: './m-edit-curso.component.html',
  styleUrls: ['./m-admin-curso.component.css']
})

export class MEditCursoComponent implements OnInit {
  angForm: FormGroup;
  arrayCurso: ModelCurso[];
  arrayData: any = {};

  constructor(
    private cursoService: AdminCursoService,
    private _global: AppGlobals,
    private _route: Router,
    private _activeroute: ActivatedRoute
  ) { this.createForm() }

  createForm(){
    this.angForm = new FormGroup({
      idCurso: new FormControl(''),
      nombreCurso: new FormControl('', Validators.required)
    })
  }

  getCurso(){
    this._activeroute.params.subscribe(
      params => {
        this.cursoService.get(this._global.baseAPIUrl, params['id'])
        .subscribe(
          data => {
            this.arrayCurso = data.result;
            // this.arrayData = Array.of(this.arrayCurso);
            this.angForm.setValue({
              idCurso: this.arrayCurso[0].idCurso,
              nombreCurso: this.arrayCurso[0].nombreCurso
            })
          }
        )
      }
    )
  }

  updateCurso(){
    this.cursoService.add(this._global.baseAPIUrl, this.angForm.value)
    .subscribe(
      res => console.log(res)
    );
    this._route.navigate(['admin/curso'])
  }
  ngOnInit(): void {
    this.getCurso();
   }
}
