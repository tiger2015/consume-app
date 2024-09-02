<template>
  <van-dialog v-model:show="visibale" title="消费记录" show-cancel-button>
    <van-form>
      <van-field label="消费时间"></van-field>
      <van-picker title="消费类型"></van-picker>
      <van-field label="金额"></van-field>
    </van-form>
  </van-dialog>
</template>
<script setup>
import { ref } from 'vue'

const visibale = ref(false)

const open = (data) => {
  visibale.value = true
}
defineExpose({
  open,
})
</script>
