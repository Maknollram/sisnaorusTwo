<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const imgUrl = ref(store.getters.getImgUrl);
const pokemons = defineProps(["listNames"]);
</script>

<template>
  <v-col cols="2" v-for="(pokemon, index) in pokemons.listNames" :key="index">
    <v-card class="cardMon">
      <v-img :src="`${imgUrl}${pokemon.url.split('/')[6]}.png`"> </v-img>
      <v-card-title class="text-center pa-0">
        {{ pokemon.name }}
      </v-card-title>
    </v-card>
  </v-col>
</template>

<style>
.cardMon {
  background: radial-gradient(
    circle,
    rgba(72, 63, 251, 0.5) 0%,
    rgba(70, 252, 244, 0.3) 100%
  );
  cursor: pointer;
}
.cardMon:hover {
  background: radial-gradient(
    circle,
    rgba(72, 63, 251, 0.7) 0%,
    rgba(70, 252, 244, 0.4) 100%
  );
  cursor: pointer;
}
</style>
