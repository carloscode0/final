<script setup lang="ts">
/**
 * SectionHero.vue - Sección Principal/Banner
 * 
 * Este componente representa la sección hero de la página principal.
 * Muestra el logo de la clínica, título, descripción y un botón de
 * llamada a la acción para solicitar citas.
 * 
 * Características:
 * - Imagen de fondo de la clínica
 * - Logo animado con efecto pulse
 * - Texto con sombras para mejor legibilidad
 * - Botón de llamada a la acción
 * - Diseño responsivo y centrado
 * 
 * @author Clínica Los Ángeles
 * @version 1.0.0
 */
</script>

<template>
    <!-- Sección Hero - Banner Principal -->
    <section
        id="inicio"
        class="fondo d-flex align-items-center text-white text-center"
    >
        <!-- Contenedor del contenido con animación de entrada -->
        <b-container class="contenido animate__animated animate__fadeInUp">
            <!-- Logo de la clínica con animación pulse infinita -->
            <b-img
                src="/logoclinica.png"
                fluid
                alt="Logo Clínica Los Ángeles"
                class="logo animate__animated animate__pulse animate__infinite animate__slower"
            ></b-img>
            
            <!-- Título principal de la clínica -->
            <h1 class="display-4">Clínica Los Ángeles</h1>
            
            <!-- Descripción o tagline -->
            <p class="lead">Comprometidos con tu salud y bienestar</p>
            
            <!-- Botón de llamada a la acción -->
            <b-button href="#contacto" variant="light" size="lg">
                Solicita una cita
            </b-button>
        </b-container>
    </section>
</template>

<style scoped>
/**
 * Estilos específicos del componente SectionHero
 */

/* Estilo para el logo con sombra */
.logo {
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.671));
}

/* Contenedor principal con imagen de fondo */
.fondo {
    position: relative;
    width: 100%;
    height: 100vh;                                    /* Altura completa de la ventana */
    background-image: url("/CLINICA LOS ANGELES_0.jpg");
    background-size: cover;                           /* Cubre todo el contenedor */
    background-position: center;                      /* Centra la imagen */
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Efecto de superposición para mejorar la legibilidad del texto */
.fondo::before {
    content: "";
    position: absolute;
    inset: 0;                                         /* Cubre todo el contenedor */
    background: inherit;
    /* filter: blur(0.5px); */                       /* Efecto de desenfoque (comentado) */
    z-index: 0;                                       /* Capa inferior */
}

/* Contenedor del contenido principal */
.contenido {
    position: relative;
    z-index: 1;                                       /* Capa superior */
    color: white;
    text-align: center;
    text-shadow: 0cap 0cap 10px rgba(0, 0, 0, 0.1);  /* Sombra sutil en el texto */
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.671)); /* Sombra adicional */
}
</style>
