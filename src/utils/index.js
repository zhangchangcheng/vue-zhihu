import { Toast } from 'mint-ui'
import Cookies from 'js-cookie'
import http from '../api/http'

// 表单提交
const formHeaders = { 'Content-Type': 'application/x-www-form-urlencoded' }

// 数据格式转换
const qs = {
  // obj 转 x-www-form-urlencoded
  stringify(obj) {
    let rs = ''
    Object.keys(obj).forEach(key => {
      rs = (rs && (rs + '&')) + key + '=' + obj[key]
    })
    return encodeURI(rs)
  }
}



export { formHeaders, qs }
