import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminCursoService, ModelCurso, AppGlobals } from '.';

@Component({
  selector: 'app-m-new-curso',
  templateUrl: './m-new-curso.component.html',
  styleUrls: ['./m-admin-curso.component.css']
})
export class MNewCursoComponent implements OnInit {
  angForm: FormGroup;

  constructor(
    private cursoService: AdminCursoService,
    private _route: Router,
    private _global: AppGlobals
  ) { this.createForm()}

  createForm(){
    this.angForm = new FormGroup({
      nombreCurso: new FormControl('', Validators.required)
    })
  }

  addCurso(){
    this.cursoService.add(this._global.baseAPIUrl, this.angForm.value).subscribe(res => console.log(res));
    this._route.navigate(['admin/curso']);
  }

  ngOnInit(): void { }
}
