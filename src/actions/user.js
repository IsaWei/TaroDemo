import {LOGIN} from '../constants/user'
import {login} from '../services/login'
import Taro from "@tarojs/taro";

export const accountLogin = (params) => {
  // 调接口获得user数据,需要异步调用
  login({
    url: '/api/login',
    params,
    callback: (res) => {
      console.log(res)
      Taro.atMessage({
        'message': `登陆${res.statusCode === 200 ? '成功' : '失败'}`,
        'type': `${res.statusCode === 200 ? 'success' : 'warning'}`,
      })
      Taro.navigateTo({url: '/pages/index/todo'})
      debugger
      return {
        user: res.data,
        type: LOGIN
      }
    }
  })
  return {
    user: {},
    type: LOGIN
  }
}

