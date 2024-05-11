# Documentación del proyecto

## Resumen

Prueba técnica para Ariadna Communications Group.
Funciones de la aplicación:

- Ver información básica de la empresa.
- Registrar un nuevo usuario.
- Realizar un login de un usuario ya registrado.
- Ver perfil de un usuario.
- Cambiar entre idiomas (Inglés y Español) para la vista principal.

### MongoDB

Atlas MongoDB para conexión a BD.

### Server

El servidor fue construido con Express y Typescript.

Cuenta con la siguientes rutas.

| Ruta           | Verbo HTPP | Descripción                |
| -------------- | ---------- | -------------------------- |
| user/register  | POST       | Registrar un nuevo usuario |
| user/login     | POST       | Realizar login             |
| user/protected | GET        | Verificar token (test)     |
| user/logout    | GET        | Realizar logout            |

#### Estructura del proyecto

Para la aplicación, solo se tiene un componente que es el de usuario.

- Capa de network: se encarga de las respuestas al cliente.
- Capa de controller: se encarga de verificaciones relacionadas con la manipulación del modelo.
- Capa de storage: se encarga de la comunicación con la fuente de datos. En este caso, una BD en MongoDB.
- Capa de modelo: No se utiliza en este proyecto debido a Prisma ORM.

src
├── components
│ └── user
│ ├── controller.test.ts
│ ├── controller.ts
│ ├── network.ts
│ ├── storage.test.ts
│ └── storage.ts
├── network
│ ├── response.ts
│ └── routes.ts
└── server.ts

### Tests

Se crean test para la capa de controlador.

### Application

La aplicacion fue construida utilizando React.

##### Folder structure

El proyecto está separado por componentes (components) y las páginas principales de la aplicación (Pages).

- useAriadnaApi utiliza las rutas creadas para el servidor.
- useLocationData consume la API para la información

src
├── API
│ ├── useAriadnaApi
│ │ └── index.jsx
│ ├── useLocationData
│ │ └── index.jsx
│ ├── useLogin
│ │ └── index.jsx
│ └── useRegister
│ └── index.jsx
├── components
│ ├── FloatingButton
│ │ └── index.jsx
│ ├── Footer
│ │ └── index.jsx
│ ├── Info
│ │ └── index.jsx
│ ├── LanguajeSelector
│ │ └── index.jsx
│ ├── Navbar
│ │ └── index.jsx
│ ├── ScrollToTop
│ │ └── index.jsx
│ ├── Territory
│ │ └── index.jsx
│ ├── TightLayout
│ │ └── index.jsx
│ ├── useIsVisible
│ │ └── index.jsx
│ ├── useLocalStorage
│ │ └── index.jsx
│ ├── WhatWeDo
│ │ └── index.jsx
│ ├── WideLayout
│ │ └── index.jsx
│ ├── WiderLayout
│ │ └── index.jsx
│ └── withIsVisible
│ └── index.jsx
├── i18n.js
├── index.css
├── main.jsx
└── Pages
├── App
│ ├── App.css
│ └── App.jsx
├── Login
│ └── index.jsx
├── NotFound
│ └── index.jsx
├── Profile
│ └── index.jsx
├── Register
│ └── index.jsx
└── WhoAreWe
└── index.jsx

## Ejecución del proyecto

### Requisitos previos

- Instalar [Node](https://nodejs.org/en)
- Instalar [Git](https://git-scm.com/)

### Paso a paso

1. Clonar repositorio

```
git clone `url-repo`
```

2. Ingresar a la carpeta clonada, abrir dos CMD y ejecutar un script para cada linea de comando.

```
cd .\backend\ ; npm i; npm run dev
```

```
cd .\frontend\ ; npm i; npm run dev
```

3. Ingresar al navegador y abrir el siguiente enlace [React App](http://localhost:5173/)

4. Utilizar la aplicación
