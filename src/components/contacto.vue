<template>
  <q-page padding>
    <h1>Contacto</h1>
    <div class="contact-info">
      <p><strong>Dirección:</strong> Calle Principal 123, Ciudad, País</p>
      <p><strong>Teléfono:</strong> +123 456 7890</p>
      <p><strong>Email:</strong> contacto@hotel.com</p>
      <p><strong>Horario de atención:</strong> 24/7</p>
    </div>

    <q-form @submit="submitForm">
      <q-input v-model="name" label="Nombre" outlined />
      <q-input v-model="email" label="Email" outlined />
      <q-input v-model="message" label="Mensaje" outlined type="textarea" />
      <q-btn type="submit" label="Enviar" color="primary" />
    </q-form>

    <q-map 
      style="height: 400px"
      :options="mapOptions"
      @ready="onMapReady"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

function submitForm() {
  // Lógica de envío del formulario
  alert('Formulario enviado')
}

const mapOptions = {
  center: { lat: -34.397, lng: 150.644 },
  zoom: 8
}

function onMapReady(map) {
  new google.maps.Marker({
    position: mapOptions.center,
    map,
    title: 'Hotel'
  })
}
</script>

<style>
.contact-info {
  margin: 20px 0;
}
</style>
