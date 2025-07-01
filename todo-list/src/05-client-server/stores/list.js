import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useListStore = defineStore('list', () => {
  const tasks = ref([
    { id: 1, title: 'Learn Vue 3', completed: true },
    { id: 2, title: 'Look for a job', completed: false },
    { id: 3, title: 'Forget everything' },
  ])

  function add(text) {
    const maxId = tasks.value.length ? tasks.value[tasks.value.length - 1].id : 0
    const task = { id: maxId + 1, title: text }
    tasks.value.push(task)
  }

  function toggle(index) {
    const task = tasks.value[index]
    task.completed = !task.completed
  }

  function remove(index) {
    tasks.value.splice(index, 1)
  }

  return { tasks, add, toggle, remove }
})
