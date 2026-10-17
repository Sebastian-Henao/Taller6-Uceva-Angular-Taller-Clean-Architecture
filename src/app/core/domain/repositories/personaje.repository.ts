import { Observable } from "rxjs";
import { Personaje } from "../models/personaje.model";

/**
 * Contrato del repositorio de personajes dentro del dominio.
 *
 * @remarks
 * Define las operaciones que deben proporcionar las implementaciones
 * de infraestructura, sin acoplar el dominio a una fuente concreta
 * como datos locales o un backend.
 *
 * @architecture Clean Architecture
 * @layer Domain
 *
 * @see Personaje
 */
export abstract class PersonajeRepository {
    /**
     * Obtiene una cantidad determinada de personajes.
     *
     * @param countPersonajes - Cantidad de personajes solicitada.
     * @returns Observable que emite los personajes obtenidos.
     *
     * @remarks
     * El repositorio no define el origen de los datos y propaga al
     * consumidor los errores de la fuente seleccionada.
     */
    abstract getAll(countPersonajes: number): Observable<Personaje[]>;
}