/**
 * Interfaz que representa un campeón de la jungla de League of Legends.
 *
 * Contiene la información básica necesaria para mostrar un jungler
 * en la tabla o en cualquier componente de presentación.
 *
 * @remarks
 * Cada jungler debe tener un `id` único, un `name`, su `title`,
 * un `role` de combate válido, un nivel de `difficulty`, su `region`,
 * una `description` narrativa y sus `mainAbilities`.
 *
 * @example
 * ```ts
 * const jungler: Jungler = {
 *   id: 1,
 *   name: 'Lee Sin',
 *   title: 'El Monje Ciego',
 *   role: 'Luchador',
 *   difficulty: 'Alta',
 *   region: 'Jonia',
 *   description: 'Un maestro de las artes marciales de Jonia.',
 *   mainAbilities: 'Onda Sónica, Salvaguarda, Tempestad, Ira del Dragón'
 * };
 * ```
 */
export interface Jungler {
  /** Identificador único del campeón */
  id: number;

  /** Nombre del campeón */
  name: string;

  /** Título o apodo característico */
  title: string;

  /** Rol o clase de combate */
  role: JunglerRole;

  /** Dificultad mecánica de juego */
  difficulty: JunglerDifficulty;

  /** Región del universo de Runaterra */
  region: string;

  /** Descripción o lore del campeón */
  description: string;

  /** Habilidades principales */
  mainAbilities: string;
}

/**
 * Tipo de rol de un campeón de la jungla.
 *
 * @remarks
 * Este tipo restringe los roles a los valores predefinidos:
 * - 'Luchador'
 * - 'Asesino'
 * - 'Tanque'
 * - 'Mago'
 * - 'Tirador'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 */
export type JunglerRole = 'Luchador' | 'Asesino' | 'Tanque' | 'Mago' | 'Tirador';

/**
 * Tipo de dificultad de un campeón de la jungla.
 */
export type JunglerDifficulty = 'Baja' | 'Media' | 'Alta';
