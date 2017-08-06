import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CineComponent } from './Componentes/cine/cine.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { SuscribirseComponent } from './Componentes/suscribirse/suscribirse.component';
import { NuevaContraseñaComponent } from './Componentes/nueva-contraseña/nueva-contraseña.component';

@NgModule({
  declarations: [
    AppComponent,
    CineComponent,
    SuscribirseComponent,
    NuevaContraseñaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [CineComponent]
})
export class AppModule { }
