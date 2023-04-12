import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImagenComponent } from './imagen/imagen.component';
import { ListaComponent } from './lista/lista.component';
import { TablaComponent } from './tabla/tabla.component';
import { EnlaceComponent } from './enlace/enlace.component';
import { EmmetComponent } from './emmet/emmet.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';
import { Ejercicio5Component } from './ejercicio5/ejercicio5.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenComponent,
    ListaComponent,
    TablaComponent,
    EnlaceComponent,
    EmmetComponent,
    Ejercicio3Component,
    Ejercicio4Component,
    Ejercicio5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
