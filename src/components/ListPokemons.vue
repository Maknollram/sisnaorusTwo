<script setup>
const pokemon = defineProps(["name"]);
</script>

<template>
  <div>
    <v-card>
      {{ pokemon.name }}
    </v-card>
  </div>
</template>
