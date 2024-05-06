import axios from '../intercept.js'

export default {
  // 获取用户路由
  getRoutes() {
    return axios.request({
      url: '/permission/getRouters',
      method: 'get'
    })
  },
}