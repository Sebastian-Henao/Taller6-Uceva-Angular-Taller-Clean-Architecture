import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JunglerRepository } from "../../../domain/repositories/jungler.repository";
import { DataService } from "../../services/data.service";
import { Jungler } from "../../../domain/models/jungler.model";

/**
 * Implementación Node.js del repositorio de campeones junglers.
 *
 * @remarks
 * Pertenece a la **capa de Infrastructure** y actúa como un Adapter
 * entre el contrato {@link JunglerRepository} y {@link DataService}
 * para consumir el backend Express en Node.js.
 */
@Injectable()
export class JunglerNodeRepositoryImpl extends JunglerRepository {

  /** Servicio que realiza las solicitudes HTTP al backend Node.js. */
  private dataService = inject(DataService);

  /**
   * Obtiene junglers desde la API Node.js.
   *
   * @param countJunglers Cantidad de junglers solicitados.
   * @returns Flujo observable con los junglers recibidos.
   */
  getAll(countJunglers: number): Observable<Jungler[]> {
    return this.dataService.getAllJunglersNode(countJunglers);
  }
}
