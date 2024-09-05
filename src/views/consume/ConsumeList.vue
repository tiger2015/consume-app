<template>
  <van-nav-bar title="消费详情" left-text="返回" left-arrow @click-left="onClickLeft" />
  <van-form>
    <van-field readonly label="选择年月" place-holder="请选择年月" @click="showDatePicker = true" v-model="queryDateString"> </van-field>
    <van-popup v-model:show="showDatePicker" :style="{ width: '60%' }">
      <van-date-picker v-model="formData.queryDate" title="选择年月" :columns-type="['year', 'month']" @confirm="confirmDate" @cancel="showDatePicker = false" />
    </van-popup>
  </van-form>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="loadData" :offset="100">
    <consume-item :data="record" :index="index" v-for="(record, index) in consumeList" :key="record.id" @remove="handelDel"></consume-item>
  </van-list>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue'
import EditConsumeDialog from '@/components/EditConsumeDialog.vue'
import { listConsume } from '@/api/consume'
import store from '@/store'
import { getDaysInMonth } from '@/utils/common'
import ConsumeItem from '@/components/ConsumeItem.vue'

const showDatePicker = ref(false)

const formData = ref({
  queryDate: [],
  pageNum: 0,
  pageSize: 10,
  totalPage: 0,
  total: 0,
})

const consumeList = ref([])

const loading = ref(false)
const finished = ref(false)
const queryDateString = computed(() => {
  if (formData.value.queryDate.length === 0) return ''
  return `${formData.value.queryDate[0]}年${formData.value.queryDate[1]}月`
})

onMounted(() => {
  let now = new Date()
  formData.value.queryDate.push(now.getFullYear() + '')
  if (now.getMonth() > 8) {
    formData.value.queryDate.push(`${now.getMonth() + 1}`)
  } else {
    formData.value.queryDate.push(`0${now.getMonth() + 1}`)
  }
  loadData()
})

const resetFormData = () => {
  formData.value.pageNum = 0
  formData.value.total = 0
  formData.value.totalPage = 0
  finished.value = false
  loading.value = true
  consumeList.value = []
}

const confirmDate = ({ selectedValues }) => {
  formData.value.queryDate = [...selectedValues]
  showDatePicker.value = false
  // 清除查询结果
  resetFormData()
  loadData()
}

const onClickLeft = () => {
  history.back()
}

const queryConsume = () => {
  listConsume(params).then((res) => {
    console.log(res)
    formData.value.pageNum = res.pageNum
    formData.value.pageSize = res.pageSize
    formData.value.totalPage = res.totalPage
    formData.value.total = res.total
    consumeList.value.push(...res.list)
  })
}

const loadData = () => {
  if (finished.value) {
    loading.value = false
    return
  }
  let params = {
    pageSize: formData.value.pageSize,
    pageNum: formData.value.pageNum + 1,
    startTime: undefined,
    endTime: undefined,
    createBy: store.state.user.username,
  }
  params.startTime = `${formData.value.queryDate[0]}-${formData.value.queryDate[1]}-01`
  let days = getDaysInMonth(Number(formData.value.queryDate[0]), Number(formData.value.queryDate[1]) - 1)
  params.endTime = `${formData.value.queryDate[0]}-${formData.value.queryDate[1]}-${days}`
  listConsume(params).then((res) => {
    formData.value.pageNum = res.pageNum
    formData.value.pageSize = res.pageSize
    formData.value.totalPage = res.totalPage
    formData.value.total = res.total
    consumeList.value.push(...res.list)
    loading.value = false
    if (res.pageNum === res.totalPage) {
      finished.value = true
    }
  })
}

const handelDel = (id) => {}
</script>
<style scoped></style>
