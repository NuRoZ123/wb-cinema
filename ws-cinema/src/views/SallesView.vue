<template>
    <div>
        <div class="header">
            <h1>Liste des Salles</h1>
            <button @click="openModalAdd()" class="create-button">Créer une Salle</button>
        </div>
        <div v-if="showModalAdd" class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div class="modal-content bg-white p-4 rounded w-1/3">
                <h2 class="text-xl mb-4">Ajouter une salle</h2>
                <p>Nom</p>
                <input type="text" v-model="newNom" class="border p-2 w-full mb-2" placeholder="Nom de la salle" />
                <p>Capacité de la salle</p>
                <input type="number" v-model="newCapacite" class="border p-2 w-full mb-2" placeholder="Capacité de la salle" />
                <div class="flex justify-end mt-4">
                    <button @click="showModalAdd = false" class="bg-gray-500 text-white py-2 px-4 rounded mr-2">Annuler</button>
                    <button @click="createSalle()" class="bg-blue-500 text-white py-2 px-4 rounded">Ajouter</button>
                </div>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Capacité</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="salle in sallesStore.salles" :key="salle.id">
                    <td>{{ salle.id }}</td>
                    <td>{{ salle.nom }}</td>
                    <td>{{ salle.capacite }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { SallesStore } from '@/stores/SallesStore';
import { ref } from 'vue';

const showModalAdd = ref(false);
const sallesStore = SallesStore();
const newNom = ref('');
const newCapacite = ref(0);

sallesStore.loadSalle();

const createSalle = () => {
    // Logique pour créer une nouvelle salle
    console.log('Créer une nouvelle salle');
    sallesStore.createSalle(newNom.value, newCapacite.value);
    showModalAdd.value = false;
}

const openModalAdd = () => {
    showModalAdd.value = true;
}

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