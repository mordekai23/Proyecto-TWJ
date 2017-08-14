import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Http} from "@angular/http";
import {UsuarioClass} from "../../Clases/Usuario";


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
  constructor() { }

  ngOnInit() {
  }
}
