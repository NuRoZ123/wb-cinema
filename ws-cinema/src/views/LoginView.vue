<template>
  <div class="flex flex-row items-center justify-center h-screen gap-8">
    <form class="flex flex-col gap-6 mt-8 border rounded-lg p-8">
      <h1 class="text-5xl">Connexion</h1>
      <span v-show="errorLoginMessage !== ''" class="text-red-500">{{errorLoginMessage}}</span>
      <input v-model="email" type="text" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="button" @click="login" class="border rounded-lg">Se connecter</button>
    </form>

    <form class="flex flex-col gap-6 mt-8 border rounded-lg p-8">
      <h1 class="text-5xl">Inscription</h1>
      <span v-show="errorRegisterMessage !== ''" class="text-red-500">{{errorRegisterMessage}}</span>
      <span v-show="successRegisterMessage !== ''" class="text-green-500">{{successRegisterMessage}}</span>
      <input v-model="email" type="text" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="button" @click="register" class="border rounded-lg">S'inscrire</button>
    </form>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {UtilisateurStore} from "@/stores/UtilisateurStore.ts";
import router from "@/router";

const utilisateurStore = UtilisateurStore();

const errorLoginMessage = ref('');
const errorRegisterMessage = ref('');
const successRegisterMessage = ref('');
const email = ref('');
const password = ref('');

const validateField = () => {
  if(!email.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
    return 'Email invalide';
  } else if(password.value.length < 8) {
    return 'Mot de passe trop court';
  }

  return '';
}

const login = () => {
  const isValidateField = validateField();

  if(isValidateField !== '') {
    errorLoginMessage.value = isValidateField;
    return;
  }

  utilisateurStore.login(email.value, password.value,
      () => {
        router.push("/");
      },
      () => {
        errorLoginMessage.value = 'Identifiant ou mot de passe incorrect';
      });
}

const register = () => {
  const isValidateField = validateField();

  if(isValidateField !== '') {
    errorRegisterMessage.value = isValidateField;
    return;
  }

  utilisateurStore.register(email.value, password.value,
      () => {
        successRegisterMessage.value = 'Inscription réussie';
        errorRegisterMessage.value = '';
      },
      () => {
        errorRegisterMessage.value = 'Erreur lors de l\'inscription';
        successRegisterMessage.value = '';
      });
}

</script>

<style scoped>

</style>