### Prerrequisitos

- [Node.js](https://nodejs.org/en/) 
- [Git](https://git-scm.com/)

### Instalación

1. Clonar el repositorio:

git clone https://github.com/iGotty/parcial1.git

2. Navegar hasta la carpeta del proyecto

3. Instala las dependencias del proyecto:

`npm install`

4. Iniciar el servidor de desarrollo:

`npm start`


El proyecto ahora debería estar corriendo en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

- `src/`
- `components/` - Componentes de React para las distintas partes de la aplicación.
 - `Home.js` - La pantalla de inicio que muestra la información del usuario y una matriz de imágenes.
 - `Profile.js` - La página de perfil del usuario.
 - `Modal.js` - Un componente modal para ver las imágenes en detalle.
 - `i18n.js` - Archivo para internalización I18N.
- `App.js` - Componente principal de React que maneja la navegación.
- `index.js` - Punto de entrada de React.

## Decisiones de Diseño y Desarrollo


- **React Router**: Para gestionar la navegación entre las diferentes pantallas de la aplicación (Home y Perfil), se utilizó React Router. 
- **Internacionalización**: Integración de `i18next` para soportar español e inglés
- **Diseño Responsivo**: Se implementó un diseño responsivo para asegurar que la aplicación se vea bien en dispositivos de diferentes tamaños. Esto se logró ajustando dinámicamente la matriz de imágenes según el ancho de la pantalla, utilizando estados y efectos de React para reaccionar a los cambios de tamaño.
- **Uso de Axios**: Se optó por utilizar `axios` para realizar peticiones HTTP a la API. Axios proporciona una interfaz sencilla y limpia para manejar solicitudes y respuestas.
- **Manejo del Estado y Efectos con Hooks**: Uso de `useState` y `useEffect` para un manejo efectivo del estado y las operaciones asíncronas.
- **Mock API**: Uso de una API mock para simular datos de usuario



## Herramientas y Tecnologías Utilizadas

- **[React](https://reactjs.org/)**
- **[React Router](https://reactrouter.com/)**
- **[i18next](https://www.i18next.com/)**
- **[Axios](https://axios-http.com/)**
- **[Node.js](https://nodejs.org/)** y **[npm](https://www.npmjs.com/)**
- **[Git](https://git-scm.com/)**


## Autores

- **Juan Esteban Cuellar Argotty** - _202014258_ 


