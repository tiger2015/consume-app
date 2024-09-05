<template>
  <router-view></router-view>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const active = ref(0)
</script>
<style scoped></style>
