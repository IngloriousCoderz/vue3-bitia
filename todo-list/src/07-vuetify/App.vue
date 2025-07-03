<script setup>
import { onUpdated } from 'vue'

import TodoHeader from './TodoHeader.vue'
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'

onUpdated(() => {
  console.log('App render')
})
</script>

<template>
  <v-app>
    <v-container>
      <todo-header :name="`Matteo${' '}Antony`" />

      <todo-form />

      <todo-list />
    </v-container>
  </v-app>
</template>
