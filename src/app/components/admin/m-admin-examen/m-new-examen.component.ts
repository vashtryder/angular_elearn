import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminExamenService, AdminCursoService, AdminModuloService} from '.';
import { ModelExamen, ModelCurso, ModelModulo } from '.';
import { AppGlobals } from '.';

@Component({
  selector: 'app-m-new-examen',
  templateUrl: './m-new-examen.component.html',
  styleUrls: ['./m-admin-examen.component.css']
})
export class MNewExamenComponent implements OnInit {
  angForm: FormGroup;
  arrayData: ModelExamen[] = [];
  arrayCurso: ModelCurso[] = [];
  arrayModulo: ModelExamen[] = [];
  arrayTema: any = {};

  constructor(
    private examenService: AdminExamenService,
    private cursoService: AdminCursoService,
    private moduloService: AdminModuloService,
    private _global: AppGlobals,
    private _route: Router,
    private _activeroute: ActivatedRoute,
    private fb: FormBuilder

  ) { this.createForm() }

  @ViewChild('upfile') fileInput: ElementRef;

  createForm(){
    this.angForm = this.fb.group({
      idCurso: ['', Validators.required],
      idModulo: ['', Validators.required],
      nombreExamen: ['', Validators.required],
      upfile: null
    })
  }

  addExamen(){
    const formModel = this.prepareSave();
    this.examenService.add(this._global.baseAPIUrl, formModel)
    .subscribe(
      res => console.log(res)
    );
    this._route.navigate(['admin/examen']);
  }

  private prepareSave(): any {
    const input = new FormData();
    input.append('idCurso', this.angForm.get('idCurso').value),
    input.append('idModulo', this.angForm.get('idModulo').value),
    input.append('nombreExamen', this.angForm.get('nombreExamen').value);
    input.append('upfile', this.angForm.get('upfile').value);
    return input;
  }

  getCurso(){
    this.cursoService.getAll(this._global.baseAPIUrl)
    .subscribe(
      data => {
        this.arrayCurso = data.result
      });
  }

  getModulo(){
    this.moduloService.getAll(this._global.baseAPIUrl)
    .subscribe(
      data => {
        this.arrayModulo = data.result
      });
  }

  onFileChange(event) {
    if (event.target.files.length > 0 ) {
      const file = event.target.files[0];
      this.angForm.get('upfile').setValue(file);
    }
  }

  paraElegirModulo(){
    const id = this.angForm.get('idCurso').value;
    this.moduloService.getData(this._global.baseAPIUrl, id)
    .subscribe(
      data => {
        this.arrayModulo = data.result
      });
  }

  clearFile() {
    this.angForm.get('upfile').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  ngOnInit(): void {
    this.getCurso();
    this.getModulo();
   }
}
