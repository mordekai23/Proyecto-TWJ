import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Http} from "@angular/http";
import {UsuarioClass} from "../../Clases/Usuario";
;
import {AuthService} from "../../services/auth.service";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {
  nombre: string= "";
  correo: string= "";
  password: string = "";


  usuarios: UsuarioClass [] = [];
  nuevoUsuario: UsuarioClass = new UsuarioClass();
  constructor(private _tokenService:TokenService,
+              private _authService:AuthService) { }

  ngOnInit() {
  console.log(this._tokenService.token)
  }
  logearse(){
        this._authService.hacerLogin(this.correo,this.password);
      }
}
