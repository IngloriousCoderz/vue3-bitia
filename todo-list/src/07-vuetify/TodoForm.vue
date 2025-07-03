<script setup>
import { onUpdated, ref } from 'vue'

import { useListStore } from './stores/list'

const list = useListStore()

const text = ref('')

function empty() {
  text.value = ''
}

function handleSubmit() {
  list.add(text.value)
  empty()
}

onUpdated(() => {
  console.log('Form render')
})
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <v-row>
      <v-col>
        <v-text-field
          variant="outlined"
          density="compact"
          placeholder="What next?"
          autofocus
          v-model="text"
        ></v-text-field>
      </v-col>

      <v-col class="v-col-auto">
        <v-btn color="success">Add</v-btn>
      </v-col>
    </v-row>
  </form>
</template>
