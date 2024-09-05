<template>
  <van-swipe-cell>
    <van-cell-group>
      <template #default>
        <div class="content">
          <div>
            <span>{{ data.consumeType }}</span>
          </div>
          <div>
            {{ data.amount.toFixed(2) }}
          </div>
          <div>{{ data.consumeTime }} {{ data.payType }}</div>
        </div>
      </template>
    </van-cell-group>
    <template #right>
      <van-button square type="danger" text="删除" @click="handleDel(data.id)" />
    </template>
  </van-swipe-cell>
</template>

<script setup>
import { defineEmits } from 'vue'

const props = defineProps({
  data: {
    required: true,
    type: Object,
  },
  index: {
    required: false,
    type: Number,
    default: 1,
  },
})

const emits = defineEmits(['remove'])

const handleDel = (id) => {
  emits('remove', id)
}
</script>
<style scoped lang="less">
.content {
  display: grid;
  grid-template-columns: 40vw 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  background-color: rgb(154, 238, 146);
  :first-child {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
    font-size: 5vw;
  }
  :nth-child(2) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    font-size: 5vw;
  }
  :nth-child(3) {
    grid-row-start: 3;
    grid-column-start: 2;
    grid-column-end: 3;
    font-size: 4vw;
  }
}

.van-button {
  height: 100%;
}
</style>
