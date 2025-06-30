<script setup lang="ts">
/**
 * HomeView.vue - Vista Principal de la Aplicación
 * 
 * Esta es la página principal que contiene todas las secciones del sitio web.
 * Organiza los componentes en un layout de una sola página (SPA) con navegación
 * por anclas entre secciones.
 * 
 * @author Clínica Los Ángeles
 * @version 1.0.0
 */

// Importación de todos los componentes de sección
import SectionBeneficios from "../components/SectionBeneficios.vue";
import SectionContacto from "../components/SectionContacto.vue";
import SectionHero from "../components/SectionHero.vue";
import SectionServicios from "../components/SectionServicios.vue";
import SectionTestimonios from "../components/SectionTestimonios.vue";
</script>

<template>
    <!-- Layout de la página principal -->
    <!-- Cada sección ocupa al menos 100vh (altura completa de la pantalla) -->
    
    <SectionHero />      <!-- Sección principal con banner y llamada a la acción -->
    <SectionServicios /> <!-- Catálogo de servicios médicos ofrecidos -->
    <SectionBeneficios /> <!-- Ventajas y beneficios de elegir la clínica -->
    <SectionTestimonios /> <!-- Opiniones y testimonios de pacientes -->
    <SectionContacto />   <!-- Formulario de contacto e información -->
</template>

<style scoped>
/**
 * Estilos específicos para la vista principal
 * Asegura que cada sección tenga al menos la altura completa de la pantalla
 * y esté centrada verticalmente
 */
section {
    min-height: 100vh;        /* Altura mínima: 100% de la altura de la ventana */
    display: flex;            /* Usa flexbox para centrado */
    align-items: center;      /* Centra verticalmente el contenido */
}
</style>
