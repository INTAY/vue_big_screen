import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//数据持久化插件注册
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
    storage: window.sessionStorage
})

//引入模块
import login from "./modules/login"
import maps from "./modules/map"
import keyer from "./modules/timer"
import controls from "./modules/control"

export default new Vuex.Store({
//数据
state: {},
//类似于组件中的计算属性
getters:{},
//同步方法操作
mutations: {},
//异步
actions: {},
//分块管理
modules: {
    login,
    maps,
    keyer,
    controls,
},
//持久化
plugins:  [vuexLocal.plugin]
})