<script setup>
import { onUpdated } from 'vue'
import { useListStore } from './stores/list'
import { storeToRefs } from 'pinia'

const list = useListStore()

const { tasks } = storeToRefs(list)
const { toggle, remove } = list

onUpdated(() => {
  console.log('List render')
})
</script>

<template>
  <ul>
    <li v-for="(task, index) of tasks" :key="task.id">
      <span :class="{ completed: task.completed }" @click="toggle(index)">{{ task.title }}</span>
      &nbsp;
      <button @click="remove(index)">x</button>
    </li>
  </ul>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
