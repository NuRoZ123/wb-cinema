import {defineStore} from 'pinia';
import xhr from '@/utils/xhr.ts';

export const MoviesStore = defineStore('MoviesStore', {
    state: () => ({
        movies: [],
    }),
    actions: {
        fetchMovies() {
            xhr.get('/film').then(response => {
                if(response.code === 200) {
                    this.movies = JSON.parse(response.response);
                }
            });
        },
    },
});