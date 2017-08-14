import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class EstaLogeadoService implements CanActivate {

  constructor(private _authService:AuthService,
              private _router:Router) { }

  canActivate(){
    console.log("Intentando Entrar a la Vista");

    if(this._authService.estaLogeado){
      return true
    }else {
      this._router.navigate(["login"]);
      return false
    }
  }
}
