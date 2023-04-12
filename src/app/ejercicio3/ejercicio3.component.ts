import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component {
  num1=3
  cad = " Holita"
  ngOnInit(){
    console.log(this.sumaAleatorio(this.num1));
  }
sumaAleatorio(num:number){
  return num + this.cad;
}
}
