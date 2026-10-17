import { inject, Injectable } from '@angular/core';
import { PersonajeRepository } from '../../../domain/repositories/personaje.repository';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Personaje } from '../../../domain/models/personaje.model';

@Injectable()
export class PersonajeNodeRepositoryImpl extends PersonajeRepository{
  
  private dataService = inject(DataService);

  getAll(couuntPersonajes: number): Observable<Personaje[]> {
    return this.dataService.getAllPersonajesNode(couuntPersonajes);
  }
}
