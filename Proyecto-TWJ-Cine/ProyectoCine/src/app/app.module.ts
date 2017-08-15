import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CineComponent } from './Componentes/cine/cine.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { SuscribirseComponent } from './Componentes/suscribirse/suscribirse.component';
import {  NuevaContrasenaComponent,} from './Componentes/nueva-contrasena/nueva-contrasena.component';
import {ModuloDeRutas} from "./routes";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SinEspacios} from './validaciones';
import {UsuarioService} from "./services/usuario.service";
import {MasterUrlService} from "./services/master-url.service";
import {AuthService} from "./services/auth.service";
import {EstaLogeadoService} from "./services/esta-logeado.service";
import {ApiAuthService} from "./services/api-auth.service";
import {TokenService} from "./services/token.service";
import { LoginComponent } from './Componentes/login/login.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    CineComponent,
    SuscribirseComponent,
    NuevaContrasenaComponent,
    //SinEspacios,
   // LoginComponent,
    //InicioComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuloDeRutas,
    //LoginComponent,
    //InicioComponent,
    NgbModule.forRoot()
  ],
  providers: [
    /*UsuarioService,
    MasterUrlService,
    AuthService,
    EstaLogeadoService,
    ApiAuthService,
    TokenService,*/
  ],
  bootstrap: [CineComponent]
})
export class AppModule { }
