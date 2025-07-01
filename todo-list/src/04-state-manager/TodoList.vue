<script setup>
import { onUpdated } from 'vue'
import { useListStore } from './stores/list'

const list = useListStore()

onUpdated(() => {
  console.log('List render')
})
</script>

<template>
  <ul>
    <li v-for="(task, index) of list.tasks" :key="task.id">
      <span :class="{ completed: task.completed }" @click="list.toggle(index)">{{
        task.title
      }}</span>
      &nbsp;
      <button @click="list.remove(index)">x</button>
    </li>
  </ul>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
