/**
 * Modelo de dominio que representa un personaje de videojuego.
 *
 * @remarks
 * Se utiliza para transportar los datos de personajes entre las capas
 * de la aplicación y para mostrarlos en el listado de presentación.
 *
 * @example
 * ```ts
 * const personaje: Personaje = {
 *   id: 1,
 *   nombre: 'Loki',
 *   alias: 'Dios de las mentiras',
 *   juego: 'Marvel Rivals',
 *   habilidad: 'Hechicería',
 *   rol: 'Ilusionista',
 * };
 * ```
 *
 * @architecture Clean Architecture
 * @layer Domain
 *
 * @see RolCategoria
 */
export interface Personaje {
    /** Identificador único del personaje. */
    id: number;

    /** Nombre del personaje. */
    nombre: string;

    /** Alias o sobrenombre conocido del personaje. */
    alias: string;

    /** Juego al que pertenece el personaje. */
    juego: string;

    /** Habilidad o característica principal del personaje. */
    habilidad: string;

    /** Rol del personaje, restringido a los valores de {@link RolCategoria}. */
    rol: RolCategoria;
}

/**
 * Roles permitidos para clasificar personajes en el listado.
 *
 * @remarks
 * También se utiliza como clave para asignar el estilo visual del badge
 * que representa cada rol.
 *
 * @example
 * ```ts
 * const rol: RolCategoria = 'Vanguardia';
 * ```
 */
export type RolCategoria = 'Vanguardia' | 'Ladron' | 'Jefe' | 'Ilusionista' | 'Explorador';