<template>
  <div class="pile">
    <!-- 引入充电站模块 -->
    <stationCounts :counts="countSite" />
  </div>
</template>

<script>
import stationCounts from "@/common/siteCounts/sites";
import request from "@/utils/request";
import { mapState } from "vuex";
export default {
  components: {
    //注册引用的模块
    stationCounts
  },
  data() {
    return {
      countSite: []
    };
  },
  computed: {
    ...mapState(["login", "keyer"])
  },
  created() {
    this.allCitySite();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async allCitySite() {
      let regId = this.login.cityRegId || this.login.regId;

      const { data: res } = await request(
        `/largeScreen/equipment/getStaCount/${regId}`
      );
      this.countSite = [
        { name: "充电站总数", amount: res.sumSite || "0", unit: "座" },
        { name: "直流设施数", amount: res.sumZL || "0", unit: "个" },
        { name: "交流设施数", amount: res.sumJL || "0", unit: "个" }
      ]
    },
    //实时刷新 30s刷新一次
    deRefesh() {
      if (this.keyer.punctuality == "07:02:00") {
        this.allCitySite();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.pile {
  position: relative;
  width: 100%;
  height: 736px;
  padding: 73px 0px 0px 81px;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);
  box-sizing: border-box;
}
</style>