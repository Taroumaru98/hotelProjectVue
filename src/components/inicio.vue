<template>
    <q-page padding>
      <div class="q-pa-md">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
        >
          <q-carousel-slide :name="1" img-src="../assets/images/hotel1.jpg" />
          <q-carousel-slide :name="2" img-src="../assets/images/hotel2.jpg" />
          <q-carousel-slide :name="3" img-src="../assets/images/hotel3.jpg" />
          <q-carousel-slide :name="4" img-src="../assets/images/hotel1.jpg" />
        </q-carousel>
      </div>
  
      <div class="intro">
        <h1>Bienvenido a Nuestro Hotel</h1>
        <p>Disfruta de una experiencia única con nuestros servicios exclusivos.</p>
      </div>
  
      <div class="services">
        <h2>Servicios Destacados</h2>
        <q-card v-for="service in services" :key="service.name" class="service-card">
          <q-img :src="service.img" :alt="service.name" ratio="16/9">
            <q-card-section>
              <div class="text-h6">{{ service.name }}</div>
              <div class="text-subtitle2">{{ service.description }}</div>
            </q-card-section>
          </q-img>
        </q-card>
      </div>
  
      <q-btn
        outline
        color="primary"
        label="Explora más"
        @click="$router.push('/habitaciones')"
      />
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const slide = ref(1)
  
  const services = [
    { name: 'Piscina', img: 'path/to/pool.jpg', description: 'Disfruta de nuestra piscina al aire libre.' },
    { name: 'Restaurante', img: 'path/to/restaurant.jpg', description: 'Gastronomía de primer nivel.' },
    { name: 'Spa', img: 'path/to/spa.jpg', description: 'Relájate en nuestro spa de lujo.' },
  ]
  </script>
  
  <style>
  .intro {
    text-align: center;
    margin: 20px 0;
  }
  
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
  