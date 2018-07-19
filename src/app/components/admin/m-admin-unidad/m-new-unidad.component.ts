import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelUnidad, AdminUnidadService, AppGlobals } from '.';
@Component({
  selector: 'app-m-new-unidad',
  templateUrl: './m-new-unidad.component.html',
  styleUrls: ['./m-admin-unidad.component.css']
})

export class MNewUnidadComponent implements OnInit, OnChanges {
  angForm: FormGroup;
  arregloDeSubCadenas;

  constructor(
    private _serviceUnidad: AdminUnidadService,
    private _route: Router,
    private _global: AppGlobals
  ) { this.createForm() }

  createForm(){
    this.angForm = new FormGroup({
      nombreUnidad: new FormControl('', Validators.required),
      abrevUnidad: new FormControl('', Validators.required)
    })
  }

  addUnidad(){
    this._serviceUnidad.add(this._global.baseAPIUrl, this.angForm.value)
      .subscribe(
        res => console.log('GUARDO CORRECTAMENTE')
      );
      this._route.navigate(['admin/unidad']);
  }

  abrvUnidad(){
    this.arregloDeSubCadenas = this.angForm.get('nombreUnidad').value;

    if (this.arregloDeSubCadenas === '') {
      this.arregloDeSubCadenas = 'UNIDAD NaN';
    }
    this.arregloDeSubCadenas = this.arregloDeSubCadenas.split(' ')
    this.arregloDeSubCadenas = this.arregloDeSubCadenas[0].substring(0, 3) + ' ' + this.arregloDeSubCadenas[1].substring(0);
    console.log(this.arregloDeSubCadenas);
    this.angForm.patchValue({
      abrevUnidad: this.arregloDeSubCadenas
    })
  }

  ngOnInit(): void { }

  ngOnChanges(){
    this.abrvUnidad();
  }
}
