import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/auth/index.js'
import './routes/guards.js'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
