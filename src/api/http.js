import axios from 'axios'
import { Toast, Indicator } from 'mint-ui'
import router from '../router'
import { qs } from '../utils'

const http = axios.create({
  baseURL: ''
})

// 请求-拦截器
http.interceptors.request.use(req => {
  // 表单提交数据格式处理
  if (req.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    req.data = qs.stringify(req.data)
  }
  return req
}, err => Promise.reject(err))

// 返回-拦截器
http.interceptors.response.use(res => {
  if (res.data.err !== 0) {
    Toast(res.data.msg)
  }
  return res
}, err => {
  Toast('Network is busy now!')
  Indicator.close()
  return Promise.reject(err)
})

export default http
