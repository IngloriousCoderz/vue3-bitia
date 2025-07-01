<script setup>
import { onUpdated } from 'vue'

import { useListStore } from './stores/list'
import { useFormStore } from './stores/form'

const form = useFormStore()
const list = useListStore()

function handleSubmit() {
  list.add(form.text)
  form.text = ''
}

onUpdated(() => {
  console.log('Form render')
})
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input placeholder="What next?" autofocus v-model="form.text" />
    <button>Add</button>
  </form>
</template>
