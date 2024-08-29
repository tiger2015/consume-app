import { createStore } from 'vuex'
import userInfo from '@/store/modules/userInfo'
const store = createStore({
  modules: {
    user: userInfo,
  },

  state() {
    return {}
  },
  actions: {},
  mutations: {},
  getters: {},
})

export default store
