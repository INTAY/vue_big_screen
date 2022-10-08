<template>
  <div class="peaking">
    <div class="titleBG"></div>
    <times-charts
      id="titleBG"
      style="width: 1235px;height: 470px;"
      :legend="legendData"
      :opData="opDiskData"
      :textTitle="textClass"
    />
  </div>
</template>

<script>
import TimesCharts from "@/common/BrokenLineGraph/timelineChart";
import request from "@/utils/request";
import { mapState } from "vuex";
import { LoginID,refreshData } from "@/common/Mixins/launchPro";

export default {
  mixins: [LoginID,refreshData],
  components: {
    TimesCharts,
  },
  data() {
    return {
      textClass: "调峰充电",
      legendData: ["今日", "昨日"],
      yAxisData: "电 力( 万 kWh )\n",
      opDiskData: [],
    };
  },
  computed: {
    ...mapState(["login", "keyer"]),
  },
  created() {
    this.peakData();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async peakData() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/largeScreen/chargingPower/queryLoadCharging/${regId}/3`
        );
        //形成二维数组
        let todayData = Object.entries(res.jrdl);
        let yesterdayData = Object.entries(res.zrdl);
        //合并
        this.opDiskData.splice(0, 2, todayData, yesterdayData);
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/largeScreen/chargingPower/queryLoadCharging/${regId}/3`
        );
        //形成二维数组
        let todayData = Object.entries(res.jrdl);
        let yesterdayData = Object.entries(res.zrdl);
        //合并
        this.opDiskData.splice(0, 2, todayData, yesterdayData);
      }
    },
    deRefesh() {
      if (this.keyer.aHours == "49:09") {
        this.peakData();
      }
    },
  },
  watch: {
    SendRegId() {
      this.peakData();
    },
    refreshData() {
      this.peakData();
    },
  },
};
</script>

<style lang="less" scoped>
.peaking {
  position: relative;
  height: 471px;
  .titleBG {
    position: absolute;
    top: -5px;
    left: 0;
    width: 12px;
    height: 46px;
    border-radius: 20px;
    background-color: #10738d;
  }
}
</style>