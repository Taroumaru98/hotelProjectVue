<template>
    <q-page padding>
      <h1>Habitaciones</h1>
      <div class="rooms">
        <q-card v-for="room in rooms" :key="room.name" class="room-card">
          <q-img :src="room.img" :alt="room.name" ratio="16/9">
            <q-card-section>
              <div class="text-h6">{{ room.name }}</div>
              <div class="text-subtitle2">{{ room.description }}</div>
              <div class="text-body1">Precio: {{ room.price }}</div>
              <q-btn outline color="primary" label="Reservar" @click="reserveRoom(room)" />
            </q-card-section>
          </q-img>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const rooms = [
    { name: 'Estándar', img: 'path/to/standard-room.jpg', description: 'Confort y economía.', price: '$100' },
    { name: 'Suite', img: 'path/to/suite-room.jpg', description: 'Lujo y confort.', price: '$200' },
    { name: 'Deluxe', img: 'path/to/deluxe-room.jpg', description: 'Máximo confort.', price: '$300' },
  ]
  
  function reserveRoom(room) {
    // Lógica de reserva de habitación
    alert(`Reservaste la habitación: ${room.name}`)
  }
  </script>
  
  <style>
  .rooms {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .room-card {
    width: 300px;
    margin: 10px;
  }
  </style>
  