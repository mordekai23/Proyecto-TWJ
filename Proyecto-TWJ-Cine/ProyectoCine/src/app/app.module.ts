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


@NgModule({
  declarations: [
    AppComponent,
    CineComponent,
    SuscribirseComponent,
    NuevaContrasenaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuloDeRutas,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [CineComponent]
})
export class AppModule { }
