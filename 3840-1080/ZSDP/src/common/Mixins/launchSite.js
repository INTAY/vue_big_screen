import BUS from "@/utils/bus";

//站点信息更新
export const reSiteInfo = {
    data() {
        return {
            launchId: "",
        }
    },
    mounted() {
        BUS.$on("launch", val => {
            this.launchId = val.id
        })
    }
}