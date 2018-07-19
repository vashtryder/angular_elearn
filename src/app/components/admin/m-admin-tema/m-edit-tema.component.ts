import { Component,  ElementRef, ViewChild, OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminTemaService, AdminCursoService, AdminModuloService } from '.';
import { ModelTema, ModelCurso, ModelModulo } from '.';
import { AppGlobals } from '.';
@Component({
  selector: 'app-m-edit-tema',
  templateUrl: './m-edit-tema.component.html',
  styleUrls: ['./m-admin-tema.component.css']
})
export class MEditTemaComponent implements OnInit {
  angForm: FormGroup;
  arrayData: ModelTema[] = [];
  arrayCurso: ModelCurso[] = [];
  arrayModulo: ModelModulo[] = [];
  arrayTema: any = {}

  constructor(
    private temaService: AdminTemaService,
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
      idTema: [''],
      idCurso: ['', Validators.required],
      idModulo: ['', Validators.required],
      nombreTema: ['', Validators.required],
      upfile: null,
      archivoNombre: ['']
    })
  }

  getTema(){
    this._activeroute.params.subscribe(
      params => {
        this.temaService.get(this._global.baseAPIUrl, params['id'])
        .subscribe(
          data => {
            this.arrayData = data.result;
            this.arrayTema = Array.of(this.arrayData);
            this.angForm.setValue({
              idTema: this.arrayTema[0].idTema,
              idCurso: this.arrayTema[0].idCurso,
              idModulo: this.arrayTema[0].idModulo,
              nombreTema: this.arrayTema[0].nombre,
              upfile: this.arrayTema[0].archivo,
              archivoNombre: this.arrayTema[0].archivo
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

  updateTema(){
    const formModel = this.prepareSave();
    this.temaService.add(this._global.baseAPIUrl, formModel)
    .subscribe(
      res => console.log(res)
    );
    this._route.navigate(['admin/tema'])
  }

  private prepareSave(): any {
    const input = new FormData();
    input.append('idTema', this.angForm.get('idTema').value),
    input.append('idCurso', this.angForm.get('idCurso').value),
    input.append('idModulo', this.angForm.get('idModulo').value),
    input.append('nombreTema', this.angForm.get('nombreTema').value);
    input.append('upfile', this.angForm.get('upfile').value);
    return input;
  }

  get nombreArchivo(){
      return this.angForm.get('archivoNombre');
  }

  ngOnInit(): void {
    this.getTema();
    this.getCurso();
    this.getModulo();
   }
  }
