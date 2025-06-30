/**
 * main.ts - Punto de Entrada de la Aplicación
 * 
 * Este archivo inicializa la aplicación Vue.js y configura todas las
 * dependencias necesarias como Bootstrap, Vue Router y animaciones.
 */

// Importaciones principales de Vue
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Importaciones de Bootstrap y estilos
import { createBootstrap } from "bootstrap-vue-next";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "bootstrap/dist/css/bootstrap.css";

// Importación de animaciones CSS
import "animate.css";

// Creación de la instancia de la aplicación Vue
const app = createApp(App);

// Configuración del router para navegación
app.use(router);

// Configuración de Bootstrap Vue Next para componentes UI
app.use(createBootstrap());

// Montaje de la aplicación en el elemento #app del DOM
app.mount("#app");
