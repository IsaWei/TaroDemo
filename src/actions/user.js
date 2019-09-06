import {CURRENT_USER, LOGIN} from '../constants/user'
import {accountLogin} from '../services/login'
import Taro from "@tarojs/taro";

export const login = (params, callback) => {
  // 调接口获得user数据
  accountLogin({
    url: '/api/login',
    params,
  }).then(res => {
    debugger
    Taro.atMessage({
      'message': `登陆${res.statusCode === 200 ? '成功' : '失败'}`,
      'type': `${res.statusCode === 200 ? 'success' : 'warning'}`,
    })
    localStorage.setItem('TARO_USER', JSON.stringify(res.data.data))
    if (callback) callback(res.data.data)
  })
}

export const saveCurrentUser = (currentUser) => {
  console.log('--currentUser in action--', currentUser)
  return {
    currentUser,
    type: CURRENT_USER
  }
}

