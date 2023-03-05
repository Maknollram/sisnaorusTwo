<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import PokeDialog from "../components/PokeDialog.vue";

const pokemons = defineProps(["listNames"]);

const store = useStore();

const imgUrl = ref(store.getters.getImgUrl);

let loadingPokemons = ref(false)

const pokemonData = computed(() => {
  return store.getters.getPokemon;
});

const pokemonSelected = (pokemon) => {
  loadingPokemons.value = true
  store.commit('SET_DIALOG_POKEMON', true)
  store.dispatch("getOneByName", {name: pokemon.name}).finally(() => {
    loadingPokemons.value = false
  })
}

</script>

<template>
  <v-col cols="2" v-for="(pokemon, index) in pokemons.listNames" :key="index">
    <v-card class="cardMon" @click="pokemonSelected(pokemon)">
      <v-img :src="`${imgUrl}${pokemon?.url.split('/')[6]}.png`"> </v-img>
      <v-card-title class="text-center pa-0" style="text-transform: capitalize;">
        {{ pokemon?.name }}
      </v-card-title>
    </v-card>
  </v-col>
  <PokeDialog :pokeData="pokemonData" :loading="loadingPokemons" />
  <!-- <v-dialog
    v-model="dialog"
    max-width="600"
    min-width="200"
  >
    <v-card>
      <v-btn color="primary" icon size="x-small" variant="text" @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
      <v-card-title class="text-center"> {{pokemonData?.name}} </v-card-title>
      <v-row justify="center">
        <v-col cols="5">
          <v-img :src="`${imgUrl}${pokemonData?.id}.png`"> </v-img>
        </v-col>
      </v-row>
      <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">
            Informations
          </div>

          <v-timeline density="compact" align="start">
            <v-timeline-item
              dot-color="deep-purple-lighten-1"
              size="x-small"
            >
              <div class="mb-4">
                <div>
                  <strong>Weight:</strong>
                  {{pokemonData?.weight}}
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              dot-color="green"
              size="x-small"
            >
              <div class="mb-4">
                <div>
                  <strong>Height:</strong>
                  {{pokemonData?.height}}
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              dot-color="yellow"
              size="x-small"
            >
              <div class="mb-4">
                <div>
                  <strong>XP:</strong>
                  {{pokemonData?.base_experience}}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
    </v-card>
  </v-dialog> -->
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
