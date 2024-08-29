<template>
  <div class="main">
    <div>
      <van-sidebar v-model="active">
        <van-sidebar-item title="消费管理" to="/consume" />
      </van-sidebar>
    </div>
    <div>
      <router-view> </router-view>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const menus = [
  {
    id: 1,
    title: '消费管理',
    path: '/consume',
  },
  { id: 2, title: '便签', path: '#' },
]

const active = ref(1)
</script>
<style scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
</style>
