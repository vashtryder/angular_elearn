import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppComponent } from './app.component';

import * as $ from 'jquery';

import { AppGlobals, AlertService } from './_services/index';
import { AppRoutingModule } from './_routes/app.routing';
import { AdminFakeBackendInterceptor } from './_helpers/admin/fake-backend';
import { UserFakeBackendInterceptor } from './_helpers/users/fake-backend';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/erro.interceptor';
import { AdminAuthGuard } from './_guards/admin/auth.guard';
import { UsersAuthGuard } from './_guards/users/auth.guard';

// Componente Perfil Usuario
import { UsersModule } from './components/users/users.module';

// servicios Peril Usuario
import { LoginService, UserService } from './_services/users/index';

// Componente Perfil Administrador
import { AdminModule } from './components/admin/admin.module';

// Servicios Perfil Administrador
import {
  AuthenticationService,
  AdminLoginService,
  AdminUnidadService,
  AdminCursoService,
  AdminExamenService,
  AdminModuloService,
  AdminRespuestaService,
  AdminSuscriptorService,
  AdminTemaService } from './_services/admin/index';

// componente Pagina
import { MPageFoundComponent } from './_directives/m-page-found/m-page-found.component';
import { AlertComponent } from './_directives/alert/alert.component';

@NgModule({
  declarations: [
    AlertComponent,
    AlertComponent,
    MPageFoundComponent,
  ],
  imports: [
    AdminModule,
    UsersModule,
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
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
