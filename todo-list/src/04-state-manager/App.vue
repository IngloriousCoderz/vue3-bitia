<script setup>
import { ref, onUpdated } from 'vue'

import TodoHeader from './TodoHeader.vue'
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'

const tasks = ref([
  { id: 1, title: 'Learn Vue 3', completed: true },
  { id: 2, title: 'Look for a job', completed: false },
  { id: 3, title: 'Forget everything' },
])

function handleSubmit(text) {
  const maxId = tasks.value.length ? tasks.value[tasks.value.length - 1].id : 0
  const task = { id: maxId + 1, title: text }
  tasks.value.push(task)
}

function handleToggle(index) {
  const task = tasks.value[index]
  task.completed = !task.completed
}

function handleRemove(index) {
  tasks.value.splice(index, 1)
}

onUpdated(() => {
  console.log('App render')
})
</script>

<template>
  <todo-header :name="`Matteo${' '}Antony`" />

  <todo-form @submit="handleSubmit" />

  <todo-list :tasks="tasks" @toggle="handleToggle" @remove="handleRemove" />
</template>
