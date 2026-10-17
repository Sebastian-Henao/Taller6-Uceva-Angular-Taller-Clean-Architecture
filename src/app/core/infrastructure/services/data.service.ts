import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { faker } from '@faker-js/faker';
import { Observable, of } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Product, ProductCategory } from "../../domain/models/product.model";
import { User, UserEngineering } from "../../domain/models/user.model";
import { Jungler } from "../../domain/models/jungler.model";
import { ALL_20_JUNGLERS } from "../../../mocks/junglers.mocks";
import { Personaje, RolCategoria } from "../../domain/models/personaje.model";
import { Music } from "../../domain/models/music.model";

/**
 * Servicio de infraestructura para obtención de datos.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa
 * como un **Data Source** que provee información desde
 * diferentes orígenes:
 *
 * - Datos locales simulados (mocks)
 * - Backends Node.js y Spring Boot mediante HTTP
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No debe ser consumido directamente por los casos de uso.
 *
 * Es utilizado por repositorios de infraestructura, que adaptan las fuentes
 * al contrato del dominio.
 */
@Injectable({ providedIn: 'root' })
export class DataService {
    /**
     * Cliente HTTP de Angular.
     *
     * @remarks
     * Se inyecta mediante la API `inject()` de Angular
     * para evitar el uso de constructores explícitos.
     */
    private httpClient = inject(HttpClient);
    /**
     * URL base del backend Node.js.
     *
     * @remarks
     * Se construye a partir de la configuración de entorno
     * definida en `environment`.
     */
    private nodeUrl = `${environment.baseUrlNode}/api`;
    /**
     * URL base del backend SpringBoot.
     *
     * @remarks
     * Se construye a partir de la configuración de entorno
     * definida en `environment`.
     */
    private springBootUrl = `${environment.baseUrlSpringBoot}/api`;


    /**
     * Obtiene el listado de USUARIOS desde datos locales simulados.
     *
     *
     * @param countUsers - Cantidad de usuarios a solicitar
     * @returns Observable que emite un arreglo de {@link User}
     */
    getAllUsersLocal(countUsers: number): Observable<User[]> {
        const users: User[] = [];
        const userEngineerings: UserEngineering[] = [
            'Sistemas',
            'Electronica',
            'Biomedica',
            'Industrial',
            'Ambiental',
        ];

        for(let i = 1 ; i <= countUsers ; i++){
            users.push({
                id: i,
                name: faker.person.firstName(),
                lastName: faker.person.lastName(),
                age: faker.number.int({ min: 18, max: 65 }),
                email: faker.internet.email(),
                engineering: faker.helpers.arrayElement(userEngineerings),
            })
        }

        return of(users);
    }

    /**
     * Obtiene el listado de productos desde datos locales simulados.
     *
     * @param countProducts - Cantidad de productos a solicitar
     * @returns Observable que emite un arreglo de {@link Product}
     */
    getAllProductsLocal(countProducts: number): Observable<Product[]> {
        const products: Product[] = [];
        const productCategories: ProductCategory[] = [
            'Carnes',
            'Frutas',
            'Lacteos',
            'Verduras'
        ];
        for(let i = 1; i <= countProducts ; i++){
            products.push({
                id: i,
                name: faker.commerce.productName(),
                price: Number(
                    faker.commerce.price({ min: 1, max: 100, dec: 2 })
                ),
                category: faker.helpers.arrayElement(productCategories),
            })
        }
        return of(products);
    }

    /**
     * Genera un listado de personajes de ejemplo con datos locales.
     *
     * @param countPersonajes - Cantidad de personajes a generar.
     * @returns Observable que emite personajes con roles válidos.
     *
     * @remarks
     * Los valores se generan con Faker y se devuelven sin realizar
     * solicitudes HTTP.
     */
    getAllPersonajesLocal(countPersonajes: number): Observable<Personaje[]> {
        const personajes: Personaje[] = [];
        const rolCategory: RolCategoria[] = [
            'Vanguardia',
            'Ladron',
            'Jefe',
            'Ilusionista',
            'Explorador'
        ];
        for(let i = 1; i <= countPersonajes; i++) {
            personajes.push({
                id: i,
                nombre: faker.person.fullName(),
                alias: faker.word.noun(),
                juego: faker.company.name(),
                habilidad: faker.commerce.productName(),
                rol: faker.helpers.arrayElement(rolCategory),
            })
        }
        return of(personajes);
    }

    /**
     * Genera un listado de canciones de ejemplo con datos locales.
     */
    getAllMusicLocal(count: number): Observable<Music[]> {
        const genres = ['Pop', 'Rock', 'Jazz', 'Hip-hop', 'Clásica'];
        const music: Music[] = [];

        for (let id = 1; id <= count; id++) {
            music.push({
                id,
                title: faker.commerce.productName(),
                durationSeconds: faker.number.int({ min: 60, max: 600 }),
                genre: faker.helpers.arrayElement(genres),
                artistId: id,
                albumId: id,
            });
        }

        return of(music);
    }

