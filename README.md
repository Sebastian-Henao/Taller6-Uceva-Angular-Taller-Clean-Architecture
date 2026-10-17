# Clean Architecture en Angular

```
src/app
│
├── core
│   ├── domain
│   │   ├── models
│   │   │   ├── user.model.ts
│   │   │   ├── product.model.ts
│   │   │   └── personaje.model.ts
│   │   └── repositories
│   │       ├── user.repository.ts
│   │       ├── product.repository.ts
│   │       └── personaje.repository.ts
│   │
│   ├── application
│   │   └── use-cases
│   │       ├── get-all-users.usecase.ts
│   │       ├── get-user-by-id.usecase.ts
│   │       ├── get-all-products.usecase.ts
│   │       ├── get-product-by-id.usecase.ts
│   │       └── get-all-personajes.usecase.ts
│   │
│   └── infrastructure
│       ├── services
│       │   ├── user-api.service.ts
│       │   ├── product-api.service.ts
│       │   └── data.service.ts
│       └── repositories
│           ├── user.repository.impl.ts
│           ├── product.repository.impl.ts
│           ├── personaje.repository.impl.ts
│
├── presentation
│   ├── users
│   ├── products
│   ├── pages
│   │   └── personajes
│   │       ├── personajes.page.ts
│   │       └── personajes.page.html
│   └── components
│       └── personajes-table
│           ├── personajes-table.component.ts
│           └── personajes-table.component.html
│
├── mocks
│   └── personajes.mocks.ts
├── app.routes.ts
└── app.config.ts
```


## Paso 1 - Crear Modelos

```
src/app/core/domain/models/
├── user.model.ts
├── product.model.ts
└── personaje.model.ts
```

## Paso 2 - Crear Repositorios

```
src/app/core/domain/repositories/
├── user.repository.ts
├── product.repository.ts
└── personaje.repository.ts
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

### Personajes
```
src/app/core/application/usecases/
└── get-all-personajes.usecase.ts
```

## Paso 4 - Crear Servicios


```
src/app/core/infrastructure/services/
├── user.service.ts
├── product.service.ts
└── data.service.ts (incluye las fuentes de datos de personajes)
```

## Paso 5 - Crear Repositorios Implementadores

### Implementación para Consumo de Datos Local
```
src/app/core/infrastructure/repositories/local
├── user-local.repository.impl.ts
├── product-local.repository.impl.ts
└── personajes-local.repositorie.impl.ts
```

### Implementación para Consumo de Datos NodeJS
```
src/app/core/infrastructure/repositories/node
├── user-node.repository.impl.ts
├── product-node.repository.impl.ts
└── personaje-node.repository.impl.ts
```

### Implementación para Consumo de Datos SpringBoot
```
src/app/core/infrastructure/repositories/springboot
└── personaje-springboot.repository.impl.ts
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
```

### Backend NodeJS
```
http://localhost:3000/api/docs
http://localhost:3000/api/users/{countUsers}
http://localhost:3000/api/products/{countProducts}
http://localhost:3000/api/personajes/{countPersonajes}
```

### Backend SpringBoot
```
http://localhost:3000/api/swagger-ui/index.html
http://localhost:3000/api/users/{countUsers}
http://localhost:3000/api/products/{countProducts}
http://localhost:3000/api/personajes/{countPersonajes}
```