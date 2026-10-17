import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../../../domain/models/music.model';
import { MusicRepository } from '../../../domain/repositories/music.repository';
import { DataService } from '../../services/data.service';

/**
 * Adaptador del repositorio de música para la API Node.js.
 */
@Injectable()
export class MusicNodeRepositoryImpl extends MusicRepository {
  /** Servicio que realiza las solicitudes HTTP a Node.js. */
  private readonly dataService = inject(DataService);

  /**
   * Recupera canciones desde la API Node.js.
   *
   * @param count Cantidad de canciones solicitadas.
   * @returns Flujo observable con las canciones recibidas.
   */
  getAll(count: number): Observable<Music[]> {
    return this.dataService.getAllMusicNode(count);
  }
}
