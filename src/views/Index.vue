<template>
  <router-view></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/home">主页</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/setting">设置</van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>
<style scoped></style>
