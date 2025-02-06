import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import HomePage from '@/views/HomePage.vue';
import SeanceView from "@/views/SeanceView.vue";
import SallesView from "@/views/SallesView.vue";
import GenreView from '@/views/GenreView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/login', name: 'login', component: LoginView},
    {path: '/home', name: 'home', component: HomePage},
    {path: '/seances/film/:id', name: 'seances', component: SeanceView},
    {path: '/salles', name: 'salles', component: SallesView},
    {path: '/genres', name: 'genres', component: GenreView},
  ],
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !localStorage.getItem('token')) {
        next({name: 'login'})
    } else {
        next();
    }
});

export default router
