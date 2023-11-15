import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipos } from 'src/Modelo/equipos';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) {}

  getAllEquipos(): Observable<Equipos[]> {
    return this.http.get<Equipos[]>('http://localhost:8080/equipo/todos');
  }
  addEquipo(equipo:Equipos ): Observable<void> {
    return this.http.post<void>('http://localhost:8080/equipo', equipo);
  }

}
