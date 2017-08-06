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
  cine: UsuarioClass []= [];
  nuevoUsuario: UsuarioClass = new UsuarioClass();
  constructor(private _http:Http, private router: Router,
              private rutaActiva: ActivatedRoute) { }

  ngOnInit() { this.rutaActiva.params.subscribe(
    params=>{
      console.log("Parametros:",params);
    }
  )

  }
}
