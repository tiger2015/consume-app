<template>
  <van-nav-bar title="添加消费记录" left-text="返回" left-arrow @click-left="onClickLeft" />
  <van-form>
    <van-field v-model="formData.consumeTime" label="消费日期" placeholder="请选择消费日期" @click="showCalendar = true" required :rules="[{ required: true }]"> </van-field>
    <van-calendar v-model:show="showCalendar" @confirm="confirmCalendar" />
    <van-field v-model="formData.consumeTypeName" label="消费类型" placeholder="请选择消费类型" @click="showConsumeTypePicker = true" required :rules="[{ required: true }]">
    </van-field>
    <van-popup v-model:show="showConsumeTypePicker" position="bottom">
      <van-picker :columns="consumeTypes" @confirm="confirmConsumeType" @cancel="showConsumeTypePicker = false" />
    </van-popup>
    <van-field v-model="formData.amount" label="金额" required :rules="[{ required: true }]"> </van-field>
    <van-field v-model="formData.payTypeName" label="支付方式" placeholder="请选择支付方式" @click="showPayTypePicker = true" required :rules="[{ required: true }]"> </van-field>
    <van-popup v-model:show="showPayTypePicker" position="bottom">
      <van-picker :columns="payTypes" @confirm="confirmPayType" @cancel="showPayTypePicker = false" />
    </van-popup>
    <van-field v-model="formData.remark" label="备注" placeholder="请输入备注" type="textarea" maxlength="50" auto-size show-word-limit rows="2"> </van-field>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { formatDate } from '@/utils/common'
import { listConsumeType, listPayType } from '@/api/consume'

const showCalendar = ref(false)

const formData = ref({
  consumeTime: undefined,
  consumeType: undefined,
  consumeTypeName: undefined,
  amount: 0,
  payType: undefined,
  payTypeName: undefined,
  remark: '',
})

const showConsumeTypePicker = ref(false)
const consumeTypes = ref([])

const showPayTypePicker = ref(false)
const payTypes = ref([])

onMounted(() => {
  listConsumeType().then((res) => {
    console.log(res)
    res.forEach((item) => {
      consumeTypes.value.push({ text: item.name, value: item.id })
    })
  })

  listPayType().then((res) => {
    res.forEach((item) => {
      payTypes.value.push({ text: item.name, value: item.id })
    })
  })
})

const confirmCalendar = (value) => {
  console.log(value)
  showCalendar.value = false
  formData.value.consumeTime = formatDate(value)
}

const confirmConsumeType = ({ selectedValues, selectedIndexes }) => {
  console.log(selectedValues, selectedIndexes)
  showConsumeTypePicker.value = false
  formData.value.consumeType = selectedValues[0]
  formData.value.consumeTypeName = consumeTypes.value[selectedIndexes[0]].text
}

const confirmPayType = ({ selectedValues, selectedIndexes }) => {
  showPayTypePicker.value = false
  formData.value.payType = selectedValues[0]
  formData.value.payTypeName = payTypes.value[selectedIndexes[0]].text
}

const onClickLeft = () => {
  history.back()
}
</script>

<style scoped>
.van-form {
  margin-top: 10vh;
}
</style>
