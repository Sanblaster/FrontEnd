import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipoComponent } from './Componentes/equipo/equipo.component';
import { CrearComponent } from './Componentes/crear/crear.component';
import { MostrarComponent } from './Componentes/mostrar/mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    CrearComponent,
    MostrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
