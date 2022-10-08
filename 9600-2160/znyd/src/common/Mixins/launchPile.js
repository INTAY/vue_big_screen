import BUS from "@/utils/bus";

export const rePlieInfo = {
    data() {
        return {
            acceptId: "",
        }
    },
    mounted() {
        BUS.$on("accept", val => {
            this.acceptId = val.id
        })
    }

}