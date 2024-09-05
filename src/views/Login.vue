<template>
  <van-form @submit="sumbitForm">
    <van-cell-group inset>
      <van-field v-model="formData.username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="formData.password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
    </van-cell-group>
    <div style="margin: 2vw">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
</template>

<script setup>
import { ref, toRaw } from 'vue'
import { login } from '@/api/user'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()

const formData = ref({
  username: undefined,
  password: undefined,
})

const store = useStore()

const sumbitForm = async () => {
  let result = await login(toRaw(formData.value))
  if (result) {
    // 登录成功
    store.commit('user/setUserInfo', result)
    router.push({ path: '/home' })
  } else {
  }
}
</script>

<style lang="less" scoped>
.van-form {
  position: absolute;
  top: 30%;
  margin: 5vw 5vh;
}
</style>
