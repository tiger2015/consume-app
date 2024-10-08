const userInfo = {
  namespaced: true,
  state() {
    return {
      username: undefined,
      token: undefined,
      avatar: undefined,
    }
  },
  actions: {},
  mutations: {
    setUserInfo(state, userInfo) {
      state.username = userInfo.username
      state.token = userInfo.token
      state.avatar = userInfo.avatar
    },
    resetUserInfo(state) {
      state.username = undefined
      state.token = undefined
      state.avatar = undefined
    },
  },
  getters: {
    isLogin(state) {
      return state.token != undefined
    },
  },
}

export default userInfo
