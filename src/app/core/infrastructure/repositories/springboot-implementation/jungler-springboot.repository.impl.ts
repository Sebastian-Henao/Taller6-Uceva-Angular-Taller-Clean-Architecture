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

  private dataService = inject(DataService);

  getAll(countJunglers: number): Observable<Jungler[]> {
    return this.dataService.getAllJunglersSpringBoot(countJunglers);
  }
}
