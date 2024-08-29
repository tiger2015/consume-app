import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import store from '@/store'
const routes = [
  {
    name: 'login',
    path: '/',
    component: Login,
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        name: 'consume',
        path: '/consume',
        component: () => import('@/views/consume/Index.vue'),
      },
    ],
  },
  {
    name: 'consumelist',
    path: '/consume/list',
    component: () => import('@/views/consume/ConsumeList.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 全局路由守卫

router.beforeEach((to, from, next) => {
  let isLogin = store.getters['user/isLogin']
  console.log(to, isLogin)
  if (!isLogin) {
    if (to.path === '/') {
      next()
    } else {
      router.push('/')
    }
  } else {
    next()
  }
})

export default router
