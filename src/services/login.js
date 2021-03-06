import Taro, {Component, Config} from '@tarojs/taro'
import {stringify} from 'qs';
import CryptoJS from "crypto-js";
import '@tarojs/async-await'

const request = Taro.request;
const baseUrl = 'http://192.168.55.7:4040'

const accountLogin = async ({url, header, method = 'GET', params, callback}) => {
  params.password = CryptoJS.AES.encrypt(params.password, 'HuoTu0KeYForAe3').toString()
  return await request({
    method: 'POST',
    url: `${baseUrl}${url}`,
    header: {
      'content-type': 'application/json' // 默认值
    },
    data: params,
  })
}

export {accountLogin}

