import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JunglerRepository } from "../../../domain/repositories/jungler.repository";
import { DataService } from "../../services/data.service";
import { Jungler } from "../../../domain/models/jungler.model";

/**
 * Implementación local en memoria del repositorio de junglers.
 *
 * @remarks
 * Pertenece a la **capa de Infrastructure** y actúa como un Adapter
 * entre el contrato {@link JunglerRepository} y {@link DataService}.
 */
@Injectable()
export class JunglerLocalRepositoryImpl extends JunglerRepository {

  private dataService = inject(DataService);

  getAll(countJunglers: number): Observable<Jungler[]> {
    return this.dataService.getAllJunglersLocal(countJunglers);
  }
}
