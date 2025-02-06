<script setup lang="ts">
    import { MoviesStore } from '@/stores/MoviesStore.ts';
    import {ref} from "vue";
    let showModalSuppression = ref(false);
    let showModalAdd = ref(false);
    let showModalEdit = ref(false);

    let newMovieTitle = ref('');
    let newMovieDescription = ref('');
    let newMovieImage = ref('');
    let newMovieDuration = ref(0);
    let newMovieGenre = ref<{ id: number; nom: string } | undefined>(undefined);

    const moviesStore = MoviesStore();

    moviesStore.fetchMovies();

    const deleteFilm = (id: number) => {
        console.log(id);
        moviesStore.deleteMovie(id);
        showModalSuppression.value = false;
    }


    const addFilm = () => {
        console.log('Ajout');
        moviesStore.addMovie(
            newMovieTitle.value,
            newMovieDescription.value,
            newMovieDuration.value,
            newMovieGenre.value.id,
            newMovieImage.value
        );
        showModalAdd.value = false;
    }

    const editFilm = (id: number) => {
        console.log('Modification');
        moviesStore.updateMovie(
            id,
            newMovieTitle.value,
            newMovieDescription.value,
            newMovieDuration.value,
            newMovieGenre.value.id,
            newMovieImage.value
        );
        showModalEdit.value = false;
    }

    const clickAdd = () => {
        moviesStore.fetchGenres();
        showModalAdd.value = true;
        newMovieTitle.value = '';
        newMovieDescription.value = '';
        newMovieImage.value = '';
        newMovieDuration.value = 0;
        newMovieGenre.value = undefined;
    }

    const clickEdit = (id: number) => {
        const film = moviesStore.movies.find(movie => movie.id === id);
        console.log('Modification');
        moviesStore.fetchGenres();
        showModalEdit.value = true;
        console.log(film?.genres)
        if (film) {
            newMovieTitle.value = film.titre;
            newMovieDescription.value = film.description;
            newMovieImage.value = film.image;
            newMovieDuration.value = film.duree;
            newMovieGenre.value = film.genres[0].id;
        }
        console.log(newMovieGenre.value);
    }
</script>



<template>
    <h1>WS - Cinéma</h1>
    <button class="absolute top-2 right-2 bg-blue-500 text-white py-2 px-4 rounded" @click="clickAdd()">Ajout</button>

    <div v-if="showModalAdd" class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
        <div class="modal-content bg-white p-4 rounded w-1/3">
            <h2 class="text-xl mb-4">Ajouter un film</h2>
            <p>Titre</p>
            <input type="text" v-model="newMovieTitle" class="border p-2 w-full mb-2" placeholder="Titre du film" />
            <p>Description</p>
            <input type="text" v-model="newMovieDescription" class="border p-2 w-full mb-2" placeholder="Description du film" />
            <p>Affiche du film</p>
            <input type="text" v-model="newMovieImage" class="border p-2 w-full mb-2" placeholder="Lien de l'affiche du film" />
            <p>Durée du film</p>
            <input type="number" v-model="newMovieDuration" class="border p-2 w-full mb-2" placeholder="Durée du film en minutes" />
            <p>Genre du film</p>
            <select v-model="newMovieGenre" class="border p-2 w-full mb-2">
                <option v-for="genre in moviesStore.genres" :key="genre.id" :value="genre.id">{{ genre.nom }}</option>
            </select>
            <div class="flex justify-end mt-4">
                <button @click="showModalAdd = false" class="bg-gray-500 text-white py-2 px-4 rounded mr-2">Annuler</button>
                <button @click="addFilm()" class="bg-blue-500 text-white py-2 px-4 rounded">Ajouter</button>
            </div>
        </div>
    </div>
    
    <div class="home-page">
        <div v-for="movie in moviesStore.movies" :key="movie.id" class="movie relative" style="border: 1px solid #ccc; padding: 10px; position: relative;">
            <img :src="movie.image" :alt="movie.titre" class="movie-poster" />
            <h2 class="movie-title">{{ movie.titre }}</h2>
            <button class="absolute top-2 right-2 bg-red-500 text-white py-2 px-4 rounded opacity-0 hover:opacity-100 transition-opacity duration-300" @click="clickEdit(movie.id)">Modifier</button>
            <button class="absolute top-12 right-2 bg-red-500 text-white py-2 px-4 rounded opacity-0 hover:opacity-100 transition-opacity duration-300" @click="showModalSuppression=true">Supprimer</button>
            <div v-if="showModalSuppression" class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="modal-content bg-white p-4 rounded">
                <h2 class="text-xl mb-4">Confirmer la suppression</h2>
                <p>Êtes-vous sûr de vouloir supprimer ce film ?</p>
                <div class="flex justify-end mt-4">
                    <button @click="showModalSuppression = false" class="bg-gray-500 text-white py-2 px-4 rounded mr-2">Annuler</button>
                    <button @click="deleteFilm(movie.id)" class="bg-red-500 text-white py-2 px-4 rounded">Supprimer</button>
                </div>
            </div>
            </div>

            <div v-if="showModalEdit" class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div class="modal-content bg-white p-4 rounded w-1/3">
                <h2 class="text-xl mb-4">Modifier le film</h2>
                <p>Titre</p>
                <input type="text" v-model="newMovieTitle" class="border p-2 w-full mb-2" placeholder="Titre du film" />
                <p>Description</p>
                <input type="text" v-model="newMovieDescription" class="border p-2 w-full mb-2" placeholder="Description du film" />
                <p>Affiche du film</p>
                <input type="text" v-model="newMovieImage" class="border p-2 w-full mb-2" placeholder="Lien de l'affiche du film" />
                <p>Durée du film</p>
                <input type="number" v-model="newMovieDuration" class="border p-2 w-full mb-2" placeholder="Durée du film en minutes" />
                <p>Genre du film</p>
                <select v-model="newMovieGenre" class="border p-2 w-full mb-2">
                    <option v-for="genre in moviesStore.genres" :key="genre.id" :value="genre.id">{{ genre.nom }}</option>
                </select>
                <div class="flex justify-end mt-4">
                    <button @click="showModalEdit = false" class="bg-gray-500 text-white py-2 px-4 rounded mr-2">Annuler</button>
                    <button @click="editFilm(movie.id)" class="bg-blue-500 text-white py-2 px-4 rounded">Modifier</button>
                </div>
            </div>
        </div>
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