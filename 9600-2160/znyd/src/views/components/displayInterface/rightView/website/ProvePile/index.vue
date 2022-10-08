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
    this.allSite();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async allSite() {
      let regId = this.login.regId;
      const { data: res } = await request(
        `/largeScreen/equipment/getStaCount/${regId}`
      );
      this.countSite = [
        { name: "充电站总数", amount: res.sumSite, unit: "座" },
        { name: "城市充电站数", amount: res.sumCity, unit: "座" },
        { name: "高速快充电站", amount: res.sumHigh, unit: "座" }
      ]
    },
    //定时刷新
    deRefesh() {
      if (this.keyer.punctuality == "07:02:00") {
        this.allSite();
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
  border: 1px solid #2c63b1;
  background-color: rgba(6, 50, 105, 0.6);
  box-sizing: border-box;
}
</style>