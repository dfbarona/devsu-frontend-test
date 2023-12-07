# Test Angular - Productos Financieros - Devsu

## Tabla de Contenido
- [Descripción](#descripción)
- [Caracteristicas clave](#caracteristicas-clave)
- [¿Cómo iniciar?](#¿cómo-iniciar?)
- [Sistema de archivos](#sistema-de-archivos)

## Descripción
Aplicación desarrollada en Angular que permite realizar operaciones básicas de gestión de productos financieros, como la creación, eliminación, listado y actualización de dichos productos. La interfaz de usuario es intuitiva y el sistema se centra en la eficiencia para proporcionar una experiencia de gestión simple y efectiva.

## Prerequisitos
| Nombre | Descripción | Versión |
| -- | -- | -- |
| [NodeJs](https://nodejs.org/) | Es un entorno de servidor de código abierto multiplataforma que puede ejecutarse en Windows, Linux, Unix, macOS y más | ``v20.0.0`` | 
| [NPM](https://docs.npmjs.com/) | Node Package Manager (administrador de paquetes de Node), es la plataforma donde se descargan multitud de paquetes y librerias pra el desarrollo de software y aplicaciones basadas en Javascript. | ``v10.1.0`` | 
| [Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli/) | Es un framework para el desarrollo de aplicaciones web desarrollado y mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Este framework utiliza como lenguaje de programacion Typescript. | ``v17.0.5`` | 

## ¿Cómo iniciar?
1. Clona el repositorio frontend en tu maquina local
	> https://github.com/dfbarona/devsu-frontend-test.git

1. Desde la terminal navega hasta la ubicacion donde descargaste el repositorio y ejecuta el comando para instalar dependencias
	> npm i

1. Para iniciar el proyecto en modo de desarrollo en local, se ejecuta el comando:
	> npm run start

1. Para ejecutar las pruebas unitarias, se ejecuta el siguiente comando:
	> npm run test

## Sistema de archivos
El sistema de archivos del proyecto esta organizada de la siguiente manera
- `interfaces`: Contiene las definiciones de interfaces que ayudan a establecer contratos y estructuras de datos coherentes en el proyecto Angular. Aquí se definen los tipos de datos utilizados en distintas partes del sistema.
- `layout`: Agrupa componentes y archivos relacionados con la disposición y estructura de las vistas. Incluye elementos como encabezados, pies de página y otros componentes de diseño que se utilizan en varias partes del proyecto.
- `pages`: Almacena los componentes que representan páginas específicas de la aplicación. Cada archivo podría corresponder a una vista única o a una funcionalidad principal de la aplicación.
- `pipes`: Contiene pipes personalizados, que son funciones reutilizables que transforman la presentación de datos en las vistas. Estos pipes pueden utilizarse para formatear fechas, números u otros datos de manera consistente en todo el proyecto.
- `services`: Aquí se encuentran los servicios de Angular que gestionan la lógica de negocio, la comunicación con el servidor y otras operaciones. Los servicios proporcionan funcionalidades compartidas entre componentes y ayudan a mantener la separación de preocupaciones.
- `shared`: Contiene componentes, módulos, y otros recursos que son compartidos entre diferentes partes de la aplicación. Puede incluir elementos como botones, formularios, o directivas que se utilizan en múltiples vistas.
- `styles`: Almacena archivos relacionados con la presentación y el diseño visual de la aplicación. Puede contener hojas de estilo (CSS, SASS, etc.) y otros recursos visuales necesarios para la interfaz de usuario.