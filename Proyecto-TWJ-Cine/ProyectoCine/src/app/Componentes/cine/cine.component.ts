import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Http} from "@angular/http";
import {UsuarioClass} from "../../Clases/Usuario";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {TokenService} from "../../services/token.service";


@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {
  correo:string;
  password:string;

  cine: UsuarioClass []= [];
  nuevoUsuario: UsuarioClass = new UsuarioClass();

  constructor(private _tokenService:TokenService,
              private _authService:AuthService) { }

  ngOnInit() {
    console.log(this._tokenService.token)
  }
  logearse(UsuarioFormulario:NgForm){
    console.log("hola");
    const correo=UsuarioFormulario.value.correoN;
    const pass=UsuarioFormulario.value.password;
    console.log("Correo", correo, "Pass", pass);
    this._authService.hacerLogin(correo,pass);
  }

}
