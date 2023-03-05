<script setup>
import { reactive } from "vue";
  const infos = reactive([
    {name: 'PokéAPI', color: 'yellow', url: 'https://pokeapi.co/'},
    {name: 'Vite', color: 'purple', url: 'https://vitejs.dev/'},
    {name: 'Vue 3', color: 'green', url: 'https://vuejs.org/'},
    {name: 'Vuetify', color: 'blue', url: 'https://vuetifyjs.com/en/'},
    {name: 'Vuex', color: 'red', url: 'https://vuex.vuejs.org/'},
    {name: 'Vue Router', color: 'orange', url: 'https://router.vuejs.org/'},
    {name: 'Axios', color: 'black', url: 'https://github.com/axios/axios'},
  ])
  const mainInfos = reactive({
    createdBy: 'Maknollram',
    year: 2023
  })
</script>
<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="600" elevation="20">
        <v-img
          height="200"
          src="../src/assets/img/pokes.jpg"
          cover
          class="text-white"
        ></v-img>

        <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">
            Desenvolvido por {{ mainInfos.createdBy }} em {{ mainInfos.year }} usando:
          </div>

          <v-timeline density="compact" align="start">
            <v-timeline-item
              v-for="(info, index) in infos"
              :key="index"
              :dot-color="info.color"
              size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-normal">
                  {{ info.name }}
                </div>
                <a :href="info.url" target="_blank" rel="noopener noreferrer">{{ info.url }}</a>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
