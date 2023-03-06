<script setup>
import { ref, computed } from "vue";
import { usePokemonStore } from "../store/pokemons";

const store = usePokemonStore();

const imgUrl = ref(store.imgUrl);

const onePokemonData = defineProps(["pokeData", "loading"])

const dialogEnabler = computed(() => {
  return store.dialogPokemon;
});
</script>
<template>
  <v-dialog
    v-model="dialogEnabler"
    persistent
    max-width="600"
    min-width="200"
  >
    <v-overlay
    v-if="onePokemonData.loading"
      class="align-center justify-center"
    >
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    <v-card v-else>
      <v-btn color="primary" icon size="x-small" variant="text" @click="store.setDialogPokemon(false)"><v-icon>mdi-close</v-icon></v-btn>
      <v-card-title class="text-center" style="text-transform: capitalize;"> {{onePokemonData?.pokeData?.name}} </v-card-title>
      <v-row justify="center">
        <v-col cols="5">
          <v-img :src="`${imgUrl}${onePokemonData?.pokeData?.id}.png`"> </v-img>
        </v-col>
      </v-row>
      <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">
            Informações
          </div>

          <v-timeline density="compact" align="start">
            <v-timeline-item
              dot-color="deep-purple-lighten-1"
              size="x-small"
            >
              <div class="mb-4">
                <div>
                  <strong>Peso:</strong>
                  {{onePokemonData?.pokeData?.weight}} Kg
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              dot-color="green"
              size="x-small"
            >
              <div class="mb-4">
                <div>
                  <strong>Tamanho:</strong>
                  {{onePokemonData?.pokeData?.height / 10}} m
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              dot-color="yellow"
              size="x-small"
              v-if="onePokemonData.pokeData.base_experience !== null"
            >
              <div class="mb-4">
                <div>
                  <strong>XP:</strong>
                  {{onePokemonData?.pokeData?.base_experience}}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
    </v-card>
  </v-dialog>
</template>