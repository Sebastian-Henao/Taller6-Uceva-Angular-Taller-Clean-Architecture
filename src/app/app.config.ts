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
import { JunglerRepository } from './core/domain/repositories/jungler.repository';
import { ProductNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/product-node.repository.impl';
import { UserNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/user-node.repository.impl';
import { JunglerNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/jungler-node.repository.impl';
import { UserSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/user-springboot.repository.impl';
import { ProductSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/product-springboot.repository.impl';
import { JunglerSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/jungler-springboot.repository.impl';
import { UserLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/user-local.repository.impl';
import { ProductLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/product-local.repository.impl';
import { JunglerLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/jungler-local.repository.impl';
import { MusicRepository } from './core/domain/repositories/music.repository';
import { MusicLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/music-local.repository.impl';
import { MusicNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/music-node.repository.impl';
import { MusicSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/music-springboot.repository.impl';
import { environment } from '../environments/environment';
import { PersonajeRepository } from './core/domain/repositories/personaje.repository';
import { PersonajesLocalRepositorieImpl } from './core/infrastructure/repositories/local-implementation/personajes-local.repositorie.impl';
import { PersonajeNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/personaje-node.repository.impl';
import { PersonajeSpringbootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/personaje-springboot.repository.impl';

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

    //Local Providers
    { provide: UserRepository, useClass: UserLocalRepositoryImpl },
    { provide: ProductRepository, useClass: ProductLocalRepositoryImpl },
    { provide: PersonajeRepository, useClass: PersonajesLocalRepositorieImpl },
    { provide: JunglerRepository, useClass: JunglerLocalRepositoryImpl },
    { provide: MusicRepository, useClass: MusicLocalRepositoryImpl },

    // Node Providers
    //{ provide: UserRepository, useClass: UserNodeRepositoryImpl },
    //{ provide: ProductRepository, useClass: ProductNodeRepositoryImpl },
    //{ provide: PersonajeRepository, useClass: PersonajeNodeRepositoryImpl },
    //{ provide: JunglerRepository, useClass: JunglerNodeRepositoryImpl },
    //{ provide: MusicRepository, useClass: MusicNodeRepositoryImpl },

    //SpringBoot Providers
    //{ provide: UserRepository, useClass: UserSpringBootRepositoryImpl },
    //{ provide: ProductRepository, useClass: ProductSpringBootRepositoryImpl },
    //{ provide: PersonajeRepository, useClass: PersonajeSpringbootRepositoryImpl },
    //{ provide: JunglerRepository, useClass: JunglerSpringBootRepositoryImpl },
    //{ provide: MusicRepository, useClass: MusicSpringBootRepositoryImpl },

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