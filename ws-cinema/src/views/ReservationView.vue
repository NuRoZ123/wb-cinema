<template>
    <div>
        <div class="header">
            <h1>Liste de mes réservation</h1>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Film</th>
                    <th>Date et heure</th>
                    <th>Nombre de place</th>
                    <th>Salles</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="reservation in reservationStore.reservations" :key="reservation.id">
                    <td>{{ reservation.seance.film.titre }}</td>
                    <td>{{ formater.formatDateTime(reservation.seance.dateHeure) }}</td>
                    <td>{{ reservation.nbPlaces }}</td>
                    <td>{{ reservation.seance.salle.nom }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ReservationStore } from '@/stores/ReservationStore';
import { formater } from '@/utils/formater';
import { ref } from 'vue';

const showModalAdd = ref(false);
const reservationStore = ReservationStore();

reservationStore.getReservations();
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.create-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.create-button:hover {
    background-color: #0056b3;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
}

th {
    background-color: #f4f4f4;
}
</style>