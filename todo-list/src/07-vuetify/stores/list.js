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
    try {
      const tempTask = { id: 'temp', title: text, temp: true }
      tasks.value.push(tempTask)

      const createdTask = await api.createTask(text)
      tasks.value.pop()
      tasks.value.push(createdTask)
    } catch {
      tasks.value.pop()
    }
  }

  async function toggle(index) {
    const tempTask = tasks.value[index]

    try {
      tasks.value[index] = { ...tempTask, completed: !tempTask.completed }

      const { id, completed } = tasks.value[index]
      await api.updateTask(id, { completed })
    } catch {
      tasks.value[index] = tempTask
    }
  }

  async function remove(index) {
    const tempTask = tasks.value[index]

    try {
      tasks.value.splice(index, 1)

      await api.removeTask(tempTask.id)
    } catch {
      tasks.value.splice(index, 0, tempTask)
    }
  }

  return { tasks, add, toggle, remove }
})
