const map = {
    //数据
    state: {
        isCenter: '',
        proveData: [],
        StaId:'',  //站点ID
        topData: [],
        markersData: [],
        searchMessage: '',
        hotMapData:[],
        mapLat: '',
        mapLng: '',
        isMark:null,
    },
    //类似于组件中的计算属性
    getters: {},
    //同步方法操作
    mutations: {
        setCenter(state, path) {
            state.isCenter = path
        },
        setProveData(state, path) {
            state.proveData = path
        },
        setTopData(state, path) {
            state.topData = path
        },
        setMarkersData(state, path) {
            state.markersData = path
        },
        setStaId(state, path) {
            state.StaId = path
        },
        setSearchMessage(state,path) {
            state.searchMessage = path
        },
        setHotMapData(state,path) {
            state.hotMapData = path
        },
        setMapLat(state,path) {
            state.mapLat = path
        },
        setMapLng(state,path) {
            state.mapLng = path
        },
        setIsMark(state,path) {
            state.isMark = path
        },
        
    },
    //异步
    actions: {},
}
export default map