import Taro, {Component, Config} from '@tarojs/taro'
import {stringify} from 'qs';
import CryptoJS from "crypto-js";
import '@tarojs/async-await'

const request = Taro.request;
const baseUrl = 'http://192.168.55.7:4040'

const getStudyByStatus = async (params) => {
  debugger
  return await request({
    method: 'GET',
    url: `${baseUrl}/api/studies/status?${stringify(params)}`,
    header: {
      'content-type': 'application/json' // 默认值
    },
  })
}

export {getStudyByStatus}
