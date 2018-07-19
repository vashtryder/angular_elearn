import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { MLoginComponent } from './m-login/m-login.component';
import { MMenuComponent } from './m-menu/m-menu.component';
import { MDashboardComponent } from './m-dashboard/m-dashboard.component';
import { MCursoComponent } from './m-curso/m-curso.component';
import { MExamenComponent } from './m-examen/m-examen.component';
import { MPerfilComponent } from './m-perfil/m-perfil.component';
import { MRespuestaComponent } from './m-respuesta/m-respuesta.component';
import { MFooterComponent } from './m-footer/m-footer.component';

@NgModule({
  declarations: [
    MLoginComponent,
    MMenuComponent,
    MDashboardComponent,
    MCursoComponent,
    MExamenComponent,
    MPerfilComponent,
    MRespuestaComponent,
    MFooterComponent,
  ],
  exports: [
    MLoginComponent,
    MMenuComponent,
    MDashboardComponent,
    MCursoComponent,
    MExamenComponent,
    MPerfilComponent,
    MRespuestaComponent,
    MFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UsersModule {
}
