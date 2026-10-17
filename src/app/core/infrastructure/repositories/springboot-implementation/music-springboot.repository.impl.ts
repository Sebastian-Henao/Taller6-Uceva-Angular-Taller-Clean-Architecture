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
  /** Servicio que realiza las solicitudes HTTP a Spring Boot. */
  private readonly dataService = inject(DataService);

  /**
   * Recupera canciones desde la API Spring Boot.
   *
   * @param count Cantidad de canciones solicitadas.
   * @returns Flujo observable con las canciones recibidas.
   */
  getAll(count: number): Observable<Music[]> {
    return this.dataService.getAllMusicSpringBoot(count);
  }
}
