<template>
    <!-- Header Principal - Navegación Fija -->
    <b-navbar toggleable="lg" class="">
        <b-container>
            <!-- Barra de navegación con tema oscuro y animación de entrada -->
            <BNavbar
                v-b-color-mode="'dark'"
                toggleable="lg"
                variant="primary"
                class="pt-2 animate__animated animate__fadeInDown"
            >
                <!-- Logo de la clínica -->
                <BNavbarBrand href="#" class="p-0 m-0">
                    <img
                        src="/logo.png"
                        alt="Logo Clínica Los Ángeles"
                        class="img-fluid"
                        loading="lazy"
                    />
                </BNavbarBrand>
                
                <!-- Título de la clínica -->
                <h1 class="text-white fs-3">Clinica Angeles</h1>
                
                <!-- Botón de menú hamburguesa para móviles -->
                <BNavbarToggle target="nav-collapse" />
                
                <!-- Menú de navegación colapsable -->
                <BCollapse id="nav-collapse" is-nav>
                    <BNavbarNav class="ms-auto mb-2 mb-lg-0">
                        <!-- Enlaces de navegación con indicador de sección activa -->
                        <BNavItem
                            :active="route.hash === '#inicio' || !route.hash"
                            href="#inicio"
                        >
                            Inicio
                        </BNavItem>
                        <BNavItem
                            :active="route.hash === '#servicios'"
                            href="#servicios"
                        >
                            Servicios
                        </BNavItem>
                        <BNavItem
                            :active="route.hash === '#beneficios'"
                            href="#beneficios"
                        >
                            Beneficios
                        </BNavItem>
                        <BNavItem
                            :active="route.hash === '#testimonios'"
                            href="#testimonios"
                        >
                            Testimonios
                        </BNavItem>
                        <BNavItem
                            :active="route.hash === '#contacto'"
                            href="#contacto"
                        >
                            Contacto
                        </BNavItem>
                    </BNavbarNav>
                </BCollapse>
            </BNavbar>
        </b-container>
    </b-navbar>
</template>

<script setup lang="ts">
/**
 * Header.vue - Componente de Navegación Principal
 * 
 * Este componente proporciona la navegación principal del sitio web.
 * Incluye el logo, título de la clínica y menú de navegación con
 * indicadores visuales de la sección activa.
 * 
 * Características:
 * - Navegación fija en la parte superior
 * - Diseño responsivo con menú hamburguesa para móviles
 * - Indicador visual de la sección activa
 * - Animación de entrada suave
 * 
 * @author Clínica Los Ángeles
 * @version 1.0.0
 */

// Importación del composable de Vue Router para acceder a la ruta actual
import { useRoute } from "vue-router";

// Obtener información de la ruta actual para determinar la sección activa
const route = useRoute();
</script>

<style scoped>
/**
 * Estilos específicos del componente Header
 */

/* Estilo para el logo responsivo */
.img-fluid {
    max-width: 70%;    /* El logo ocupa máximo 70% del ancho disponible */
    height: auto;      /* Mantiene la proporción de aspecto */
}

/* Estilo para la barra de navegación fija */
.bg-primary {
    position: fixed;   /* Fija la barra en la parte superior */
    top: 0;
    left: 0;
    right: 0;
    z-index: 1030;     /* Asegura que esté por encima de otros elementos */
    width: 100%;
}

/* Estilos personalizados para la barra de navegación */
.navbar {
    border-bottom-right-radius: 10px;    /* Bordes redondeados en la parte inferior */
    border-bottom-left-radius: 10px;
    --bs-navbar-padding-y: 0rem;         /* Reduce el padding vertical */
    --bs-navbar-padding-x: 1rem;         /* Padding horizontal estándar */
    color: #0791c16e;                    /* Color personalizado */
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.829); /* Sombra sutil */
}
</style>
