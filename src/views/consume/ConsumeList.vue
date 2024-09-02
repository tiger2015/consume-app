<template>
  <div>
    <van-nav-bar title="消费详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-form>
      <van-field name="datePicker" label="消费日期" @click="showDatePicker = true" v-model="formData.startDate" />
      <van-popup v-model:show="showDatePicker" position="bottom">
        <van-date-picker :columns-type="['year', 'month']" @cancel="showDatePicker = false" @confirm="confirmDate" />
      </van-popup>
    </van-form>
    <van-pull-refresh v-model="refreshing">
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const showDatePicker = ref(false)

const formData = ref({
  startDate: undefined,
})

const confirmDate = ({ selectedValues }) => {
  formData.value.startDate = `${selectedValues[0]}年${selectedValues[1]}月`
  showDatePicker.value = false
}

const onClickLeft = () => {
  history.back()
}
</script>
<style scoped></style>
