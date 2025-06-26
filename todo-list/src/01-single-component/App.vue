<script setup>
import { ref } from 'vue'

const text = ref('')

const tasks = ref([
  { id: 1, title: 'Learn Vue 3', completed: true },
  { id: 2, title: 'Look for a job', completed: false },
  { id: 3, title: 'Forget everything' },
])

// function handleChange(event) {
//   text.value = event.target.value
// }

function handleSubmit() {
  // event.preventDefault()
  const maxId = tasks.value.length ? tasks.value[tasks.value.length - 1].id : 0
  const task = { id: maxId + 1, title: text.value }
  tasks.value.push(task)

  text.value = ''
}

function handleToggle(index) {
  const task = tasks.value[index]
  task.completed = !task.completed
  // tasks.value = [...tasks.value.slice(0, index), task, ...tasks.value.slice(index + 1)]
  // tasks.value = tasks.value.map((task) =>
  //   task.id === id ? { ...task, completed: !task.completed } : task,
  // )
}

function handleRemove(index) {
  tasks.value.splice(index, 1)
  // tasks.value = [...tasks.value.slice(0, index), ...tasks.value.slice(index + 1)]
  // tasks.value = tasks.value.filter((task) => task.id !== id)
}
</script>

<template>
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

  <h1>Todo List</h1>

  <form @submit.prevent="handleSubmit">
    <!-- <input placeholder="What next?" autofocus :value="text" @change="handleChange" /> -->
    <input placeholder="What next?" autofocus v-model="text" />
    <button>Add</button>
  </form>

  <ul>
    <li v-for="(task, index) of tasks" :key="task.id">
      <span :class="{ completed: task.completed }" @click="handleToggle(index)">{{
        task.title
      }}</span>
      &nbsp;
      <button @click="handleRemove(index)">x</button>
    </li>
  </ul>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
