# Pokemon Web

## Contenido

- [Requerimientos](#requerimientos)
- [Instalación](#instalación)
- [Correr el proyecto](#correr-el-proyecto)
- [Herramientas](#herramientas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Manual de usuario](#manual-de-usuario)

## Requerimientos

- Versión de Node `^14.18.0` | `^16.14.0` | `>=18.0.0`.
- NVM como gestor de versiones de Node (opcional).
- Yarn.
- Git.
- Editor de código (Preferiblemente Visual Studio Code).

## Instalación

1. En la raíz del proyecto:

```js
yarn install
// o simplemente yarn
```

2. Necesitarás crear un archivo `env.local` con la estructura de `env.local.example` en la raíz del proyecto.

## Correr el proyecto

Cuando ya tenemos todo listo corremos:

```cmd
yarn dev
```

## Herramientas

### Calidad y Consistencia de Código

**Alias path**

El proyecto utiliza alias path para hacer más fácil la importación de módulos, permitiendo referirse a ellos con rutas cortas y legibles.

**Prettier**

Prettier es una herramienta de formateo de código que se utiliza en el proyecto para mantener un estilo de código consistente y fácil de leer. Se han configurado las reglas de formateo en el archivo `.prettierrc.`

**EsLint**

EsLint es una herramienta de análisis estático de código que se utiliza en el proyecto para detectar errores y problemas potenciales en el código. Se han configurado las reglas de EsLint en el archivo `.eslintrc.`

**Husky**

Husky es una herramienta de pre-commit que se utiliza en el proyecto para asegurarse de que se cumplen ciertas condiciones antes de realizar un commit. En este caso, se utiliza para ejecutar los comandos de EsLint y Prettier antes de realizar un commit.

### Estilo

**Tipografía personalizada**

Se ha incluido una tipografía personalizada en el proyecto para mejorar la legibilidad y la apariencia del texto. Esta tipografía se encuentra en la carpeta `src/assets/fonts`.

**Ant design**

Ant Design es una librería de componentes UI que se utiliza en el proyecto para facilitar el desarrollo de la interfaz de usuario.

### Teconologías

**Typescript**

El proyecto utiliza TypeScript para añadir tipado estático a JavaScript, lo que permite detectar errores en tiempo de compilación en lugar de tiempo de ejecución.

**Vite**

Vite es un bundler y un servidor de desarrollo rápido que se utiliza en el proyecto para acelerar el tiempo de compilación y mejorar la experiencia de desarrollo.

**Sass**

Sass es un preprocesador de CSS que se utiliza en el proyecto para añadir funcionalidades como variables, mixins, anidamiento y herencia.

**React query**

React Query es una librería de gestión de datos que se utiliza en el proyecto para facilitar la obtención y el manejo de datos en el cliente.

**React router**

React Router es una librería de enrutamiento que se utiliza en el proyecto para manejar la navegación en el cliente.

**Firebase**

El proyecto utiliza Firebase para la gestión de la base de datos en tiempo real y la autenticación de usuarios.

**Realtime Database**

Firebase Realtime Database es la base de datos en tiempo real utilizada en el proyecto para almacenar y sincronizar datos en tiempo real entre los clientes.

**Firebase Auth**

Firebase Auth se utiliza en el proyecto para manejar la autenticación de los usuarios a través de su cuenta de Gmail.

### APIs utilizadas

**API de Pokemón**

El proyecto utiliza la [API de Pokemón](https://pokeapi.co/) para obtener información sobre los Pokemón y mostrarla en la interfaz de usuario.

## Estructura del proyecto

- **src:** Esta carpeta es la principal y contiene todo el código de la aplicación.
  - **assets:** Carpeta que contiene las imágenes, svgs, etc.
  - **api:** Archivos relacionados a los servicios.
  - **components:** Contiene cualquier componente común que se utilice en la aplicación.
  - **constants:** Carpeta que contiene las constantes.
  - **custom-types:** Aqui se ubican los tipos generales propios.
  - **enums:** Enums generales.
  - **hooks:** Hooks de la app web.
  - **layouts:** Layouts de las rutas.
  - **pages:** Carpeta que contiene todas las páginas de la aplicación web.
  - **services:** Contiene los proveedores externos como firebase y su configuración.
  - **theme:** Carpeta que contiene el tema, define variables para mantener los estilos estandarizados.
  - **utils:** Contiene funciones comunes utilizadas en la app como los colores aplicados a las listas.
- **env.local:** Contiene las variables sensibles.
- **README:** Debe incluir los pasos de la instalación, ejecución, estructura del proyecto, etc.

## Manual de usuario

Puedes ver como explorarlo en la web [aquí](https://scribehow.com/shared/Manual_de_usuario__Pokemon_web__fLC9rN7gTOCOyUQOn5kRQw)
