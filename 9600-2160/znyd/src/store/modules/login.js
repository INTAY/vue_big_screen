const login = {
//数据
state: {
    isProve: false,
    isCity: false,
    isSite: false,
    fullName: '',
    cityName: '',
    regId: '',
    cityRegId:'',//省级跳转市级页面ID
    level: null,
    
},
//类似于组件中的计算属性
getters:{},
//同步方法操作
mutations: {
    setProve(state, path) {
        state.isProve = path
    },
    setCity(state,path) {
        state.isCity = path
    },
    setFullName(state,path) {
        state.fullName = path
    },
    setRegId(state,path) {
        state.regId = path
    },
    setCityName(state,path) {
        state.cityName = path
    },
    setCityRegId(state,path) {
        state.cityRegId = path
    },
    setSite(state,path) {
        state.isSite = path
    },
    setLevel(state,path) {
        state.level = path
    }
},
//异步
actions: {},
}
export default login