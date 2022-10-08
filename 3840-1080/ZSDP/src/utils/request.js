import Vue from 'vue'
import axios from 'axios'
import {refreshToken} from "./refreshToken"

//  const BASEURL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API : process.env.VUE_APP_API;
// const BASEURL = 'http://39.98.156.143:8843'
const BASEURL = 'http://192.168.0.103:8843'
// const BASEURL = 'https://znyd.cevmp.cn:8843';
const service = axios.create({
    baseURL: BASEURL,  
    timeout: 15000,   // 超时
});

service.interceptors.request.use( 
  config => { 
    config.headers['Authorization'] = "Bearer "  +  Vue.cookie.get('token') // 请求头带上token
    return config
  },
  error => {
    console.log(error) 
    return Promise.reject(error)
  });

service.interceptors.response.use(response => {
  
  //token过去自动刷新
  if (response.data && response.data.status == '4444') {
    console.log(response,"response");
    refreshToken()
  }
    return response.data
  },
  error => {

    return Promise.reject(error)
  }
)
//图片验证码地址
service.captchaPath = (params) => {
  return BASEURL + "/authentication/verifiCode/getVerifiCode?uuid=" + params;
}

/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
service.adornUrl = (actionName) => {
  return BASEURL + actionName
}

service.uploadUrl = () => {
  return BASEURL + "/system/file/upload";
}

service.modifyUrl = () => {
  return BASEURL + "/system/pic/update";
}


export default service