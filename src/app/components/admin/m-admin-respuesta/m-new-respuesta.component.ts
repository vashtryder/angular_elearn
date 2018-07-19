import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModelRespuesta, ModelCurso, ModelModulo } from '.';
import { AdminRespuestaService, AdminCursoService, AdminModuloService } from '.';
import { AppGlobals } from '.';

@Component({
  selector: 'app-m-new-respuesta',
  templateUrl: './m-new-respuesta.component.html',
  styleUrls: ['./m-admin-respuesta.component.css']
})
export class MNewRespuestaComponent implements OnInit {
  angForm: FormGroup;
  arrayData: ModelRespuesta[] = [];
  arrayCurso: ModelCurso[] = [];
  arrayModulo: ModelModulo[] = []
  arrayTema: any = {}
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
      idCurso: ['', Validators.required],
      idModulo: ['', Validators.required],
      nombreRespuesta: ['', Validators.required],
      upfile: null,
    })
  }

  addRespuesta(){
    const formModel = this.prepareSave();
    this.respuestaService.add(this._global.baseAPIUrl, formModel)
    .subscribe(
      res => console.log('GUARDO CORRECTAMENTE')
    );
    this._route.navigate(['admin/respuesta']);
  }

  private prepareSave(): any {
    const input = new FormData();
    input.append('idCurso', this.angForm.get('idCurso').value),
    input.append('idModulo', this.angForm.get('idModulo').value),
    input.append('nombreRespuesta', this.angForm.get('nombreRespuesta').value);
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

