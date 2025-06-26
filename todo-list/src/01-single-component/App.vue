<script setup>
const tasks = [
  { id: 1, title: 'Learn Vue 3', completed: true },
  { id: 2, title: 'Look for a job', completed: false },
  { id: 3, title: 'Forget everything' },
]
</script>

<template>
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

  <h1>Todo List</h1>

  <form>
    <input placeholder="What next?" autofocus />
    <button>Add</button>
  </form>

  <ul>
    <li>
      <span>Look for a job</span>
      &nbsp;
      <button>x</button>
    </li>

    <!-- <li>
      <span class="completed">Learn Vue 3</span>
      &nbsp;
      <button>x</button>
    </li>
    <li>
      <span>Look for a job</span>
      &nbsp;
      <button>x</button>
    </li>
    <li>
      <span>Forget everything</span>
      &nbsp;
      <button>x</button>
    </li> -->
  </ul>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
