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
    redirect: '/consume',
    children: [
      {
        name: 'consume',
        path: '/consume',
        component: () => import('@/views/consume/Index.vue'),
      },
    ],
  },
  {
    name: 'setting',
    path: '/setting',
    component: () => import('@/views/Setting.vue'),
  },
  {
    name: 'consumelist',
    path: '/consume/list',
    component: () => import('@/views/consume/ConsumeList.vue'),
  },
  {
    name: 'consumestat',
    path: '/consume/stat',
    component: () => import('@/views/consume/ConsumeStat.vue'),
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
  // 用户未登录
  if (!isLogin && to.name !== 'login') {
    next({ name: 'login' })
  } else if (isLogin && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
