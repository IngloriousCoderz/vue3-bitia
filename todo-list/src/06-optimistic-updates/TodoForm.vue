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
    <input placeholder="What next?" autofocus v-model="text" />
    <button>Add</button>
  </form>
</template>
