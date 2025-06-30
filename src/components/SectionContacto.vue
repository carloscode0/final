<script setup lang="ts">
import { ref } from "vue";

interface FormData {
    nombre: string;
    email: string;
    mensaje: string;
}

const form = ref<FormData>({
    nombre: "",
    email: "",
    mensaje: "",
});

function handleSubmit() {
    if (!form.value.nombre || !form.value.email || !form.value.mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
    }
    alert("Mensaje enviado con éxito.");
    form.value = { nombre: "", email: "", mensaje: "" };
}
</script>

<template>
    <section id="contacto" class="bg-light py-5">
        <b-container>
            <h2 class="text-center mb-4">Contáctanos</h2>
            <div class="mx-auto text-center">
                <b-img
                    src="/contact.jpg"
                    fluid
                    alt="Responsive image"
                    class="mb-4"
                ></b-img>
            </div>

            <b-form @submit.prevent="handleSubmit">
                <b-row class="g-3">
                    <b-col md="6">
                        <b-form-group label="Nombre" label-for="nombre">
                            <b-form-input
                                id="nombre"
                                v-model="form.nombre"
                                required
                                placeholder="Ingresa tu nombre"
                            />
                        </b-form-group>
                    </b-col>

                    <b-col md="6">
                        <b-form-group
                            label="Correo Electrónico"
                            label-for="email"
                        >
                            <b-form-input
                                id="email"
                                type="email"
                                v-model="form.email"
                                required
                                placeholder="ejemplo@correo.com"
                            />
                        </b-form-group>
                    </b-col>

                    <b-col cols="12">
                        <b-form-group label="Mensaje" label-for="mensaje">
                            <b-form-textarea
                                id="mensaje"
                                v-model="form.mensaje"
                                rows="4"
                                required
                                :state="
                                    form.mensaje.length === 0
                                        ? null
                                        : form.mensaje.length >= 10
                                "
                                placeholder="Escribe tu mensaje aquí mayor a 10 caracteres"
                            />
                            <small class="form-text text-muted">
                                {{ form.mensaje.length }} / 100</small
                            >
                        </b-form-group>
                    </b-col>

                    <b-col cols="12" class="text-center">
                        <b-button type="submit" variant="primary"
                            >Enviar</b-button
                        >
                    </b-col>
                </b-row>
            </b-form>
        </b-container>
    </section>
</template>

<style scoped>
/* Puedes agregar estilos personalizados aquí */
</style>
