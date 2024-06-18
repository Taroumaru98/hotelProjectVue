<template>
    <q-page padding>
      <h1>Servicios</h1>
      <div class="services">
        <q-card v-for="service in services" :key="service.name" class="service-card">
          <q-img :src="service.img" :alt="service.name" ratio="16/9">
            <q-card-section>
              <div class="text-h6">{{ service.name }}</div>
              <div class="text-subtitle2">{{ service.description }}</div>
            </q-card-section>
          </q-img>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const services = [
    { name: 'Gimnasio', img: 'path/to/gym.jpg', description: 'Mantente en forma durante tu estadía.' },
    { name: 'Servicio a la habitación', img: 'path/to/room-service.jpg', description: 'Disfruta de la comida en tu habitación.' },
    { name: 'Traslado al aeropuerto', img: 'path/to/airport-transfer.jpg', description: 'Comodidad desde y hacia el aeropuerto.' },
  ]
  </script>
  
  <style>
  .services {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .service-card {
    width: 300px;
    margin: 10px;
  }
  </style>
  