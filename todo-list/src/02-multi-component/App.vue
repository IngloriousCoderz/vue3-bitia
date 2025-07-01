<script setup>
import { ref } from 'vue'
import TodoHeader from './TodoHeader.vue'
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'

const text = ref('')

const tasks = ref([
  { id: 1, title: 'Learn Vue 3', completed: true },
  { id: 2, title: 'Look for a job', completed: false },
  { id: 3, title: 'Forget everything' },
])

function handleChange(value) {
  text.value = value
}

function handleSubmit() {
  const maxId = tasks.value.length ? tasks.value[tasks.value.length - 1].id : 0
  const task = { id: maxId + 1, title: text.value }
  tasks.value.push(task)

  text.value = ''
}

function handleToggle(index) {
  const task = tasks.value[index]
  task.completed = !task.completed
}

function handleRemove(index) {
  tasks.value.splice(index, 1)
}
</script>

<template>
  <todo-header :name="`Matteo${' '}Antony`" />

  <todo-form :text="text" @change="handleChange" @submit="handleSubmit" />

  <todo-list :tasks="tasks" @toggle="handleToggle" @remove="handleRemove" />
</template>
