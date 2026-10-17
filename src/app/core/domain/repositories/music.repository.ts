import { Observable } from 'rxjs';
import { Music } from '../models/music.model';

/**
 * Contrato del dominio para consultar el catálogo de música.
 */
export abstract class MusicRepository {
  abstract getAll(count: number): Observable<Music[]>;
}
