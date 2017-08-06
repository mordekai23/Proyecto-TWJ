import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {UsuarioClass} from "../../Clases/Usuario";

@Component({
  selector: 'app-suscribirse',
  templateUrl: './suscribirse.component.html',
  styleUrls: ['./suscribirse.component.css']
})
export class SuscribirseComponent implements OnInit {

  nombre: string = "";
  correo: string = "";
  password: string = "";


  cine: UsuarioClass [] = [];
  nuevoUsuario: UsuarioClass = new UsuarioClass();

  constructor(private _http: Http) {
  }

  ngOnInit() {

    this._http.get('http://localhost:1337/Usuario')
      .subscribe(
        respuesta => {
          let respJson: UsuarioClass[] = respuesta.json();
          console.log("respuesta json:", respJson);
          this.cine = respJson;
          console.log("NUsuarioEnCine: ", this.cine);
        },
        error => {
          console.log("Error", error)
        }
      )
  }

  crearUsuario() {
    console.log("Guardo los datos");
    this._http.post('http://localhost:1337/Usuario', this.nuevoUsuario)
      .subscribe(
        respuesta => {
          let respuestaJson = respuesta.json();
          console.log('respuestaJson: ', respuestaJson);
          this.cine.push(respuestaJson);
        },
        error => {
          console.log("Error", error)
        }
      )
  }


}
