// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './01-single-component/AppOptions.vue'
// import router from './router'

const app = createApp(App)

app.use(createPinia())
// app.use(router)

app.mount('#app')
