import { Observable } from 'rxjs';
import { Music } from '../models/music.model';

/**
 * Contrato del dominio para consultar el catálogo de música.
 */
export abstract class MusicRepository {
  /**
   * Obtiene una cantidad de canciones desde la fuente configurada.
   *
   * @param count Cantidad de canciones solicitadas.
   * @returns Flujo observable con las canciones.
   */
  abstract getAll(count: number): Observable<Music[]>;
}
