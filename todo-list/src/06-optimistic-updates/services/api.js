const BASE_URL = 'http://localhost:3000/tasks'

export async function fetchTasks() {
  try {
    const response = await fetch(BASE_URL)
    if (!response.ok) {
      throw new Error('Something went wrong...')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function createTask(title) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })
    if (!response.ok) {
      throw new Error('Something went wrong...')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function updateTask(id, patch) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patch),
    })
    if (!response.ok) {
      throw new Error('Something went wrong...')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function removeTask(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error('Something went wrong...')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
