const keyer = {
    //数据
    state: {
        punctuality:"",  //准点，
        aHours:'',
        Min:'',
        Sec:'',
    },
    //类似于组件中的计算属性
    getters: {},
    //同步方法操作
    mutations: {
        setPunctuality(state,path) {
            state.punctuality = path
        },
        setHour(state,path) {
            state.aHours = path
        },
        setMin(state,path) {
            state.Min = path
        },
        setSec(state,path) {
            state.Sec = path
        },
    },
    //异步
    actions: {},
}
export default keyer