<script setup>
import { onMounted, reactive, ref, computed } from "vue";
import ListPokemons from "../components/ListPokemons.vue";
import { useStore } from "vuex";

const store = useStore();

let search = ref("");

const listNames = computed(() => {
  return store.getters.getNames;
});

const listFiltered = computed(() => {
  if (listNames.value && search.value) {
    return listNames.value.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.value.toLowerCase())
    );
  }
  return listNames.value;
});

onMounted(() => {
  store.dispatch("listNames");
});
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="search"
          append-inner-icon="mdi-search"
          variant="solo"
          clear-icon="mdi-close-circle"
          clearable
          label="Pesquisar"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row dense>
      <ListPokemons :listNames="listFiltered" />
    </v-row>
  </v-container>
</template>

<style></style>
