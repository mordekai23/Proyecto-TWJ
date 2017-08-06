import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {

  constructor(private router: Router,
              private rutaActiva: ActivatedRoute) { }

  ngOnInit() { this.rutaActiva.params.subscribe(
    params=>{
      console.log("Parametros:",params);
    }
  )
  }
}
