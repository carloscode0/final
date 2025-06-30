/**
 * router/index.ts - Configuración de Rutas
 * 
 * Define todas las rutas de la aplicación y configura el comportamiento
 * de navegación, incluyendo scroll suave y lazy loading de componentes.
 * 
 * @author Clínica Los Ángeles
 * @version 1.0.0
 */

// Importaciones de Vue Router
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
// import HomeView from '@/views/HomeView.vue'
import "animate.css";

/**
 * Definición de rutas de la aplicación
 * Cada ruta especifica un path, nombre y componente a renderizar
 */
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    // Lazy loading: el componente se carga solo cuando se necesita
    component: () => import("../views/HomeView.vue"),
  },
  // Nota: La ruta About se puede agregar cuando se cree el componente AboutView.vue
];

/**
 * Creación del router con configuración personalizada
 */
const router = createRouter({
  // Usa el historial del navegador para URLs limpias
  history: createWebHistory(),
  routes,
  
  /**
   * Comportamiento personalizado del scroll
   * @param to - Ruta de destino
   * @returns Configuración de scroll
   */
  scrollBehavior(to) {
    // Si la ruta tiene un hash (ancla), hace scroll suave a esa sección
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    // Si no hay hash, hace scroll al inicio de la página
    return { top: 0 };
  },
});

export default router;
