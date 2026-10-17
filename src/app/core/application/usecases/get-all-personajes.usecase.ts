import { inject, Injectable } from '@angular/core';
import { PersonajeRepository } from '../../domain/repositories/personaje.repository';
import { Observable } from 'rxjs';
import { Personaje } from '../../domain/models/personaje.model';

/**
 * Caso de uso para obtener un listado de personajes.
 *
 * @description
 * Pertenece a la capa de aplicación y coordina la solicitud de personajes
 * delegándola al contrato {@link PersonajeRepository}, sin conocer los
 * detalles de su origen.
 *
 * @remarks
 * - No contiene lógica de presentación ni de infraestructura.
 * - Devuelve directamente los resultados y errores del repositorio.
 *
 * @architecture Clean Architecture
 * @layer Application
 *
 * @see Personaje
 * @see PersonajeRepository
 */
@Injectable()
export class GetAllPersonajesUsecase {
  /** Repositorio de personajes resuelto mediante inyección por contrato. */
  private personajesRepository = inject(PersonajeRepository);

  /**
   * Ejecuta la consulta de personajes.
   *
   * @param countPersonajes - Cantidad de personajes solicitada.
   * @returns Observable con los personajes devueltos por el repositorio.
   */
  execute(countPersonajes: number): Observable<Personaje[]> {
    return this.personajesRepository.getAll(countPersonajes);
  }
}
