<script>
export default {
  name: 'App',

  data() {
    return {
      text: '',
      tasks: [
        { id: 1, title: 'Learn Vue 3', completed: true },
        { id: 2, title: 'Look for a job', completed: false },
        { id: 3, title: 'Forget everything' },
      ],
    }
  },

  methods: {
    handleSubmit() {
      const maxId = this.tasks.length ? this.tasks[this.tasks.length - 1].id : 0
      const task = { id: maxId + 1, title: this.text }
      this.tasks.push(task)

      this.text = ''
    },

    handleToggle(index) {
      const task = this.tasks[index]
      task.completed = !task.completed
    },

    handleRemove(index) {
      this.tasks.splice(index, 1)
    },
  },
}
</script>

<template>
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

  <h1>Todo List</h1>

  <form @submit.prevent="handleSubmit">
    <input placeholder="What next?" autofocus v-model="text" />
    <button>Add</button>
  </form>

  <ul>
    <li v-for="(task, index) of tasks" :key="task.id">
      <span :class="{ completed: task.completed }" @click="handleToggle(index)">{{
        task.title
      }}</span>
      &nbsp;
      <button @click="handleRemove(index)">x</button>
    </li>
  </ul>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
