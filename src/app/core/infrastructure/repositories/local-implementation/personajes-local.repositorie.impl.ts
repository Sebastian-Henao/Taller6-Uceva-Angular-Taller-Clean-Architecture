import { inject, Injectable } from '@angular/core';
import { PersonajeRepository } from '../../../domain/repositories/personaje.repository';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Personaje } from '../../../domain/models/personaje.model';

/**
 * Implementación local del repositorio de personajes.
 *
 * @remarks
 * Adapta el contrato de dominio {@link PersonajeRepository} a los datos
 * locales generados por {@link DataService}. No contiene lógica de negocio
 * y puede sustituirse por otra implementación mediante la configuración
 * de proveedores de Angular.
 *
 * @layer Infrastructure
 *
 * @see PersonajeRepository
 * @see DataService
 */
@Injectable()
export class PersonajesLocalRepositorieImpl extends PersonajeRepository{
  /** Fuente de datos utilizada para generar el listado local. */
  private dataService = inject(DataService);

  /**
   * Obtiene personajes generados localmente.
   *
   * @param countPersonajes - Cantidad de personajes solicitada.
   * @returns Observable con los personajes generados.
   */
  getAll(countPersonajes: number): Observable<Personaje[]> {
    return this.dataService.getAllPersonajesLocal(countPersonajes);
  }
}
