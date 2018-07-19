import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MLoginComponent } from '../components/users/m-login/m-login.component';
import { MDashboardComponent } from '../components/users/m-dashboard/m-dashboard.component';
import { MCursoComponent } from '../components/users/m-curso/m-curso.component';
import { MExamenComponent } from '../components/users/m-examen/m-examen.component';
import { MPerfilComponent } from '../components/users/m-perfil/m-perfil.component';
import { MRespuestaComponent } from '../components/users/m-respuesta/m-respuesta.component';

import { MPageFoundComponent } from '../_directives/m-page-found/m-page-found.component';

// component perfil admin
import { MAdminLoginComponent } from '../components/admin/m-admin-login/m-admin-login.component';
import { MAdminDashboardComponent } from '../components/admin/m-admin-dashboard/m-admin-dashboard.component';
import { MAdminPerfilComponent } from '../components/admin/m-admin-perfil/m-admin-perfil.component';
import { MAdminContraComponent } from '../components/admin/m-admin-perfil/m-admin-contra.component';
import { MAdminUnidadComponent } from '../components/admin/m-admin-unidad/m-admin-unidad.component';
import { MNewUnidadComponent } from '../components/admin/m-admin-unidad/m-new-unidad.component';
import { MEditUnidadComponent } from '../components/admin/m-admin-unidad/m-edit-unidad.component';
import { MAdminCursoComponent } from '../components/admin/m-admin-curso/m-admin-curso.component';
import { MNewCursoComponent } from '../components/admin/m-admin-curso/m-new-curso.component';
import { MEditCursoComponent } from '../components/admin/m-admin-curso/m-edit-curso.component';
import { MAdminModuloComponent } from '../components/admin/m-admin-modulo/m-admin-modulo.component';
import { MNewModuloComponent } from '../components/admin/m-admin-modulo/m-new-modulo.component';
import { MEditModuloComponent } from '../components/admin/m-admin-modulo/m-edit-modulo.component';
import { MAdminTemaComponent } from '../components/admin/m-admin-tema/m-admin-tema.component';
import { MNewTemaComponent } from '../components/admin/m-admin-tema/m-new-tema.component';
import { MEditTemaComponent } from '../components/admin/m-admin-tema/m-edit-tema.component';
import { MAdminExamenComponent } from '../components/admin/m-admin-examen/m-admin-examen.component';
import { MNewExamenComponent } from '../components/admin/m-admin-examen/m-new-examen.component';
import { MEditExamenComponent } from '../components/admin/m-admin-examen/m-edit-examen.component';
import { MAdminRespuestaComponent } from '../components/admin/m-admin-respuesta/m-admin-respuesta.component';
import { MNewRespuestaComponent } from '../components/admin/m-admin-respuesta/m-new-respuesta.component';
import { MEditRespuestaComponent } from '../components/admin/m-admin-respuesta/m-edit-respuesta.component';
import { MAdminMatriculaComponent } from '../components/admin/m-admin-matricula/m-admin-matricula.component';

const routes: Routes = [
  { path: '', component: MLoginComponent },
  { path: 'users/login', component: MLoginComponent },
  { path: 'users/dashboard', component: MDashboardComponent },
  { path: 'users/perfil/:id', component: MPerfilComponent },
  { path: 'users/contra/:id', component: MDashboardComponent },
  { path: 'users/curso', component: MCursoComponent },
  { path: 'users/curso/:curso/:unidad/:tema', component: MCursoComponent },
  { path: 'users/examen/:curso/:unidad/:tema', component: MExamenComponent },
  { path: 'users/respuesta/:curso/:unidad/:tema', component: MRespuestaComponent },
  { path: 'admin', component: MAdminLoginComponent },
  { path: 'admin/login', component: MAdminLoginComponent },
  { path: 'admin/perfil/edit/:id', component: MAdminPerfilComponent },
  { path: 'admin/perfil/contra/:id', component: MAdminContraComponent },
  { path: 'admin/dashboard', component: MAdminDashboardComponent },
  { path: 'admin/unidad', component: MAdminUnidadComponent },
  { path: 'admin/unidad/add', component: MNewUnidadComponent },
  { path: 'admin/unidad/edit/:id', component: MEditUnidadComponent },
  { path: 'admin/curso', component: MAdminCursoComponent },
  { path: 'admin/curso/add', component: MNewCursoComponent },
  { path: 'admin/curso/edit/:id', component: MEditCursoComponent },
  { path: 'admin/modulo', component: MAdminModuloComponent },
  { path: 'admin/modulo/add', component: MNewModuloComponent },
  { path: 'admin/modulo/edit/:id', component: MEditModuloComponent },
  { path: 'admin/tema', component: MAdminTemaComponent },
  { path: 'admin/tema/add', component: MNewTemaComponent },
  { path: 'admin/tema/edit/:id', component: MEditTemaComponent },
  { path: 'admin/examen', component: MAdminExamenComponent },
  { path: 'admin/examen/add', component: MNewExamenComponent },
  { path: 'admin/examen/edit/:id', component: MEditExamenComponent },
  { path: 'admin/respuesta', component: MAdminRespuestaComponent },
  { path: 'admin/respuesta/add', component: MNewRespuestaComponent },
  { path: 'admin/respuesta/edit/:id', component: MEditRespuestaComponent },
  { path: 'admin/matricula', component: MAdminMatriculaComponent },
  { path: 'salir', component: MAdminDashboardComponent },
  { path: '**', component: MPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
