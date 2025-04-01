import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'



const app = createApp(App)

app.use(router)

app.mount('#app')
