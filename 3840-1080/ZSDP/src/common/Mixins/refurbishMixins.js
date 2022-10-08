import BUS from "@/utils/bus";

export const refurbish = {
    data() {
        return {
            initialize: "",
        }
    },
    mounted() {
        BUS.$on("initialize", (val) => {
            this.initialize = val;
        });
    }
}

//一二级页面跳转的锚点数据
export const refreshData = {
    data() {
        return {
            refreshData: null
        }
    },
    mounted() {
        BUS.$on("refreshData", (val) => {
            this.refreshData = val;
        });
    }
}