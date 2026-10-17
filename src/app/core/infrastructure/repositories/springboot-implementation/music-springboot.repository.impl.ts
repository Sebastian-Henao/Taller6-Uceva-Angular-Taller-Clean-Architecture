import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../../../domain/models/music.model';
import { MusicRepository } from '../../../domain/repositories/music.repository';
import { DataService } from '../../services/data.service';

/**
 * Adaptador del repositorio de música para la API Spring Boot.
 */
@Injectable()
export class MusicSpringBootRepositoryImpl extends MusicRepository {
  private readonly dataService = inject(DataService);

  getAll(count: number): Observable<Music[]> {
    return this.dataService.getAllMusicSpringBoot(count);
  }
}