    /**
     * Obtiene el listado de usuarios desde el backend Node.js.
     *
     * @remarks
     * Realiza una petición HTTP GET al endpoint
     * `/users/{countUsers}`.
     *
     * El número de usuarios a obtener se define
     * mediante el parámetro `countUsers`.
     *
     * @param countUsers - Cantidad de usuarios a solicitar
     * @returns Observable que emite un arreglo de {@link User}
     *
     * @example
     * ```ts
     * this.dataService.getAllUsersNode(10).subscribe(users => {
     *   console.log(users);
     * });
     * ```
     */
    getAllUsersNode(countUsers: number): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.nodeUrl}/users/${countUsers}`);
    }

    /**
     * Obtiene el listado de productos desde el backend Node.js.
     *
     * @remarks
     * Realiza una petición HTTP GET al endpoint
     * `/products/{countProducts}`.
     *
     * @param countProducts - Cantidad de productos a solicitar
     * @returns Observable que emite un arreglo de {@link Product}
     *
     * @example
     * ```ts
     * this.dataService.getAllProductsNode(5).subscribe(products => {
     *   console.log(products);
     * });
     * ```
     */
    getAllProductsNode(countProducts: number): Observable<Product[]> {
        return this.httpClient.get<Product[]>(`${this.nodeUrl}/products/${countProducts}`);
    }

    /**
     * Obtiene personajes desde el backend Node.js.
     *
     * @remarks
     * Realiza una petición HTTP GET a
     * `/api/personajes/{countPersonajes}` en el servidor Node.js.
     *
     * @param countPersonajes - Cantidad de personajes solicitada.
     * @returns Observable que emite los personajes recibidos.
     */
    getAllPersonajesNode(countPersonajes: number): Observable<Personaje[]> {
        return this.httpClient.get<Personaje[]>(`${this.nodeUrl}/personajes/${countPersonajes}`);
    }

    /**
     * Obtiene canciones desde el backend Node.js.
     */
    getAllMusicNode(count: number): Observable<Music[]> {
        return this.httpClient.get<Music[]>(`${this.nodeUrl}/music/${count}`);
    }

    /**
     * Obtiene el listado de usuarios desde el backend SpringBoot.
     *
     * @remarks
     * Realiza una petición HTTP GET al endpoint
     * `/users/{countUsers}`.
     *
     * El número de usuarios a obtener se define
     * mediante el parámetro `countUsers`.
     *
     * @param countUsers - Cantidad de usuarios a solicitar
     * @returns Observable que emite un arreglo de {@link User}
     *
     * @example
     * ```ts
     * this.dataService.getAllUsersSpringBoot(10).subscribe(users => {
     *   console.log(users);
     * });
     * ```
     */
    getAllUsersSpringBoot(countUsers: number): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.springBootUrl}/users/${countUsers}`);
    }

    /**
     * Obtiene el listado de productos desde el backend SpringBoot.
     *
     * @remarks
     * Realiza una petición HTTP GET al endpoint
     * `/products/{countProducts}`.
     *
     * @param countProducts - Cantidad de productos a solicitar
     * @returns Observable que emite un arreglo de {@link Product}
     *
     * @example
     * ```ts
     * this.dataService.getAllProductsSpringBoot(5).subscribe(products => {
     *   console.log(products);
     * });
     * ```
     */
    getAllProductsSpringBoot(countProducts: number): Observable<Product[]> {
        return this.httpClient.get<Product[]>(`${this.springBootUrl}/products/${countProducts}`);
    }

    /**
     * Obtiene el listado de junglers desde datos locales en memoria.
     *
     * @param countJunglers - Cantidad de junglers a solicitar
     * @returns Observable que emite un arreglo de {@link Jungler}
     */
    getAllJunglersLocal(countJunglers: number): Observable<Jungler[]> {
        const limit = Math.min(Math.max(countJunglers, 1), ALL_20_JUNGLERS.length);
        return of(ALL_20_JUNGLERS.slice(0, limit));
    }

    /**
     * Obtiene el listado de junglers desde el backend Node.js.
     *
     * @param countJunglers - Cantidad de junglers a solicitar
     * @returns Observable que emite un arreglo de {@link Jungler}
     */
    getAllJunglersNode(countJunglers: number): Observable<Jungler[]> {
        return this.httpClient.get<Jungler[]>(`${this.nodeUrl}/junglers/${countJunglers}`);
    }

    /**
     * Obtiene el listado de junglers desde el backend SpringBoot.
     *
     * @param countJunglers - Cantidad de junglers a solicitar
     * @returns Observable que emite un arreglo de {@link Jungler}
     */
    getAllJunglersSpringBoot(countJunglers: number): Observable<Jungler[]> {
        return this.httpClient.get<Jungler[]>(`${this.springBootUrl}/junglers/${countJunglers}`);
    }

    /**
     * Obtiene personajes desde el backend Spring Boot.
     *
     * @remarks
     * Realiza una petición HTTP GET a
     * `/api/personajes/{countPersonajes}` en el servidor Spring Boot.
     *
     * @param countPersonajes - Cantidad de personajes solicitada.
     * @returns Observable que emite los personajes recibidos.
     */
    getAllPersonajesSpringBoot(countPersonajes: number): Observable<Personaje[]> {
        return this.httpClient.get<Personaje[]>(`${this.springBootUrl}/personajes/${countPersonajes}`);
    }

    /**
     * Obtiene canciones desde el backend Spring Boot.
     */
    getAllMusicSpringBoot(_count: number): Observable<Music[]> {
        return this.httpClient.get<Music[]>(`${this.springBootUrl}/songs`);
    }

}