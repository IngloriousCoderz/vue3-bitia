<script setup>
defineProps(['text'])
const emit = defineEmits(['change', 'submit'])

function handleChange(event) {
  emit('change', event.target.value)
}

function handleSubmit() {
  emit('submit')
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input placeholder="What next?" autofocus :value="text" @change="handleChange" />
    <button>Add</button>
  </form>
</template>
