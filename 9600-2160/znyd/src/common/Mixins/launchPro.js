import BUS from "@/utils/bus";

export const LoginID = {
    data() {
        return {
            SendRegId: "",
        }
    },
    mounted() {
        BUS.$on("LoginId", val => {
            this.SendRegId = val
        })
    }

}


export const MapsDIY = {
    data() {
        return {
            mapIDPro: "",
        }
    },
    mounted() {
        BUS.$on("mapPro", val => {
            this.mapIDPro = val
        })
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