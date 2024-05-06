import Axios from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  // timeout: 60000 // 请求超时
})

// 请求拦截
axios.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json'
    // application/x-www-form-urlencoded 或 multipart/form-data
    return config
  },
  error => {
    return Promise.error(error)
  }
)

// 相应拦截
axios.interceptors.response.use(
  res => {
    const store = useStore()
    if (res.status >= 200 & res.status < 300) {
      if (res.data instanceof Blob || res.data instanceof ArrayBuffer) {
        return res
      }
      return res.data
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          alert('请求地址不存在')
          break
        default: // 其他错误
          alert('网络开小差了')
      }
      return Promise.reject(error)
    } else {
      if (!navigator.onLine) {
        alert('网络已断开，请检查网络')
      }
    }
  }
)

export default axios
