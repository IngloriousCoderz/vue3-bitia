<script setup>
import { ref, onUpdated } from 'vue'

const emit = defineEmits(['submit'])

const text = ref('')

function handleSubmit() {
  emit('submit', text.value)
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
