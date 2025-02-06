import {defineStore} from 'pinia';
import xhr from '@/utils/xhr.ts';
import type { Movie } from '@/model/movie';
import type { Genre } from '@/model/genre';

export const MoviesStore = defineStore('MoviesStore', {
    state: () => ({
        movies: [] as Movie[],
    }),
    actions: {
        async fetchMovies() {
            xhr.get('/film').then((response: any) => {
                if(response.code === 200) {
                    this.movies = JSON.parse(response.response);
                }
                else {
                    console.log('Error while fetching movies');
                }
            });
        },
        async deleteMovie(id: number) {
            xhr.delete('/film/' + id, localStorage.getItem("token") as string).then(response => {
                if(response.code === 200) {
                    this.fetchMovies();
                }
                else {
                    console.log('Error while deleting movie');
                }
            });
        },
        async addMovie(titre: string, description: string, duree: number, genres: number, image: string) {
            console.log(genres);
            const movie = {
                titre: titre,
                description: description,
                duree: duree,
                genres: genres,
                image: image
            };
            xhr.post('/film', movie, localStorage.getItem("token") as string).then(response => {
                if(response.code === 201) {
                    this.fetchMovies();
                }
                else {
                    console.log('Error while adding movie');
                }
            });
        },
        async updateMovie(id: number, titre: string, description: string, duree: number, genres: number, image: string) {
            const movie = {
                titre: titre,
                description: description,
                duree: duree,
                genres: genres,
                image: image
            };
            xhr.put('/film/' + id, movie, localStorage.getItem("token") as string).then(response => {
                if(response.code === 200) {
                    this.fetchMovies();
                }
                else {
                    console.log('Error while updating movie');
                }
            });
        },
    },
});