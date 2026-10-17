/**
 * Configuración de variables de entorno de la aplicación.
 *
 * @remarks
 * Este archivo contiene las constantes de entorno utilizadas
 * en la aplicación Angular. Se reemplaza automáticamente
 * según el entorno (development, production, etc.) durante
 * el proceso de build.
 *
 * @example
 * ```ts
 * import { environment } from '@environments/environment';
 *
 * this.http.get(`${environment.baseUrl}/users`);
 * ```
 */
/** Fuentes de datos disponibles para los repositorios de la aplicación. */
export type DataSource = 'local' | 'node' | 'springboot';

/**
 * Valores de configuración usados durante la ejecución de la aplicación.
 *
 * @remarks
 * Las fuentes locales generan datos de demostración; las fuentes remotas
 * requieren que el backend correspondiente esté disponible.
 */
export const environment = {
  /**
   * URL base del backend en NodeJS de la aplicación.
   *
   * @remarks
   * Se utiliza como punto de partida para construir
   * las peticiones HTTP hacia la API.
   *
   */
  baseUrlNode: 'http://localhost:3000',
  /**
   * URL base del backend EN SpringBoot de la aplicación.
   *
   * @remarks
   * Se utiliza como punto de partida para construir
   * las peticiones HTTP hacia la API.
   *
   */
  baseUrlSpringBoot: 'http://localhost:8080',
};