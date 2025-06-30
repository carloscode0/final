<script setup lang="ts">

const testimonios = [
  {
    texto:
      "La atención en la Clínica Los Ángeles fue excepcional. Me sentí cuidado en todo momento.",
    autor: "María López",
  },
  {
    texto: "Gracias al equipo médico por su dedicación y profesionalismo.",
    autor: "Carlos Pérez",
  },
];
</script>

<template>
  <section id="testimonios" class="py-5">
    <b-container>
      <h2 class="text-center mb-4">Testimonios</h2>
      <b-row>
        <b-col cols="12" md="6" v-for="(testimonio, i) in testimonios" :key="i">
          <blockquote class="blockquote">
            <p>“{{ testimonio.texto }}”</p>
            <footer class="blockquote-footer">{{ testimonio.autor }}</footer>
          </blockquote>
        </b-col>
      </b-row>
    </b-container>
  </section>

</template>

<style scoped>

</style>