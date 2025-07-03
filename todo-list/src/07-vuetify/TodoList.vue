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
  <v-list>
    <v-list-item v-for="(task, index) of tasks" :key="task.id">
      <v-row>
        <v-col>
          <v-list-item-subtitle
            :class="{ completed: task.completed, temp: task.temp }"
            @click="toggle(index)"
            >{{ task.title }}</v-list-item-subtitle
          >
        </v-col>

        <v-col class="v-col-auto">
          <v-btn color="deep-purple-lighten-2" @click="remove(index)">x</v-btn>
        </v-col>
      </v-row>
    </v-list-item>
  </v-list>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}

.temp {
  opacity: 0.5;
}
</style>
