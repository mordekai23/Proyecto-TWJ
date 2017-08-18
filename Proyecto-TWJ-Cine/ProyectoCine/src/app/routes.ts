import {SuscribirseComponent} from "./Componentes/suscribirse/suscribirse.component";
import {RouterModule, Routes} from "@angular/router";
import {NuevaContrasenaComponent} from "./Componentes/nueva-contrasena/nueva-contrasena.component";
import {ModuleWithProviders} from "@angular/core";
import {AppComponent} from "./app.component";
import {EstaLogeadoService} from "./services/esta-logeado.service";
import {PrincipalComponent} from "./Componentes/principal/principal.component";
import {VistaPeliDosComponent} from "./Componentes/vista-peli-dos/vista-peli-dos.component";
import {VistaPeliUnoComponent} from "./Componentes/vista-peli-uno/vista-peli-uno.component";
import {CineComponent} from "./Componentes/cine/cine.component";

/**
 * Created by Pc Xtreme on 06/08/2017.
 */
export const routes: Routes = [
  {
    path:"InicioCine",
    component:CineComponent,
    canActivate: [
      EstaLogeadoService
    ]
  },
  {
    path:"PeliUno",
    component:VistaPeliUnoComponent
  },
  {
    path:"PeliDos",
    component:VistaPeliDosComponent
  },
  {
    path:"Principal",
    component:PrincipalComponent

  },
  {
    path:"Suscribirse",
    component:SuscribirseComponent
  },
  {
    path:"NuevaContasena",
    component:NuevaContrasenaComponent
  }
];
export const ModuloDeRutas: ModuleWithProviders =
  RouterModule.forRoot(routes);

