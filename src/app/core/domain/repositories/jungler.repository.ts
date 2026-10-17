import { Observable } from "rxjs";
import { Jungler } from "../models/jungler.model";

/**
 * Contrato del repositorio de campeones junglers.
 *
 * @remarks
 * Esta clase abstracta pertenece a la **capa de Domain**
 * y define el contrato que deben cumplir todas las
 * implementaciones de repositorios de junglers en Angular.
 *
 * El dominio:
 * - NO conoce detalles de infraestructura
 * - NO depende de HttpClient ni de frameworks externos
 *
 * Cualquier fuente de datos (Local, Node, SpringBoot)
 * puede ser utilizada siempre que implemente este contrato.
 *
 * @see {@link Jungler}
 */
export abstract class JunglerRepository {
  /**
   * Obtiene un listado de campeones junglers.
   *
   * @param countJunglers - Cantidad de junglers a obtener
   * @returns Observable que emite un arreglo de {@link Jungler}
   */
  abstract getAll(countJunglers: number): Observable<Jungler[]>;
}
