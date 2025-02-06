import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import HomePage from '@/views/HomePage.vue';
import SeanceView from "@/views/SeanceView.vue";
import SallesView from "@/views/SallesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/login', name: 'login', component: LoginView},
    {path: '/home', name: 'home', component: HomePage},
    {path: '/seances/film/:id', name: 'seances', component: SeanceView},
    {path: '/salles', name: 'salles', component: SallesView},
  ],
})

export default router
