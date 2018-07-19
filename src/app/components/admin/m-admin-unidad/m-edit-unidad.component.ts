import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ModelUnidad, AdminUnidadService, AppGlobals } from '.';

@Component({
  selector: 'app-m-edit-unidad',
  templateUrl: './m-edit-unidad.component.html',
  styleUrls: ['./m-admin-unidad.component.css'],

})
export class MEditUnidadComponent implements OnInit {

  angFrom: FormGroup;
  arrayUnidad: ModelUnidad[];
  arrayData: any = {};
  arregloDeSubCadenas;

  constructor(
    private _actviveroute: ActivatedRoute,
    private _route: Router,
    private _serviceUnidad: AdminUnidadService,
    private _global: AppGlobals
  ) { this.createForm(); }

   ngOnInit(){
     this.getUnidad();
   }

    createForm(){
        // Declaracion en Angular 6 posterior
        this.angFrom = new FormGroup({
          idUnidad: new FormControl(''),
          nombreUnidad: new FormControl('', Validators.required),
          abrevUnidad: new FormControl('')
        })
    }

    getUnidad(){
        this._actviveroute.params.subscribe(params => {
            this._serviceUnidad.get(this._global.baseAPIUrl, params['id'])
                .subscribe(
                    data => {
                        this.arrayUnidad = data.result;
                        this.arrayData = Array.of(this.arrayUnidad);

                        this.arregloDeSubCadenas = this.arrayData[0].nombreUnidad.split(' ');

                        this.angFrom.setValue({
                          idUnidad: this.arrayData[0].idUnidad,
                          nombreUnidad:  this.arrayData[0].nombreUnidad,
                          abrevUnidad: this.arregloDeSubCadenas[0].substring(0, 3) + ' ' + this.arregloDeSubCadenas[1].substring(0)
                        });
                });
        });
    }

    updateUnidad(){
      this._serviceUnidad.add(this._global.baseAPIUrl, this.angFrom.value)
      .subscribe(
        res => console.log('REGISTRO ACTUALIZADO')
      );
      this._route.navigate(['admin/unidad']);
    }
}
