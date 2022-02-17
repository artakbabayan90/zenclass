import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import store from "@/store";

const app = createApp(App)
app.use(store).mount('#app')
