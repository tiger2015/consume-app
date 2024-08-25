import { createStore } from 'vuex'
import userInfo from './user/userInfo'
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
