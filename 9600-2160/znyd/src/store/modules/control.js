const control = {
    //数据
    state: {
        CheckStyle: null,
        isStatus:'',
        isWork: null,
        isFault: null,
        PlieId:'',  //设备ID
        stakeId:'',//桩ID
        firstCheck: false,  //第一次选中
        current:0, //控制台选中的样式

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
        setFirstCheck(state,path) {
            state.firstCheck = path
        },
        setCurrent(state,path) {
            console.log("path",path);
            state.current = path
        },
    },
    //异步
    actions: {},
}
export default control