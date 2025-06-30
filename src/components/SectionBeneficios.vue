<script setup lang="ts">
const beneficios = [
    {
        icono: "🏆",
        titulo: "Excelencia Médica",
        descripcion:
            "Equipo de profesionales altamente calificados y comprometidos.",
    },
    {
        icono: "⚙️",
        titulo: "Tecnología Avanzada",
        descripcion:
            "Equipamiento de última generación para diagnósticos precisos.",
    },
    {
        icono: "🤝",
        titulo: "Atención Integral",
        descripcion:
            "Servicios que abarcan desde la prevención hasta la rehabilitación.",
    },
];
</script>

<template>
    <section id="beneficios" class="bg-light py-5">
        <b-container>
            <h2 class="text-center mb-4">¿Por qué elegirnos?</h2>
            <b-row class="g-4">
                <b-col
                    cols="12"
                    md="4"
                    v-for="(beneficio, i) in beneficios"
                    :key="i"
                >
                    <b-card class="text-center h-100 p-4">
                        <div class="display-3 mb-3">{{ beneficio.icono }}</div>
                        <h5 class="card-title">{{ beneficio.titulo }}</h5>
                        <p class="card-text">{{ beneficio.descripcion }}</p>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<style scoped></style>
