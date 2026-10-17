# Angular Clean Architecture

Frontend Angular standalone con tres módulos: usuarios, productos y música.
La presentación depende de casos de uso; los casos de uso dependen de
contratos del dominio, y la infraestructura implementa esos contratos.

## Estructura

```text
src/app/
├── core/
│   ├── domain/                 # Modelos y contratos de repositorios
│   ├── application/usecases/   # Casos de uso
│   └── infrastructure/        # Servicios HTTP y repositorios
├── presentation/
│   ├── components/
│   └── pages/
├── app.config.ts              # Providers
└── app.routes.ts              # Rutas
```

## Requisitos y ejecución

Requiere Node.js y npm compatibles con Angular 20.

```bash
npm ci
npm run start
```

Abre `http://localhost:4200`. La fuente local de música permite probar el
módulo sin ejecutar un backend.

## Módulos y APIs

| Módulo | Ruta frontend | Operación backend |
| --- | --- | --- |
| Usuarios | `/users` | `GET /api/users/{count}` |
| Productos | `/products` | `GET /api/products/{count}` |
| Música | `/music` | `GET /api/music/{count}` |

La fuente de datos de música se selecciona en
`src/environments/environment.ts` mediante `musicDataSource`:

```ts
musicDataSource: 'local', // 'node' o 'springboot'
```

Los adaptadores HTTP esperan que ambos backends implementen
`GET /api/music/{count}` y respondan con una lista cuyos elementos tengan
`id`, `title`, `artist`, `album`, `genre` y `releaseYear`. Las URLs base están
configuradas en el mismo archivo: Node.js usa `http://localhost:3000` y
Spring Boot usa `http://localhost:8080`.

Documentación de API disponible al iniciar los backends:

- Node.js: `http://localhost:3000/api/docs`
- Spring Boot: `http://localhost:8080/api/swagger-ui/index.html`

Este repositorio contiene solo el frontend; no incluye los proyectos de
backend. Por ello, la documentación técnica detallada y los documentos
Swagger/OpenAPI de los backends deben mantenerse en sus respectivos
repositorios. El endpoint y el contrato nuevos de música quedan especificados
arriba para que ambos backends puedan implementarlos.

`MusicPage` usa `GetAllMusicUseCase`; los adaptadores local, Node.js y Spring
Boot son intercambiables mediante el provider de `MusicRepository`. No se
consumen servicios HTTP directamente desde los componentes.

## Pruebas y documentación Angular

```bash
npm test -- --runInBand
npm run test:coverage -- --runInBand
npm run compodoc
```

Las pruebas unitarias verifican casos de uso, proveedores, repositorios,
servicios y componentes. Compodoc genera la documentación Angular en
`documentation/`.

## Estándar de commits

Usa Conventional Commits con mensajes breves en imperativo, por ejemplo:

```text
feat(music): add music catalogue module
test(music): cover repository providers
docs(readme): document music API contract
```
