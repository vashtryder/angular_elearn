import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModelPerfil } from '../../../modules/admin/perfil';
import { AdminPerfilService } from '../../../services/admin/admin-perfil.service';
import { AppGlobals } from '../../../services/admin-global';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-m-admin-perfil',
  templateUrl: './m-admin-perfil.component.html',
  styleUrls: ['./m-admin-perfil.component.css']
})
export class MAdminPerfilComponent implements OnInit {
  angForm: FormGroup;
  arrayData: ModelPerfil[] = [];
  arrayPerfil: any = {};

  constructor(
    private perfilService: AdminPerfilService,
    private _global: AppGlobals,
    private fb: FormBuilder,
    private _route: Router,
    private _activeroute: ActivatedRoute
  ) { this.createForm() }

  @ViewChild('avatar') fileInput: ElementRef;

  createForm(){
    this.angForm = this.fb.group({
      idLogin: [''],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', Validators.required],
      foto: null
    })
  }

  getPerfil(){
    this._activeroute.params.subscribe(
      params => {
        this.perfilService.get(this._global.baseAPIUrl, params['id'])
        .subscribe(
          data => {
            this.arrayData = data.result;
            this.arrayPerfil = Array.of(this.arrayData);
            this.angForm.setValue({
              idLogin: this.arrayPerfil[0].idLogin,
              nombres: this.arrayPerfil[0].Nombres,
              apellidos: this.arrayPerfil[0].Apellidos,
              dni: this.arrayPerfil[0].dni,
              email: this.arrayPerfil[0].email
            })
          }
        )
      }
    )
  }

  onFileChange(event) {
    if (event.target.files.length > 0 ) {
      const file = event.target.files[0];
      this.angForm.get('avatar').setValue(file);
    }
  }

  clearFile() {
    this.angForm.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  private prepareSave(): any {
    const input = new FormData();
    input.append('idLogin', this.angForm.get('idLogin').value),
    input.append('nombres', this.angForm.get('nombres').value),
    input.append('aplledios', this.angForm.get('apellidos').value),
    input.append('dni', this.angForm.get('dni').value),
    input.append('email', this.angForm.get('email').value)
    return input;
  }

  addPerfil(){
    const formModel = this.prepareSave();
    this.perfilService.add(this._global.baseAPIUrl, formModel)
    .subscribe(
      res => console.log(res)
    )
  }

  ngOnInit() {
    this.getPerfil();
  }
}
