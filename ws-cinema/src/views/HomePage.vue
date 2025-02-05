<script setup lang="ts">
    import { ref } from 'vue';
    import { MoviesStore } from '@/stores/MoviesStore.ts';

    const moviesStore = MoviesStore();

    const movies = moviesStore.fetchMovies();
</script>



<template>
    <h1>WS - Cinéma</h1>
    <div class="home-page">
        <div v-for="movie in movies" :key="movie.title" class="movie">
            <img :src="movie.poster" :alt="movie.title" class="movie-poster" />
            <h2 class="movie-title">{{ movie.title }}</h2>
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