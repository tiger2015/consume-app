<template>
  <div>
    <van-nav-bar title="消费统计" left-text="返回" left-arrow @click-left="onClickLeft" />
  </div>
</template>
<script setup>
const onClickLeft = () => {
  history.back()
}
</script>

<style scoped></style>
