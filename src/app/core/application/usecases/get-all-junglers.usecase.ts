import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jungler } from '../../domain/models/jungler.model';
import { JunglerRepository } from '../../domain/repositories/jungler.repository';

/**
 * Caso de uso para obtener el listado de campeones junglers de League of Legends.
 *
 * @description
 * Este caso de uso pertenece a la **capa de aplicación** y representa
 * la acción del sistema orientada al negocio: recuperar los campeones
 * junglers solicitados.
 *
 * Actúa como intermediario entre la capa de presentación y el dominio,
 * delegando la obtención de datos al contrato `JunglerRepository`.
 *
 * @remarks
 * - No conoce detalles de infraestructura.
 * - No conoce HttpClient.
 * - No transforma los datos para la UI.
 *
 * La dependencia se resuelve mediante inyección por contrato
 * utilizando la función `inject()` de Angular.
 *
 * @see Jungler
 * @see JunglerRepository
 */
@Injectable()
export class GetAllJunglersUseCase {

  /**
   * Repositorio de junglers inyectado por contrato abstracto.
   */
  private junglerRepository = inject(JunglerRepository);

  /**
   * Ejecuta el caso de uso.
   *
   * @param countJunglers - Cantidad de campeones a obtener
   * @returns Observable que emite el listado de campeones junglers
   */
  execute(countJunglers: number): Observable<Jungler[]> {
    return this.junglerRepository.getAll(countJunglers);
  }
}
