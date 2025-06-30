<script setup lang="ts">
const servicios = [
  {
    icono: "🩺",
    titulo: "Emergencias 24/7",
    descripcion:
      "Atención médica inmediata las 24 horas del día, los 7 días de la semana.",
  },
  {
    icono: "🏥",
    titulo: "Internación",
    descripcion: "Instalaciones modernas para una estancia cómoda y segura.",
  },
  {
    icono: "🧪",
    titulo: "Laboratorio Clínico",
    descripcion: "Análisis y pruebas diagnósticas con tecnología de punta.",
  },
  {
    icono: "🖥️",
    titulo: "Imagenología",
    descripcion: "Servicios de Rayos X, Tomografía, Ecografía y más.",
  },
  {
    icono: "🧬",
    titulo: "Oncología",
    descripcion: "Tratamientos especializados para pacientes oncológicos.",
  },
  {
    icono: "👶",
    titulo: "Neonatología",
    descripcion: "Cuidado especializado para recién nacidos.",
  },
];


</script>

<template>
  <section id="servicios" class="py-5">
    <b-container>
      <h2 class="text-center mb-4">Nuestros Servicios</h2>
      <b-row class="g-4">
        <b-col cols="12" md="4" v-for="(servicio, i) in servicios" :key="i">
          <b-card class="text-center h-100 p-4">
            <div class="display-3 mb-3">{{ servicio.icono }}</div>
            <h5 class="card-title">{{ servicio.titulo }}</h5>
            <p class="card-text">{{ servicio.descripcion }}</p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>

</template>

<style scoped>

</style>