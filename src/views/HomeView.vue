<script setup>
import { onMounted, reactive, ref, computed } from "vue";
import ListPokemons from "../components/ListPokemons.vue";
import { useStore } from "vuex";

const store = useStore();

const imgUrl = ref(store.getters.getImgUrl);

const listNames = computed(() => {
  console.log(store.getters.getNames);
  return store.getters.getNames;
});

onMounted(() => {
  store.dispatch("listNames");
});

// export default {
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
//   setup() {
//     let pokemons = reactive({});

//     onMounted(() => {
//       DataService.getAll()
//         .then((res) => (pokemons = res.data.results))
//         .catch((e) => console.log(e));
//     });
//   },
// };
</script>

<template>
  <v-card class="mx-auto">
    <!-- <ListPokemons
      v-for="(list, index) in listNames"
      :key="index"
      :name="list.name"
    /> -->
    <v-container fluid>
      <v-row dense>
        <v-col cols="2" v-for="(list, index) in listNames" :key="index">
          <v-card class="cardMon">
            <v-img :src="`${imgUrl}${index + 1}.png`"> </v-img>
            <v-card-title class="text-center pa-0">
              {{ list.name }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
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
