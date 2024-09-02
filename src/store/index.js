import { createStore } from 'vuex'
import userInfo from '@/store/modules/userInfo'
import createPersistedState from 'vuex-persistedstate'
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
  plugins: [createPersistedState({
    key: 'user',
    storage: window.localStorage,
  })]
})

export default store
