import { Personaje } from "../core/domain/models/personaje.model";

/**
 * Datos de ejemplo de personajes para pruebas y demostraciones locales.
 *
 * Cada elemento cumple el modelo de dominio {@link Personaje}.
 */
export const PERSONAJES_MOCK: Personaje[] = [
    {
        id: 1,
        nombre: 'Loki',
        alias: 'Dios de las mentiras',
        juego: 'Marvel Rivals',
        habilidad: 'Hecicero',
        rol: 'Ilusionista'
    },
    {
        id: 2,
        nombre: 'Nathan Drake',
        alias: 'Nate',
        juego: 'Uncharted',
        habilidad: 'Experto en armas y supervivencia',
        rol: 'Ladron',
    }
];