<script setup>
import { ref, computed } from "vue";
import { usePokemonStore } from "../store/pokemons";
import PokeDialog from "../components/PokeDialog.vue";

const pokemons = defineProps(["listNames"]);

const store = usePokemonStore();

const imgUrl = ref(store.imgUrl);

let loadingPokemons = ref(false)

const pokemonData = computed(() => {
  return store.pokemon;
});

const pokemonSelected = (pokemon) => {
  loadingPokemons.value = true
  store.setDialogPokemon(true)
  store.getOneByName({name: pokemon.name}).finally(() => {
    loadingPokemons.value = false
  })
}

</script>

<template>
  <v-col cols="3" v-for="(pokemon, index) in pokemons.listNames" :key="index">
    <v-card class="cardMon" @click="pokemonSelected(pokemon)">
      <v-img :src="`${imgUrl}${pokemon?.url.split('/')[6]}.png`"> </v-img>
      <v-card-title class="text-center pa-0" style="text-transform: capitalize;">
        {{ pokemon?.name }}
      </v-card-title>
    </v-card>
  </v-col>
  <PokeDialog :pokeData="pokemonData" :loading="loadingPokemons" />
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
