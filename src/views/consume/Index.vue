<template>
  <div>
    <van-grid :column-num="2">
      <van-grid-item v-for="menu in menus" :key="menu.path" @click="onClick(menu.path)">
        <van-image :src="menu.img" fit="cover"></van-image>
        <span>{{ menu.label }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const menus = [
  {
    label: '消费查询',
    path: '/consume/list',
    img: '消费记录.png',
  },
  { label: '消费统计', path: '/consume/stat', img: '消费统计.png' },
  {
    label: '添加记录',
    path: '/consume/add',
    img: '添加记录.png',
  },
]

const router = useRouter()

const onClick = (path) => {
  router.push({ path })
}
</script>
<style scoped>
.van-image {
  width: 10vw;
  height: 10vw;
}
</style>
