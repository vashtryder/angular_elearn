import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModelRespuesta, ModelCurso, ModelModulo } from '.';
import { AdminRespuestaService, AdminCursoService, AdminModuloService } from '.';
import { AppGlobals } from '.';

@Component({
  selector: 'app-m-edit-respuesta',
  templateUrl: './m-edit-respuesta.component.html',
  styleUrls: ['./m-admin-respuesta.component.css']
})

export class MEditRespuestaComponent implements OnInit {
  angForm: FormGroup;
  arrayData: ModelRespuesta[] = [];
  arrayCurso: ModelCurso[] = [];
  arrayModulo: ModelModulo[] = [];
  arrayRespuesta: any = {}
  constructor(
    private respuestaService: AdminRespuestaService,
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
      idRespuesta: [''],
      idCurso: ['', Validators.required],
      idModulo: ['', Validators.required],
      nombreRespuesta: ['', Validators.required],
      upfile: null,
      archivoNombre: ['']
    })
  }

  getRespuesta(){
    this._activeroute.params.subscribe(
      params => {
        this.respuestaService.get(this._global.baseAPIUrl, params['id'])
        .subscribe(
          data => {
            this.arrayData = data.result;
            this.arrayRespuesta = Array.of(this.arrayData);
            this.angForm.setValue({
              idRespuesta: this.arrayRespuesta[0].idRespuesta,
              idCurso: this.arrayRespuesta[0].idCurso,
              idModulo: this.arrayRespuesta[0].idModulo,
              nombreRespuesta: this.arrayRespuesta[0].nombre,
              upfile: this.arrayRespuesta[0].archivo,
              archivoNombre: this.arrayRespuesta[0].archivo
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

  updateRespuesta(){
    const formModel = this.prepareSave();
    this.respuestaService.add(this._global.baseAPIUrl, formModel)
    .subscribe(
      res => console.log(res)
    );
    this._route.navigate(['admin/respuesta'])
  }

  private prepareSave(): any {
    const input = new FormData();
    input.append('idRespuesta', this.angForm.get('idRespuesta').value),
    input.append('idCurso', this.angForm.get('idCurso').value),
    input.append('idModulo', this.angForm.get('idModulo').value),
    input.append('nombreRespuesta', this.angForm.get('nombreRespuesta').value);
    input.append('upfile', this.angForm.get('upfile').value);
    return input;
  }

  get nombreArchivo(){
    return this.angForm.get('archivoNombre');
 }

  ngOnInit(): void {
    this.getRespuesta();
    this.getCurso();
    this.getModulo();
   }
  }
