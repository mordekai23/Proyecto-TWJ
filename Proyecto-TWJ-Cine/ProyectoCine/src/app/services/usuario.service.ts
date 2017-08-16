import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {MasterUrlService} from "./master-url.service";
import {TokenService} from "./token.service";
import 'rxjs/add/operator/map';
import {UsuarioClass} from "../Clases/Usuario";


@Injectable()
export class UsuarioService {
  url:string;
  modelo = 'Usuario';
  headers:Headers;
  constructor(private _http:Http,
              private _masterUrlService:MasterUrlService,
              private _tokenService:TokenService) {


    this.url = this._masterUrlService.url + this.modelo;
    this.headers = new Headers();
    this.headers.append('Authorization', 'bearer '
      + this._tokenService.token);
  }
  crear(usuario:UsuarioClass){
    let datosAEnviar = {
      nombre:usuario.nombre,
      password:usuario.password
    };
    return this._http
      .post(this.url,datosAEnviar,{ headers:this.headers})
      .map(res => {
        return res.json()
      })
  }
}
