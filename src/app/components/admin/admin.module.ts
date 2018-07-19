import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { MAdminLoginComponent } from './m-admin-login/m-admin-login.component';
import { MAdminDashboardComponent } from './m-admin-dashboard/m-admin-dashboard.component';
import { MAdminMenuComponent } from './m-admin-menu/m-admin-menu.component';
import { MAdminFooterComponent } from './m-admin-footer/m-admin-footer.component';
import { MAdminPerfilComponent } from './m-admin-perfil/m-admin-perfil.component';
import { MAdminContraComponent } from './m-admin-perfil/m-admin-contra.component';
import { MAdminUnidadComponent } from './m-admin-unidad/m-admin-unidad.component';
import { MNewUnidadComponent } from './m-admin-unidad/m-new-unidad.component';
import { MEditUnidadComponent } from './m-admin-unidad/m-edit-unidad.component';
import { MAdminCursoComponent } from './m-admin-curso/m-admin-curso.component';
import { MNewCursoComponent } from './m-admin-curso/m-new-curso.component';
import { MEditCursoComponent } from './m-admin-curso/m-edit-curso.component';
import { MAdminModuloComponent } from './m-admin-modulo/m-admin-modulo.component';
import { MNewModuloComponent } from './m-admin-modulo/m-new-modulo.component';
import { MEditModuloComponent } from './m-admin-modulo/m-edit-modulo.component';
import { MAdminTemaComponent } from './m-admin-tema/m-admin-tema.component';
import { MNewTemaComponent } from './m-admin-tema/m-new-tema.component';
import { MEditTemaComponent } from './m-admin-tema/m-edit-tema.component';
import { MAdminExamenComponent } from './m-admin-examen/m-admin-examen.component';
import { MNewExamenComponent } from './m-admin-examen/m-new-examen.component';
import { MEditExamenComponent } from './m-admin-examen/m-edit-examen.component';
import { MAdminRespuestaComponent } from './m-admin-respuesta/m-admin-respuesta.component';
import { MNewRespuestaComponent } from './m-admin-respuesta/m-new-respuesta.component';
import { MEditRespuestaComponent } from './m-admin-respuesta/m-edit-respuesta.component';
import { MAdminSubMenuComponent } from './m-admin-sub-menu/m-admin-sub-menu.component';
import { MAdminMainComponent } from './m-admin-main/m-admin-main.component';
import { MAdminMatriculaComponent } from './m-admin-matricula/m-admin-matricula.component';

@NgModule({
  declarations: [
    MAdminDashboardComponent,
    MAdminLoginComponent,
    MAdminDashboardComponent,
    MAdminMenuComponent,
    MAdminFooterComponent,
    MAdminPerfilComponent,
    MAdminContraComponent,
    MAdminUnidadComponent,
    MNewUnidadComponent,
    MEditUnidadComponent,
    MAdminCursoComponent,
    MNewCursoComponent,
    MEditCursoComponent,
    MAdminModuloComponent,
    MNewModuloComponent,
    MEditModuloComponent,
    MAdminTemaComponent,
    MNewTemaComponent,
    MEditTemaComponent,
    MAdminExamenComponent,
    MNewExamenComponent,
    MEditExamenComponent,
    MAdminRespuestaComponent,
    MNewRespuestaComponent,
    MEditRespuestaComponent,
    MAdminSubMenuComponent,
    MAdminMainComponent,
    MAdminMatriculaComponent
  ],
  exports: [
    MAdminDashboardComponent,
    MAdminLoginComponent,
    MAdminDashboardComponent,
    MAdminMenuComponent,
    MAdminFooterComponent,
    MAdminPerfilComponent,
    MAdminContraComponent,
    MAdminUnidadComponent,
    MNewUnidadComponent,
    MEditUnidadComponent,
    MAdminCursoComponent,
    MNewCursoComponent,
    MEditCursoComponent,
    MAdminModuloComponent,
    MNewModuloComponent,
    MEditModuloComponent,
    MAdminTemaComponent,
    MNewTemaComponent,
    MEditTemaComponent,
    MAdminExamenComponent,
    MNewExamenComponent,
    MEditExamenComponent,
    MAdminRespuestaComponent,
    MNewRespuestaComponent,
    MEditRespuestaComponent,
    MAdminSubMenuComponent,
    MAdminMainComponent,
    MAdminMatriculaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule {
}
