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
  <todo-header :name="`Matteo${' '}Antony`" />

  <todo-form />

  <todo-list />
</template>
