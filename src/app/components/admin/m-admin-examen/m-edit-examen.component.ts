import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';

import { AdminExamenService, AdminCursoService, AdminModuloService} from '.';
import { ModelExamen, ModelCurso, ModelModulo } from '.';
import { AppGlobals } from '.';

@Component({
  selector: 'app-m-edit-examen',
  templateUrl: './m-edit-examen.component.html',
  styleUrls: ['./m-admin-examen.component.css']
})
export class MEditExamenComponent implements OnInit {
  angForm: FormGroup;
  arrayData: ModelExamen[] = [];
  arrayCurso: ModelCurso[] = [];
  arrayModulo: ModelModulo[] = [];
  arrayExamen: any = {};

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
      idExamen: [''],
      idCurso: ['', Validators.required],
      idModulo: ['', Validators.required],
      nombreExamen: ['', Validators.required],
      upfile: null,
      archivoNombre: ['']
    })
  }

  getExamen(){
    this._activeroute.params.subscribe(
      params => {
        this.examenService.get(this._global.baseAPIUrl, params['id'])
        .subscribe(
          data => {
            this.arrayData = data.result;
            this.arrayExamen = Array.of(this.arrayData);
            this.angForm.setValue({
              idExamen: this.arrayExamen[0].idExamen,
              idCurso: this.arrayExamen[0].idCurso,
              idModulo: this.arrayExamen[0].idModulo,
              nombreExamen: this.arrayExamen[0].nombre,
              upfile: this.arrayExamen[0].archivo,
              archivoNombre: this.arrayExamen[0].archivo
            })
          }
        )
      }
    )
  }

  getCurso(){
    this.cursoService.getAll(this._global.baseAPIUrl)
    .subscribe(
      data => {
        this.arrayCurso = data.result
      })
  }

  get nombreArchivo(){
    return this.angForm.get('archivoNombre');
  }

  getModulo(){
    this.moduloService.getAll(this._global.baseAPIUrl)
    .subscribe(
      data => {
        this.arrayModulo = data.result
      })
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

  updateExamen(){
    const formModel = this.prepareSave();
    this.examenService.add(this._global.baseAPIUrl, formModel)
    .subscribe(
      res => console.log(res)
    );
    this._route.navigate(['admin/examen'])
  }

  private prepareSave(): any {
    const input = new FormData();
    input.append('idExamen', this.angForm.get('idExamen').value),
    input.append('idCurso', this.angForm.get('idCurso').value),
    input.append('idModulo', this.angForm.get('idModulo').value),
    input.append('nombreExamen', this.angForm.get('nombreExamen').value);
    input.append('upfile', this.angForm.get('upfile').value);
    return input;
  }

  ngOnInit(): void {
    this.getExamen();
    this.getCurso();
    this.getModulo();
   }
  }
