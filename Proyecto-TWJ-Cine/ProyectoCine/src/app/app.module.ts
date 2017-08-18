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
import {UsuarioService} from "./services/usuario.service";
import {MasterUrlService} from "./services/master-url.service";
import {AuthService} from "./services/auth.service";
import {EstaLogeadoService} from "./services/esta-logeado.service";
import {ApiAuthService} from "./services/api-auth.service";
import {TokenService} from "./services/token.service";
import { VistaPrincipalComponent } from './Componentes/vista-principal/vista-principal.component';
import { VistaPeliUnoComponent } from './Componentes/vista-peli-uno/vista-peli-uno.component';
import { VistaPeliDosComponent } from './Componentes/vista-peli-dos/vista-peli-dos.component';
import { PrincipalComponent } from './Componentes/principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    CineComponent,
    SuscribirseComponent,
    NuevaContrasenaComponent,
    VistaPrincipalComponent,
    VistaPeliUnoComponent,
    VistaPeliDosComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuloDeRutas,
    NgbModule.forRoot()
  ],
  providers: [
    EstaLogeadoService,
    MasterUrlService,
    TokenService,
    ApiAuthService,
    UsuarioService,
    AuthService

  ],
  bootstrap: [CineComponent]
})
export class AppModule { }
