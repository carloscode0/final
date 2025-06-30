<script setup lang="ts">
/**
 * App.vue - Componente Principal de la Aplicación
 * Este es el componente raíz que estructura toda la aplicación.
 * Define el layout principal con Header, contenido dinámico y Footer.
 */

// Importación de componentes principales
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <!-- Layout Principal de la Aplicación -->
    <Header />
    <!-- Router-view renderiza el contenido dinámico basado en la ruta actual -->
    <router-view />
    <Footer />
</template>

<style scoped>
/* Estilos específicos del componente App */
/* Nota: Actualmente no hay estilos específicos definidos */
</style>
