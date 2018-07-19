import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppComponent } from './app.component';

import * as $ from 'jquery';

// Componente Perfil Usuario
import { MLoginComponent } from './components/users/m-login/m-login.component';
import { MMenuComponent } from './components/users/m-menu/m-menu.component';
import { MDashboardComponent } from './components/users/m-dashboard/m-dashboard.component';
import { MCursoComponent } from './components/users/m-curso/m-curso.component';
import { MExamenComponent } from './components/users/m-examen/m-examen.component';
import { MPerfilComponent } from './components/users/m-perfil/m-perfil.component';
import { MRespuestaComponent } from './components/users/m-respuesta/m-respuesta.component';
import { MFooterComponent } from './components/users/m-footer/m-footer.component';

// Componente Perfil Administrador
import { MAdminLoginComponent } from './components/admin/m-admin-login/m-admin-login.component';
import { MAdminDashboardComponent } from './components/admin/m-admin-dashboard/m-admin-dashboard.component';
import { MAdminMenuComponent } from './components/admin/m-admin-menu/m-admin-menu.component';
import { MAdminFooterComponent } from './components/admin/m-admin-footer/m-admin-footer.component';
import { MAdminPerfilComponent } from './components/admin/m-admin-perfil/m-admin-perfil.component';
import { MAdminContraComponent } from './components/admin/m-admin-perfil/m-admin-contra.component';
import { MAdminUnidadComponent } from './components/admin/m-admin-unidad/m-admin-unidad.component';
import { MNewUnidadComponent } from './components/admin/m-admin-unidad/m-new-unidad.component';
import { MEditUnidadComponent } from './components/admin/m-admin-unidad/m-edit-unidad.component';
import { MAdminCursoComponent } from './components/admin/m-admin-curso/m-admin-curso.component';
import { MNewCursoComponent } from './components/admin/m-admin-curso/m-new-curso.component';
import { MEditCursoComponent } from './components/admin/m-admin-curso/m-edit-curso.component';
import { MAdminModuloComponent } from './components/admin/m-admin-modulo/m-admin-modulo.component';
import { MNewModuloComponent } from './components/admin/m-admin-modulo/m-new-modulo.component';
import { MEditModuloComponent } from './components/admin/m-admin-modulo/m-edit-modulo.component';
import { MAdminTemaComponent } from './components/admin/m-admin-tema/m-admin-tema.component';
import { MNewTemaComponent } from './components/admin/m-admin-tema/m-new-tema.component';
import { MEditTemaComponent } from './components/admin/m-admin-tema/m-edit-tema.component';
import { MAdminExamenComponent } from './components/admin/m-admin-examen/m-admin-examen.component';
import { MNewExamenComponent } from './components/admin/m-admin-examen/m-new-examen.component';
import { MEditExamenComponent } from './components/admin/m-admin-examen/m-edit-examen.component';
import { MAdminRespuestaComponent } from './components/admin/m-admin-respuesta/m-admin-respuesta.component';
import { MNewRespuestaComponent } from './components/admin/m-admin-respuesta/m-new-respuesta.component';
import { MEditRespuestaComponent } from './components/admin/m-admin-respuesta/m-edit-respuesta.component';
import { MAdminSubMenuComponent } from './components/admin/m-admin-sub-menu/m-admin-sub-menu.component';
import { MAdminMainComponent } from './components/admin/m-admin-main/m-admin-main.component';
import { MAdminMatriculaComponent } from './components/admin/m-admin-matricula/m-admin-matricula.component';

// componente Pagina
import { MPageFoundComponent } from './components/m-page-found/m-page-found.component';

// Servicios Perfil Usuario
import { LoginService } from './services/users/login.service';

// Servicios Perfil Administrador
import { AdminLoginService } from './services/admin/admin-login.service';
import { AdminUnidadService } from './services/admin/admin-unidad.service';
import { AdminCursoService } from './services/admin/admin-curso.service';
import { AdminExamenService } from './services/admin/admin-examen.service';
import { AdminModuloService } from './services/admin/admin-modulo.service';
import { AdminRespuestaService } from './services/admin/admin-respuesta.service';
import { AdminSuscriptorService } from './services/admin/admin-suscriptor.service';
import { AdminTemaService } from './services/admin/admin-tema.service';

import { AppRoutingModule } from './routes/app.routing';

import { AppGlobals } from './services/admin-global';
import { AlertComponent } from './directives/alert/alert.component';
import { AuthenticationService, AlertService } from './services';

import { AdminFakeBackendInterceptor } from './helpers/admin/fake-backend';
import { UserFakeBackendInterceptor } from './helpers/users/fake-backend';
import { AdminAuthGuard } from './guards/admin/auth.guard';
import { UsersAuthGuard } from './guards/users/auth.guard';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/erro.interceptor';

@NgModule({
  declarations: [
    AlertComponent,
    MLoginComponent,
    MMenuComponent,
    MDashboardComponent,
    MAdminLoginComponent,
    MAdminDashboardComponent,
    MPageFoundComponent,
    MCursoComponent,
    MExamenComponent,
    MPerfilComponent,
    MRespuestaComponent,
    MFooterComponent,
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
    MAdminMatriculaComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AdminAuthGuard,
    AuthenticationService,
    AdminFakeBackendInterceptor,
    AlertService,
    LoginService,
    AdminLoginService,
    AdminUnidadService,
    AdminCursoService,
    AdminModuloService,
    AdminTemaService,
    AdminExamenService,
    AdminRespuestaService,
    AdminSuscriptorService,
    AppGlobals,
    UsersAuthGuard,
    UserFakeBackendInterceptor,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
