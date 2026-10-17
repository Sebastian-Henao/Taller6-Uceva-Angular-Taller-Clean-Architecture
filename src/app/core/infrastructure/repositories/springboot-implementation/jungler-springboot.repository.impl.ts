import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JunglerRepository } from "../../../domain/repositories/jungler.repository";
import { DataService } from "../../services/data.service";
import { Jungler } from "../../../domain/models/jungler.model";

/**
 * Implementación Spring Boot del repositorio de campeones junglers.
 *
 * @remarks
 * Pertenece a la **capa de Infrastructure** y actúa como un Adapter
 * entre el contrato {@link JunglerRepository} y {@link DataService}
 * para consumir el backend Spring Boot.
 */
@Injectable()
export class JunglerSpringBootRepositoryImpl extends JunglerRepository {

  /** Servicio que realiza las solicitudes HTTP a Spring Boot. */
  private dataService = inject(DataService);

  /**
   * Obtiene junglers desde la API Spring Boot.
   *
   * @param countJunglers Cantidad de junglers solicitados.
   * @returns Flujo observable con los junglers recibidos.
   */
  getAll(countJunglers: number): Observable<Jungler[]> {
    return this.dataService.getAllJunglersSpringBoot(countJunglers);
  }
}
