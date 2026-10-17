# Arquitectura limpia con Angular

Aplicación frontend con Angular standalone y cuatro módulos: usuarios,
productos, música y personajes. La capa de presentación depende de casos de
uso; estos dependen de contratos del dominio, implementados por la capa de
infraestructura.

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

La fuente de datos se selecciona independientemente por módulo en
`src/environments/environment.ts`:

```ts
userDataSource: 'local',
productDataSource: 'local',
musicDataSource: 'local',
```

Cada campo acepta `local`, `node` o `springboot`; Personajes permanece
configurado con la fuente local. Los adaptadores locales generan datos de
demostración. Node.js y Spring Boot usan las URL base configuradas en el mismo
archivo: `http://localhost:3000` y `http://localhost:8080`, respectivamente.
Para usar fuentes remotas, los servidores deben implementar los endpoints
correspondientes y responder con arreglos que respeten los modelos.

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
test(musica): probar selección de proveedores
docs(readme): documentar contrato de API musical
```
