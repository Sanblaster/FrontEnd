import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Equipos } from 'src/Modelo/equipos';
import { EquipoService } from 'src/Servicios/equipo.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  equipo!: Equipos;

  constructor(private equipoService: EquipoService) { }

  enviar() {

    this.equipoService.agregar(this.equipo).subscribe(() => {

    });
  }
}

