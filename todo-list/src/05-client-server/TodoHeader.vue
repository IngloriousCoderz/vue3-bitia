<script setup>
defineProps({
  name: {
    type: String,
    required: true,
    default: 'User',
  },
})
</script>

<template>
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

  <h1>{{ name }}'s Todo List</h1>
</template>
