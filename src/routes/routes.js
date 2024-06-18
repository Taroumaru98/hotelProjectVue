import contacto from '../components/contacto.vue'
import deportesExtremos from '../components/deportesExtremos.vue'
import habitaciones from '../components/habitaciones.vue'
import servicios from '../components/servicios.vue'
import inicio from '../components/inicio.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes=[
    {path: '/', component:inicio},
    {path: '/contacto', component:contacto},
    {path: '/deportesExtremos', component:deportesExtremos},
    {path: '/habitaciones', component:habitaciones},
    {path: '/servicios', component:servicios}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes 
})