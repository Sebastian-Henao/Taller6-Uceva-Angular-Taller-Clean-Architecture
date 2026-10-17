import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  inject,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ProductRepository } from './core/domain/repositories/product.repository';
import { UserRepository } from './core/domain/repositories/user.repository';
import { ProductNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/product-node.repository.impl';
import { UserNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/user-node.repository.impl';
import { UserSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/user-springboot.repository.impl';
import { ProductSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/product-springboot.repository.impl';
import { UserLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/user-local.repository.impl';
import { ProductLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/product-local.repository.impl';
import { MusicRepository } from './core/domain/repositories/music.repository';
import { MusicLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/music-local.repository.impl';
import { MusicNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/music-node.repository.impl';
import { MusicSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/music-springboot.repository.impl';
import { environment } from '../environments/environment';
import { PersonajeRepository } from './core/domain/repositories/personaje.repository';
import { PersonajesLocalRepositorieImpl } from './core/infrastructure/repositories/local-implementation/personajes-local.repositorie.impl';

/**
 * Configuración principal de la aplicación Angular.
 *
 * @remarks
 * Este objeto define los *providers* globales utilizados
 * en el arranque de la aplicación mediante la API
 * `bootstrapApplication`.
 *
 * Incluye:
 * - Manejo global de errores del navegador
 * - Configuración de detección de cambios
 * - Sistema de enrutamiento
 * - Cliente HTTP con interceptores
 *
 * @see {@link bootstrapApplication}
 */
export const appConfig: ApplicationConfig = {

  /**
   * Proveedores globales de la aplicación.
   *
   * @remarks
   * Se registran servicios y configuraciones esenciales
   * que estarán disponibles en toda la aplicación.
   */
  providers: [

    UserLocalRepositoryImpl,
    UserNodeRepositoryImpl,
    UserSpringBootRepositoryImpl,
    {
      provide: UserRepository,
      useFactory: () => {
        switch (environment.userDataSource) {
          case 'local':
            return inject(UserLocalRepositoryImpl);
          case 'node':
            return inject(UserNodeRepositoryImpl);
          case 'springboot':
            return inject(UserSpringBootRepositoryImpl);
          default:
            throw new Error(`Fuente de datos de usuarios no soportada: ${environment.userDataSource}`);
        }
      },
    },
    ProductLocalRepositoryImpl,
    ProductNodeRepositoryImpl,
    ProductSpringBootRepositoryImpl,
    {
      provide: ProductRepository,
      useFactory: () => {
        switch (environment.productDataSource) {
          case 'local':
            return inject(ProductLocalRepositoryImpl);
          case 'node':
            return inject(ProductNodeRepositoryImpl);
          case 'springboot':
            return inject(ProductSpringBootRepositoryImpl);
          default:
            throw new Error(`Fuente de datos de productos no soportada: ${environment.productDataSource}`);
        }
      },
    },
    MusicLocalRepositoryImpl,
    MusicNodeRepositoryImpl,
    MusicSpringBootRepositoryImpl,
    {
      provide: MusicRepository,
      useFactory: () => {
        switch (environment.musicDataSource) {
          case 'local':
            return inject(MusicLocalRepositoryImpl);
          case 'node':
            return inject(MusicNodeRepositoryImpl);
          case 'springboot':
            return inject(MusicSpringBootRepositoryImpl);
          default:
            throw new Error(
              `Fuente de datos de música no soportada: ${environment.musicDataSource}`,
            );
        }
      },
    },
    { provide: PersonajeRepository, useClass: PersonajesLocalRepositorieImpl },

    /**
     * Proveedor de listeners globales de errores del navegador.
     *
     * @remarks
     * Captura errores no controlados y eventos globales,
     * permitiendo un manejo centralizado de excepciones.
     */
    provideBrowserGlobalErrorListeners(),

    /**
     * Configuración de la detección de cambios basada en Zone.js.
     *
     * @remarks
     * `eventCoalescing: true` agrupa múltiples eventos en un
     * solo ciclo de detección de cambios, mejorando
     * el rendimiento de la aplicación.
     */
    provideZoneChangeDetection({ eventCoalescing: true }),

    /**
     * Proveedor del sistema de enrutamiento.
     *
     * @remarks
     * Registra las rutas definidas en `routes`
     * para la navegación de la aplicación.
     *
     * @see {@link routes}
     */
    provideRouter(routes),

    provideHttpClient(),
  ],
};