<script setup lang="ts">
    import { MoviesStore } from '@/stores/MoviesStore.ts';

    const moviesStore = MoviesStore();

    moviesStore.fetchMovies();
</script>



<template>
    <h1>WS - Cinéma</h1>
    <div class="home-page">
        <div v-for="movie in moviesStore.movies" :key="movie.id" class="movie">
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