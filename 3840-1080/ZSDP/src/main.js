import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import 'default-passive-events'
import './assets/font/font.css'  //引入字体文件


// vuex 引入
import store from "./store"
//引入Echarts并挂在到原型上去

import Echarts from 'echarts'  
Vue.prototype.$echarts = Echarts
//引入离线地图JS文件
import './plugins/map/js/province/jiangsu'  //引入江苏省地图
import './plugins/map/js/province/beijing'  //引入北京市地图
import './plugins/map/js/province/tianjin'  //引入天津市地图
import './plugins/map/js/province/anhui'  //引入安徽省地图
import './plugins/map/js/province/aomen'  //引入澳门地图
import './plugins/map/js/province/chongqing'  //引入重庆市地图
import './plugins/map/js/province/sichuan'  //引入四川地图
import './plugins/map/js/province/taiwan'  //引入台湾地图
import './plugins/map/js/province/xizang'  //引入西藏地图
import './plugins/map/js/province/yunnan'  //引入云南地图
import './plugins/map/js/province/zhejiang'  //引入浙江地图
import './plugins/map/js/province/fujian'  //引入福建地图
import './plugins/map/js/province/gansu'  //引入甘肃地图
import './plugins/map/js/province/guangxi'  //引入广西地图
import './plugins/map/js/province/guizhou'  //引贵州地图
import './plugins/map/js/province/hainan'  //引入海南地图
import './plugins/map/js/province/hebei'  //引入河北地图
import './plugins/map/js/province/henan'  //引入河南地图
import './plugins/map/js/province/hubei'  //引入湖北地图
import './plugins/map/js/province/hunan'  //引入湖南地图
import './plugins/map/js/province/jiangxi'  //引入江西地图
import './plugins/map/js/province/jilin'  //引入吉林地图
import './plugins/map/js/province/liaoning'  //引入辽宁地图
import './plugins/map/js/province/neimenggu'  //引入内蒙古地图
import './plugins/map/js/province/ningxia'  //引入宁夏地图
import './plugins/map/js/province/qinghai'  //引入青海地图
import './plugins/map/js/province/shandong'  //引入山东地图
import './plugins/map/js/province/shanghai'  //引入上海地图
import './plugins/map/js/province/shanxi'  //引入山西图
import './plugins/map/js/province/shanxi1'  //引入陕西地图
import './plugins/map/js/province/heilongjiang'  //引入黑龙江地图
import './plugins/map/js/province/xinjiang'  //引入新疆地图
import './plugins/extension/bmap/bmap'

//引入自适应插件
import 'lib-flexible'

//引入vue-video-player 实时监控插件
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)


//引入axios并挂在到原型上
import axios from 'axios'
Vue.prototype.$axios = axios

//滚动条加载
import 'vue-happy-scroll/docs/happy-scroll.css'
import  HappyScroll  from 'vue-happy-scroll'
Vue.use(HappyScroll)

//vue 百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: '1s8KIi0aZwZXmDfGzWGIrm11WU5G029u'
})





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
