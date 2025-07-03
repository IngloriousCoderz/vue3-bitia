<script setup>
import { RouterView } from 'vue-router'

import { routes } from './router'
</script>

<template>
  <h1>Welcome to my app!</h1>

  <v-row>
    <v-col v-for="route of routes" :key="route.path">
      <router-link :to="route.path"
        ><v-btn variant="flat">{{ route.name }}</v-btn></router-link
      >
    </v-col>
  </v-row>

  <router-view></router-view>

  <v-footer>&copy; 2025 Inglorious Coderz</v-footer>
</template>
