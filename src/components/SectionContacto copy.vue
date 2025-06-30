<script setup lang="ts">
import { ref } from "vue";

const form = ref({ nombre: "", email: "", mensaje: "" });
const formRef = ref();

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
            <div class="mx-auto text-center">
                <b-img
                    src="/contact.jpg"
                    fluid
                    alt="Responsive image"
                    class="mb-4"
                ></b-img>
            </div>

            <h2 class="text-center mb-4">Contáctanos</h2>
            <b-form @submit.prevent="handleSubmit" ref="formRef">
                <b-row class="g-3">
                    <b-col md="6">
                        <b-form-group label="Nombre" label-for="nombre">
                            <b-form-input
                                id="nombre"
                                v-model="form.nombre"
                                required
                            ></b-form-input>
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
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <b-form-group label="Mensaje" label-for="mensaje">
                            <b-form-textarea
                                id="mensaje"
                                v-model="form.mensaje"
                                rows="4"
                                required
                            ></b-form-textarea>
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

<style scoped></style>
