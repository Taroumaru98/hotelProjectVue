<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Hotel Project
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="center">
        <q-route-tab to="/" label="Inicio" />
        <q-route-tab to="/habitaciones" label="Habitaciones" />
        <q-route-tab to="/contacto" label="Contacto" />
        <q-route-tab to="/deportesExtremos" label="Deportes Extremos" />
        <q-route-tab to="/servicios" label="Servicios" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
      <q-list>
        <q-item clickable v-ripple to="/">
          <q-item-section>Inicio</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/habitaciones">
          <q-item-section>Habitaciones</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/contacto">
          <q-item-section>Contacto</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/deportesExtremos">
          <q-item-section>Deportes Extremos</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/servicios">
          <q-item-section>Servicios</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Hotel</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style>
.q-header {
  background-image: url('./assets/images/hotel1.jpg'); /* Cambia esta URL a la imagen que desees */
  background-size: cover;
  background-position: center;
}

.q-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

.q-toolbar-title {
  display: flex;
  align-items: center;
}

.q-toolbar-title img {
  margin-right: 10px;
}

.q-page-container {
  padding: 20px;
}

.q-list {
  width: 250px;
}

.q-tabs {
  margin-top: 10px;
}
</style>
