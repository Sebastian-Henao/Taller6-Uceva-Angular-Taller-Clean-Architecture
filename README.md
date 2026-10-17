# Clean Architecture en Angular

```
src/app
│
├── core
│   ├── domain
│   │   ├── models
│   │   │   ├── user.model.ts
│   │   │   └── product.model.ts
│   │   └── repositories
│   │       ├── user.repository.ts
│   │       └── product.repository.ts
│   │
│   ├── application
│   │   └── use-cases
│   │       ├── get-all-users.usecase.ts
│   │       ├── get-user-by-id.usecase.ts
│   │       ├── get-all-products.usecase.ts
│   │       └── get-product-by-id.usecase.ts
│   │
│   └── infrastructure
│       ├── services
│       │   ├── user-api.service.ts
│       │   └── product-api.service.ts
│       └── repositories
│           ├── user.repository.impl.ts
│           └── product.repository.impl.ts
│
├── presentation
│   ├── users
│   └── products
│
└── app.config.ts
```


## Paso 1 - Crear Modelos

```
src/app/core/domain/models/
├── user.model.ts
└── product.model.ts
```

## Paso 2 - Crear Repositorios

```
src/app/core/domain/repositories/
├── user.repository.ts
└── product.repository.ts
```

## Paso 3 - Crear Casos de Uso

### User
```
src/app/core/application/usecases/user/
├── get-all-users.usecase.ts
└── get-user-by-id.usecase.ts
```

### Product
```
src/app/core/application/usecases/product/
├── get-all-products.usecase.ts
└── get-product-by-id.usecase.ts
```

## Paso 4 - Crear Servicios


```
src/app/core/infrastructure/services/
├── user.service.ts
└── product.service.ts
```

## Paso 5 - Crear Repositorios Implementadores

### Implementación para Consumo de Datos Local
```
src/app/core/infrastructure/repositories/local
├── user-local.repository.impl.ts
└── product-local.repository.impl.ts
```

### Implementación para Consumo de Datos NodeJS
```
src/app/core/infrastructure/repositories/node
├── user-node.repository.impl.ts
└── product-node.repository.impl.ts
```

## Paso 6 - Agregar Providers con sus Implementadores

```
src/app/
└── app.config.ts
```

# Funcionamiento del Frontend

## Ejecutar Frontend
```
npm run start
```

## Urls Consumo

### Frontend
```
http://localhost:4200
http://localhost:4200/users
http://localhost:4200/products
http://localhost:4200/junglers
```

### Backend NodeJS
```
http://localhost:3000/api/docs
http://localhost:3000/api/users/{countUsers}
http://localhost:3000/api/products/{countProducts}
http://localhost:3000/api/junglers/{countJunglers}
```

### Backend SpringBoot
```
http://localhost:8080/api/swagger-ui/index.html
http://localhost:8080/api/users/{countUsers}
http://localhost:8080/api/products/{countProducts}
http://localhost:8080/api/junglers/{countJunglers}
```

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

## Conmutación de Backends con Providers
Para alternar entre Local, Node.js y Spring Boot, se modifica exclusivamente el provider en `src/app/app.config.ts`:

```typescript
// Para consumir Backend NodeJS:
{ provide: JunglerRepository, useClass: JunglerNodeRepositoryImpl },

// Para consumir Backend Spring Boot:
{ provide: JunglerRepository, useClass: JunglerSpringBootRepositoryImpl },

// Para consumir datos locales simulados:
{ provide: JunglerRepository, useClass: JunglerLocalRepositoryImpl },
```

## Pruebas Unitarias y Cobertura (> 90%)
Para ejecutar la suite de pruebas unitarias con Jest y generar el reporte de cobertura:
```bash
npm run test:coverage
```

## Documentación Técnica con Compodoc
Para generar y consultar la documentación interactiva:
```bash
npm run docs
```
La documentación se generará en la carpeta `./documentation/`. Para servirla localmente:
```bash
npx compodoc -p tsconfig.doc.json -s
```