import { inject, Injectable } from '@angular/core';
import { PersonajeRepository } from '../../../domain/repositories/personaje.repository';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Personaje } from '../../../domain/models/personaje.model';

/**
 * Implementación del repositorio de personajes respaldada por el backend Node.js.
 *
 * @remarks
 * Adapta el contrato del dominio {@link PersonajeRepository} delegando
 * la consulta HTTP al {@link DataService}. No contiene lógica de negocio
 * ni transforma los resultados.
 *
 * @layer Infrastructure
 *
 * @see PersonajeRepository
 * @see DataService
 */
@Injectable()
export class PersonajeNodeRepositoryImpl extends PersonajeRepository{
  
  /** Fuente de datos que realiza las solicitudes al backend Node.js. */
  private dataService = inject(DataService);

  /**
   * Solicita personajes al backend Node.js.
   *
   * @param countPersonajes - Cantidad de personajes solicitada.
   * @returns Observable con los personajes recibidos del backend.
   */
  getAll(countPersonajes: number): Observable<Personaje[]> {
    return this.dataService.getAllPersonajesNode(countPersonajes);
  }
}
