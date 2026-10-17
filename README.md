# Arquitectura limpia con Angular

Aplicación frontend con Angular standalone y cinco módulos: usuarios,
productos, música, personajes y junglers. La capa de presentación depende de
casos de uso; estos dependen de contratos del dominio, implementados por la
capa de infraestructura.

## Estructura

```text
src/app/
├── core/
│   ├── domain/                 # Modelos y contratos de repositorio
│   ├── application/usecases/   # Casos de uso
│   └── infrastructure/        # Servicios HTTP y repositorios concretos
├── presentation/
│   ├── components/
│   └── pages/
├── app.config.ts              # Proveedores
└── app.routes.ts              # Rutas
```

## Requisitos y ejecución

Se requieren Node.js y npm compatibles con Angular 20.

```bash
npm ci
npm run start
```

Abre `http://localhost:4200`. La fuente de datos local permite probar los
módulos sin ejecutar un backend.

## Módulos y APIs

| Módulo | Ruta del frontend | Operación del backend |
| --- | --- | --- |
| Usuarios | `/users` | `GET /api/users/{count}` |
| Productos | `/products` | `GET /api/products/{count}` |
| Música | `/music` | `GET /api/music/{count}` |
| Personajes | `/personajes` | `GET /api/personajes/{count}` |
| Junglers | `/junglers` | `GET /api/junglers/{count}` |

La fuente de datos se selecciona independientemente por módulo en
`src/environments/environment.ts`:

```ts
userDataSource: 'local',
productDataSource: 'local',
musicDataSource: 'local',
```

Cada campo acepta `local`, `node` o `springboot`; Personajes permanece
configurado con la fuente local, y Junglers se conmuta mediante su proveedor en
`src/app/app.config.ts` (ver la sección del módulo Junglers). Los adaptadores
locales generan datos de demostración. Node.js y Spring Boot usan las URL base
configuradas en el mismo archivo: `http://localhost:3000` y
`http://localhost:8080`, respectivamente. Para usar fuentes remotas, los
servidores deben implementar los endpoints correspondientes y responder con
arreglos que respeten los modelos.

La documentación de las API está disponible al iniciar los servidores:

- Node.js: `http://localhost:3000/api/docs`
- Spring Boot: `http://localhost:8080/api/swagger-ui/index.html`

Este repositorio solo contiene el frontend, no los proyectos de servidor.
[`docs/backend-integration.md`](docs/backend-integration.md) describe el
contrato esperado por Angular y [`docs/openapi.yaml`](docs/openapi.yaml) lo
especifica en OpenAPI 3.1 para facilitar su implementación y validación en
ambos servidores. Estos documentos describen el contrato que consume el
cliente; la documentación Swagger publicada por cada servidor debe mantenerse
y validarse en el repositorio correspondiente.

Cada página consume el caso de uso de su módulo. Los adaptadores local,
Node.js y Spring Boot se seleccionan mediante los proveedores de repositorio;
los componentes no acceden directamente a los servicios HTTP ni a las API.

## Módulo: Junglers (League of Legends)

Módulo desarrollado bajo Clean Architecture con Angular Standalone Components.

- **Modelo de Dominio:** `src/app/core/domain/models/jungler.model.ts`
- **Contrato del Repositorio:** `src/app/core/domain/repositories/jungler.repository.ts`
- **Caso de Uso:** `src/app/core/application/usecases/get-all-junglers.usecase.ts`
- **Servicio de Datos:** `src/app/core/infrastructure/services/data.service.ts`
- **Implementaciones del Repositorio:**
  - Local: `src/app/core/infrastructure/repositories/local-implementation/jungler-local.repository.impl.ts`
  - Node.js: `src/app/core/infrastructure/repositories/node-implementation/jungler-node.repository.impl.ts`
  - Spring Boot: `src/app/core/infrastructure/repositories/springboot-implementation/jungler-springboot.repository.impl.ts`
- **Componentes y Vistas:**
  - Organismo Tabla: `src/app/presentation/components/junglers-table/`
  - Página Contenedora: `src/app/presentation/pages/junglers/`

### Conmutación de Backends con Providers

Para alternar entre Local, Node.js y Spring Boot en Junglers, se modifica
exclusivamente el provider en `src/app/app.config.ts`:

```typescript
// Para consumir Backend NodeJS:
{ provide: JunglerRepository, useClass: JunglerNodeRepositoryImpl },

// Para consumir Backend Spring Boot:
{ provide: JunglerRepository, useClass: JunglerSpringBootRepositoryImpl },

// Para consumir datos locales simulados:
{ provide: JunglerRepository, useClass: JunglerLocalRepositoryImpl },
```

## Pruebas y documentación de Angular

```bash
npm test -- --runInBand
npm run test:coverage -- --runInBand
npm run compodoc
```

Las pruebas unitarias verifican los casos de uso, proveedores, repositorios,
servicios y componentes. Jest exige una cobertura global mínima del 90% en
sentencias, ramas, funciones y líneas. Compodoc genera la documentación de
Angular en `documentation/`.

## Estándar de los commits

Usa Conventional Commits con mensajes breves en imperativo. Por ejemplo:

```text
feat(musica): agregar catálogo de canciones
test(musica): probar selección de