import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class EstaLogeadoService implements CanActivate {
  constructor(private _authService: AuthService,
              private _router: Router) {
  }
//Habilitar pestañas
  canActivate() {
    console.log("Intentando Entrar a la Vista");
    if (this._authService.estaLogeado) {
      this._router.navigate(["Suscribirse"]);
      return true
    } else {
      this._router.navigate(["Suscribirse"]);
      return false
    }
  }
}
