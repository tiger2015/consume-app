import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import router from '@/router/index'
import { Notify } from 'vant'
import store from '@/store/index'

createApp(App).use(router).use(Notify).use(store).mount('#app')
