import {SuscribirseComponent} from "./Componentes/suscribirse/suscribirse.component";
import {RouterModule, Routes} from "@angular/router";
import {NuevaContrasenaComponent} from "./Componentes/nueva-contrasena/nueva-contrasena.component";
import {ModuleWithProviders} from "@angular/core";
import {AppComponent} from "./app.component";
import {EstaLogeadoService} from "./services/esta-logeado.service";
import {InicioComponent} from "./Componentes/inicio/inicio.component";

/**
 * Created by Pc Xtreme on 06/08/2017.
 */
export const routes: Routes = [
  {
    path:"inicio",
    component:InicioComponent,
      canActivate: [
        EstaLogeadoService
     ]
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

