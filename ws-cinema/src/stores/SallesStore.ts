import {defineStore} from 'pinia';
import xhr from '@/utils/xhr.ts';
import type {Salle} from "@/model/salle.ts";

export const SallesStore = defineStore('SallesStore', {
    state: () => ({
        salles: [] as Salle[],
    }),
    actions: {
        async loadSalle() {
            xhr.get('/salles').then((response: any) => {
                if(response.code === 200) {
                    this.salles = JSON.parse(response.response);
                }
                else {
                    console.log('Error while fetching movies');
                }
            });
        },
        async createSalle(nom: string, capacite: number) {
            const salle = {
                nom: nom,
                capacite: capacite
            };
            xhr.post('/salles', salle, localStorage.getItem("token") as string).then(response => {
                if(response.code === 201) {
                    this.loadSalle();
                }
                else {
                    console.log('Error while adding movie');
                }
            });
        }
    },
});