import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../../domain/models/music.model';
import { MusicRepository } from '../../domain/repositories/music.repository';

/**
 * Recupera canciones a través del contrato del dominio, sin acoplarse a una API.
 */
@Injectable()
export class GetAllMusicUseCase {
  private readonly musicRepository = inject(MusicRepository);

  execute(count: number): Observable<Music[]> {
    return this.musicRepository.getAll(count);
  }
}
