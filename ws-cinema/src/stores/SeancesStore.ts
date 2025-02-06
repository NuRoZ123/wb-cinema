import {defineStore} from 'pinia';
import xhr from '@/utils/xhr.ts';
import type {Seance} from "@/model/seance.ts";

export const SeancesStore = defineStore('SeancesStore', {
    state: () => ({
        selectedFilmSeances: [] as Seance[],
    }),
    actions: {
        async selectSeance(id: number) {
            xhr.get('/seance/' + id.toString()).then((response: any) => {
                if(response.code === 200) {
                    this.selectedFilmSeances = JSON.parse(response.response);
                }
                else {
                    console.log('Error while fetching movies');
                }
            });
        },

        async deleteSeance(id: number) {
            xhr.delete("/seance/" + id.toString(), localStorage.getItem("token") as string).then((response: any) => {
                if(response.code === 200) {
                    this.selectedFilmSeances = this.selectedFilmSeances.filter((seance) => seance.id !== id);
                }
                else {
                    console.log('Error while deleting seance');
                }
            });
        },
        async createSeance(filmId: number, salleSelectedId: number, dateSelected: string, onSucces: Function) {
            xhr.post("/seance", {film: filmId, salle: salleSelectedId, dateHeure: dateSelected}, localStorage.getItem("token") as string).then((response: any) => {
                if(response.code === 200) {
                    this.selectedFilmSeances.push(JSON.parse(response.response));
                    onSucces();
                }
                else {
                    console.log('Error while deleting seance');
                }
            });
        }
    },
});