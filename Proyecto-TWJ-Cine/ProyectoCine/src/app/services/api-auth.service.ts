import { Injectable } from '@angular/core';
import {MasterUrlService} from "./master-url.service";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ApiAuthService {
  url:string;
  modelo = 'Auth';
  constructor(private _http:Http,
              private _masterUrlService:MasterUrlService) {
    this.url = this._masterUrlService.url + this.modelo;
  }
  logIn(correo:string,password:string){

    let metodo = '/logIn';

    let datosAEnviar = {
      correo,
      password:password
    };

    return this._http
      .post(this.url + metodo, datosAEnviar)
    //.map(res => res.json());
  }

}
