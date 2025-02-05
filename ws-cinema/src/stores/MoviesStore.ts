import {defineStore} from 'pinia';
import xhr from '@/utils/xhr.ts';
import type { Movie } from '@/model/movie';

export const MoviesStore = defineStore('MoviesStore', {
    state: () => ({
        movies: [] as Movie[],
    }),
    actions: {
        async fetchMovies() {
    
            xhr.get('/film').then(response => {
                if(response.code === 200) {
                    this.movies = JSON.parse(response.response);
                }
                else {
                    console.log('Error while fetching movies');
                }
            });
        },
    },
});