import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import * as api from '../services/api'

export const useListStore = defineStore('list', () => {
  const tasks = ref([])

  onMounted(fetchTasks)

  async function fetchTasks() {
    const data = await api.fetchTasks()
    tasks.value = data
  }

  async function add(text) {
    const createdTask = await api.createTask(text)
    tasks.value.push(createdTask)
    // fetchTasks()
  }

  async function toggle(index) {
    const { id, completed } = tasks.value[index]
    const updatedTask = await api.updateTask(id, { completed: !completed })
    tasks.value[index] = updatedTask
  }

  async function remove(index) {
    const { id } = tasks.value[index]
    await api.removeTask(id)
    tasks.value.splice(index, 1)
  }

  return { tasks, add, toggle, remove }
})
