<template>
    <q-page padding>
      <h1>Deportes Extremos</h1>
      <div class="activities">
        <q-card v-for="activity in activities" :key="activity.name" class="activity-card">
          <q-img :src="activity.img" :alt="activity.name" ratio="16/9">
            <q-card-section>
              <div class="text-h6">{{ activity.name }}</div>
              <div class="text-subtitle2">{{ activity.description }}</div>
              <div class="text-body1">Dificultad: {{ activity.difficulty }}</div>
              <div class="text-body1">Precio: {{ activity.price }}</div>
            </q-card-section>
          </q-img>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const activities = [
    { name: 'Parapente', img: 'path/to/paragliding.jpg', description: 'Vuela sobre el paisaje.', difficulty: 'Media', price: '$150' },
    { name: 'Buceo', img: 'path/to/diving.jpg', description: 'Explora el mundo submarino.', difficulty: 'Alta', price: '$200' },
    { name: 'Escalada', img: 'path/to/climbing.jpg', description: 'Desafía las alturas.', difficulty: 'Alta', price: '$120' },
  ]
  </script>
  
  <style>
  .activities {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .activity-card {
    width: 300px;
    margin: 10px;
  }
  </style>
  