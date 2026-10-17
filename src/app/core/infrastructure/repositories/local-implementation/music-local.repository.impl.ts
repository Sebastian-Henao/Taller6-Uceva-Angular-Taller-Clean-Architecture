import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../../../domain/models/music.model';
import { MusicRepository } from '../../../domain/repositories/music.repository';
import { DataService } from '../../services/data.service';

/**
 * Adaptador del repositorio de música para datos locales de demostración.
 */
@Injectable()
export class MusicLocalRepositoryImpl extends MusicRepository {
  private readonly dataService = inject(DataService);

  getAll(count: number): Observable<Music[]> {
    return this.dataService.getAllMusicLocal(count);
  }
}
