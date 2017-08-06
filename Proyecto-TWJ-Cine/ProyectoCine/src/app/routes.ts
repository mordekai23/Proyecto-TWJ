import {SuscribirseComponent} from "./Componentes/suscribirse/suscribirse.component";
import {RouterModule, Routes} from "@angular/router";
import {NuevaContrasenaComponent} from "./Componentes/nueva-contrasena/nueva-contrasena.component";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by Pc Xtreme on 06/08/2017.
 */
export const routes: Routes = [
  {
    path:"suscribirse",
    component:SuscribirseComponent

  },
  {
    path:"nuevaContasena",
    component:NuevaContrasenaComponent
  }
];
export const ModuloDeRutas: ModuleWithProviders =
  RouterModule.forRoot(routes);
