<script setup lang="ts">
import {MoviesStore} from '@/stores/MoviesStore.ts';
import router from "@/router";

const moviesStore = MoviesStore();

    moviesStore.fetchMovies();

    const onSelectFilm = (id: number) => {
        router.push({ path: `/seances/film/${id}` });
    }
</script>



<template>
    <h1>WS - Cinéma</h1>
    <div class="home-page">
        <div v-for="movie in moviesStore.movies" :key="movie.id" class="movie" @click="onSelectFilm(movie.id)">
            <img :src="movie.image" :alt="movie.titre" class="movie-poster" />
            <h2 class="movie-title">{{ movie.titre }}</h2>
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
}
.home-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.movie {
    margin: 10px;
    text-align: center;
}
.movie-poster {
    width: 200px;
    height: 300px;
    object-fit: cover;
}
.movie-title {
    margin-top: 10px;
    font-size: 1.2em;
}
</style>