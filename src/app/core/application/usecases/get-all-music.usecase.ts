import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../../domain/models/music.model';
import { MusicRepository } from '../../domain/repositories/music.repository';

/**
 * Recupera canciones a través del contrato del dominio, sin acoplarse a una API.
 */
@Injectable()
export class GetAllMusicUseCase {
  /** Repositorio de música resuelto por el proveedor de infraestructura. */
  private readonly musicRepository = inject(MusicRepository);

  /**
   * Solicita canciones al repositorio configurado.
   *
   * @param count Cantidad de canciones que se desea obtener.
   * @returns Flujo con las canciones recuperadas.
   */
  execute(count: number): Observable<Music[]> {
    return this.musicRepository.getAll(count);
  }
}
