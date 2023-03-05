<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const imgUrl = ref(store.getters.getImgUrl);

const onePokemonData = defineProps(["pokeData"])

const dialogEnabler = computed(() => {
  return store.getters.getDialogPokemon;
});

const closeDialog = () => {
  store.commit('SET_DIALOG_POKEMON', false)
}

</script>
<template>
  <v-dialog
    v-model="dialogEnabler"
    max-width="600"
    min-width="200"
  >
    <v-card>
      <v-btn color="primary" icon size="x-small" variant="text" @click="closeDialog"><v-icon>mdi-close</v-icon></v-btn>
      <v-card-title class="text-center"> {{onePokemonData?.pokeData?.name}} </v-card-title>
      <v-row justify="center">
        <v-col cols="5">
          <v-img :src="`${imgUrl}${onePokemonData?.pokeData?.id}.png`"> </v-img>
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
                  {{onePokemonData?.pokeData?.weight}}
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
                  {{onePokemonData?.pokeData?.height}}
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
                  {{onePokemonData?.pokeData?.base_experience}}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
    </v-card>
  </v-dialog>
</template>