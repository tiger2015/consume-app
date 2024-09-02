import axios from 'axios'
// 手动导入会导致样式丢失
// import { showToast } from 'vant'
import store from '@/store'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
})

instance.interceptors.request.use(
  function (config) {
    if (store && store.state.user) {
      config.headers.Authorization = store.state.user.token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    if (response.status !== 200) {
      return Promise.reject('系统内部错误')
    }
    if (response.config.responseType === 'blob' || response.config.responseType === 'arraybuffer') {
      return response
    }
    if (response.data.code === 200) {
      return response.data
    }
    showToast({
      type: 'fail',
      message: response.data.message,
    })
    return Promise.reject(new Error(response.data.message))
  },
  function (error) {
    console.info('error', error)
    showToast({
      type: 'fail',
      message: error.message,
    })
    return Promise.reject(error)
  }
)


export default instance
