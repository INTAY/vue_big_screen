const control = {
    //数据
    state: {
        CheckStyle: null,
        isStatus:'',
        isWork: null,
        isFault: null,
        PlieId:'',  //设备ID
        stakeId:'',//桩ID
    },
    //类似于组件中的计算属性
    getters: {},
    //同步方法操作
    mutations: {
        setCheckStyle(state, path) {
            state.CheckStyle = path
        },
        setStatus(state, path) {
            state.isStatus = path
        },
        setIsWork(state, path) {
            state.isWork = path
        },
        setIsFault(state, path) {
            state.isFault = path
        },
        setPliId(state, path) {
            state.PlieId = path
        },
        setStakeId(state, path) {
            state.stakeId = path
        },
    },
    //异步
    actions: {},
}
export default control