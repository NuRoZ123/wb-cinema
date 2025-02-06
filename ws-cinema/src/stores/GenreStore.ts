import {defineStore} from 'pinia';
import xhr from '@/utils/xhr.ts';
import type { Genre } from '@/model/genre';

export const GenreStore = defineStore('GenreStore', {
    state: () => ({
        genres: [] as Genre[],
    }),
    actions: {
        async fetchGenres() {
            xhr.get('/genre').then(response => {
                if(response.code === 200) {
                    this.genres = JSON.parse(response.response);
                }
                else {
                    console.log('Error while fetching genres');
                }
            });
        },
        async addGenre(nom: string) {
            const genre = {
                nom: nom
            };
            xhr.post('/genre', genre).then(response => {
                if(response.code === 201) {
                    this.fetchGenres();
                }
                else {
                    console.log('Error while adding genre');
                }
            });
        }
    },
});