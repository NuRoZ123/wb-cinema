import {defineStore} from 'pinia';
import xhr from '@/utils/xhr.ts';
import type { Reservation } from '@/model/reservation';

export const ReservationStore = defineStore('ReservationStore', {
    state: () => ({
        reservations: [] as Reservation[],
    }),
    actions: {
        async reservation(idSeance : number, nbPlaces : number) {
            const reservation = {
                seance: idSeance,
                nbPlaces: nbPlaces
            };
            xhr.post('/reservation', reservation, localStorage.getItem("token") as string).then(response => {
                if(response.code === 201) {
                    console.log('Reservation successful');
                    this.getReservations();
                }
                else {
                    console.log('Error while making reservation');
                }
            });
            
        },
        async getReservations() {
            xhr.get('/reservation', localStorage.getItem("token") as string).then((response: any) => {
                if(response.code === 200) {
                    console.log(JSON.parse(response.response));
                    this.reservations = JSON.parse(response.response);
                }
                else {
                    console.log('Error while fetching reservations');
                }
            });
        }
    },
});