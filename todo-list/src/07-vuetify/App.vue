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
    <div class="pa-4">
      <todo-header :name="`Matteo${' '}Antony`" />

      <todo-form />

      <todo-list />
    </div>
  </v-app>
</template>
