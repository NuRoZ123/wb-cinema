<template>
  <h1 class="w-full text-center">Crée une seance</h1>

  <form class="flex flex-row gap-4 w-full items-center justify-center mt-8">
    <span class="text-red-500" v-show="errorMessage !== ''">{{errorMessage}}</span>
    <span class="text-green-500" v-show="successMessage !== ''">{{successMessage}}</span>
    <select v-model="salleSelected">
      <option v-for="salle in salleStore.salles" :key="salle.id" :value="salle.id">{{salle.nom}}</option>
    </select>

    <input type="datetime-local" v-model="dateSelected" />
    <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700" @click="createSeance">Ajouter</button>
  </form>

  <hr class="w-3/4 ml-[12.25%] my-4"/>
  <h1 class="text-center w-full">les seances</h1>
  <div class="flex flex-row flex-wrap w-[80%] ml-[10%] justify-center mt-8 gap-4">
    <div v-for="seance in seanceStore.selectedFilmSeances" class="group flex flex-col justify-center items-center w-1/4 border border-black rounded-lg">
      <span>{{seance.salle.nom}}</span>
      <span>{{ formater.formatDateTime(seance.dateHeure)}}</span>
      <div class="hidden group-hover:flex flex-row w-full justify-end mr-8 my-1">
        <button class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700" @click="seanceStore.deleteSeance(seance.id)">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useRoute} from "vue-router";
import {SeancesStore} from "@/stores/SeancesStore.ts";
import {formater} from "../utils/formater.ts";
import {SallesStore} from "@/stores/SallesStore.ts";
import {ref} from "vue";

const route = useRoute();
const filmId = Number(route.params.id);

const seanceStore = SeancesStore();
const salleStore = SallesStore();

const errorMessage = ref<string>("");
const successMessage = ref<string>("");
const salleSelected = ref<number>(0);
const dateSelected = ref<string>("");

salleStore.loadSalle();
seanceStore.selectSeance(filmId);

const createSeance = () => {
  if(salleSelected.value === 0 || dateSelected.value === ""){
    errorMessage.value = "Veuillez remplir tous les champs";
    successMessage.value = "";
    return;
  }

  seanceStore.createSeance(filmId, salleSelected.value, dateSelected.value, () => {
    successMessage.value = "Seance ajoutée avec succès";
    errorMessage.value = "";
  });
}

</script>

<style scoped>

</style>