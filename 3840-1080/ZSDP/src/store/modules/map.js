const map = {
    //数据
    state: {
        isCenter: '',
        StaId:'',  //站点ID
        topData: [],
        markersData: [],
        searchMessage: '',
        cityData:[],
        info:'',
        SearchCenter: null,
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
        setCityData(state,path) {
            state.cityData = path
        },
        setSearchCenter(state,path) {
            state.SearchCenter = path
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