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
  <v-card>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
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
        <v-card-text>
          <router-view />
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>
