import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import router from '@/router/index'
import store from '@/store/index'
import 'vant/lib/index.css'
createApp(App).use(router).use(store).mount('#app')
