<script setup>
import { ref, watch } from "vue";

const items = [
  { title: "Home", value: "home", icon: "mdi-view-dashboard", link: "/" },
  { title: "About", value: "about", icon: "mdi-forum", link: "/about" },
];

let drawer = ref(false);

const group = ref(null);
watch(group, (newGroup) => {
  drawer = false;
});
</script>

<template>
  <v-layout>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-list-item
        prepend-avatar="https://raw.githubusercontent.com/Maknollram/pokevite/8c3dd6d1cd3566a9dae9670d6c460b16477c4e23/src/assets/img/pikachu.svg"
        nav
      >
      </v-list-item>
      <v-toolbar-title>SISNAORUS</v-toolbar-title>

      <!-- <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn variant="text" icon="mdi-filter"></v-btn>

      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn> -->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="bottom" temporary>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          :prepend-icon="item.icon"
          :title="item.title"
          @click.stop="drawer = !drawer"
        ></v-list-item
      ></v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>
