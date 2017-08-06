import {SuscribirseComponent} from "./Componentes/suscribirse/suscribirse.component";
import {Routes} from "@angular/router";
import {NuevaContraseñaComponent} from "./Componentes/nueva-contraseña/nueva-contraseña.component";
/**
 * Created by Pc Xtreme on 06/08/2017.
 */
export const routes: Routes = [
  {
    path:"suscribirse",
    component:SuscribirseComponent,

  },
  {
    path:"nuevaContaseña",
    component:NuevaContraseñaComponent,
  }
];
