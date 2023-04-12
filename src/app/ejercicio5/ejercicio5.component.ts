import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.component.html',
  styleUrls: ['./ejercicio5.component.css']
})
export class Ejercicio5Component implements OnInit {

aceptar: boolean= false;

  ngOnInit(): void {
    
  }

  cambiar(){
    this.aceptar=!this.aceptar;
  }

}
