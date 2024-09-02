<template>
  <router-view></router-view>
  <van-tabbar v-model="active" v-if="showTabbar">
    <van-tabbar-item icon="home-o" to="/home">主页</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/setting">设置</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const active = ref(0)

const showTabbar = computed(() => {
  const router = useRouter()
  return store.getters['user/isLogin'] || (router.currentRoute && router.currentRoute.value.name !== 'login')
})
</script>
<style scoped></style>
