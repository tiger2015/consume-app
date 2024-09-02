<template>
  <div class="main">
    <van-sidebar v-model="active">
      <van-sidebar-item title="消费管理" to="/consume" />
    </van-sidebar>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>
<style scoped>
.main {
  margin: 5vw 5vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
}
</style>
