<template>
  <main>
    <span class="text-red-500">text</span>
  </main>
</template>

<script setup lang="ts">

import {UtilisateurStore} from "@/stores/UtilisateurStore.ts";
import router from "@/router";

const utililisateurStore = UtilisateurStore();

if(!utililisateurStore.isConnected) {
  router.push({name: 'login'});
}
</script>

