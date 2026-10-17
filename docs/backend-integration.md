# Contrato de integración de los backends

## Alcance

Este repositorio contiene la aplicación Angular, no los proyectos de servidor
Node.js ni Spring Boot. Por lo tanto, este documento describe lo que consume el
frontend; no afirma cómo están implementados internamente los backends. La
especificación OpenAPI de [`openapi.yaml`](./openapi.yaml) sirve como contrato
común para implementar o comprobar ambas APIs.

## Configuración

Las URLs base por defecto están definidas en
`src/environments/environment.ts`:

| Backend | URL base |
| --- | --- |
| Node.js | `http://localhost:3000` |
| Spring Boot | `http://localhost:8080` |

Cada módulo selecciona su proveedor con `userDataSource`,
`productDataSource` o `musicDataSource`. Los valores admitidos son `local`,
`node` y `springboot`. La selección local genera datos de demostración; las
otras dos opciones requieren que el backend correspondiente esté ejecutándose
y sea accesible desde el navegador.

## Operaciones requeridas

Ambos backends deben exponer las siguientes operaciones bajo el prefijo
`/api`:

| Módulo | Endpoint | Tipo de respuesta |
| --- | --- | --- |
| Usuarios | `GET /api/users/{count}` | `User[]` |
| Productos | `GET /api/products/{count}` | `Product[]` |
| Música | `GET /api/music/{count}` | `Music[]` |

El detalle de las propiedades, tipos y enumeraciones de los elementos está en
la especificación OpenAPI. Las respuestas exitosas deben ser arreglos JSON
directos, no objetos que los envuelvan en una propiedad como `data`.

## Documentación de los servidores

Cuando estén disponibles, las interfaces de documentación configuradas para
los backends son:

- Node.js: `http://localhost:3000/api/docs`
- Spring Boot: `http://localhost:8080/api/swagger-ui/index.html`

Este repositorio no puede generar ni verificar esas páginas sin el código y
los procesos de los servidores. Al implementar un backend, mantén su
documentación Swagger/OpenAPI junto a ese proyecto y comprueba que sus rutas
y esquemas coincidan con el contrato compartido.
