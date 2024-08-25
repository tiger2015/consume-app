import axios from 'axios'
import { showNotify } from 'vant'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
})

instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {},
  function (error) {
    showNotify({
      type: 'danger',
      message: error,
    })
    return Promise.reject(error)
  }
)

export default instance
