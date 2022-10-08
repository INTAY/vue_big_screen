import Vue from 'vue'
import axios from 'axios'


// const BASEURL = 'http://192.168.171.110:8843'
export const BASEURL = IPCONFIG_BASEURL;
const service = axios.create({
    baseURL: BASEURL,  
    timeout: 20000,   // 超时
});

service.interceptors.request.use( 
  config => { 
    config.headers['Authorization'] = "Bearer "  +  Vue.cookie.get('token') // 请求头带上token
    return config
  },
  error => {
    return Promise.reject(error)
  });

service.interceptors.response.use(response => {
  //token过去自动刷新
  if (response.data && response.data.status == '4444') {
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