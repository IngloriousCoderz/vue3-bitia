<script setup>
import { onUpdated } from 'vue'
import { storeToRefs } from 'pinia'

import { useListStore } from './stores/list'
import { useFormStore } from './stores/form'

const form = useFormStore()
const list = useListStore()

const { text } = storeToRefs(form)

function handleSubmit() {
  list.add(text.value)
  text.value = ''
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
