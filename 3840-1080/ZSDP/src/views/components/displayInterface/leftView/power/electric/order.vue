<template>
  <div class="orders">
    <div class="titleBG"></div>
    <times-charts
      id="orders"
      style="width: 496px;height: 238px;"
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
import { refurbish,refreshData } from "@/common/Mixins/refurbishMixins";

export default {
  mixins: [refurbish,refreshData],
  components: {
    TimesCharts,
  },
  data() {
    return {
      textClass: "有序充电",
      legendData: ["今日", "昨日"],
      yAxisData: "电 力( 万 kWh )\n",
      opDiskData: [],
    };
  },
  computed: {
    ...mapState(["login", "keyer"]),
  },
  created() {
    this.OrderlyCharging();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async OrderlyCharging() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/largeScreen/chargingPower/queryLoadCharging/${regId}/2`
        );
        //形成二维数组
        let todayData = Object.entries(res.jrdl);
        let yesterdayData = Object.entries(res.zrdl);
        //合并
        this.opDiskData.splice(0, 2, todayData, yesterdayData);
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/largeScreen/chargingPower/queryLoadCharging/${regId}/2`
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
        this.OrderlyCharging();
      }
    },
  },
  watch: {
    initialize() {
      this.OrderlyCharging();
    },
    // 跳转模块监听
    refreshData() {
      this.OrderlyCharging();
    }
  },
};
</script>

<style lang="less" scoped>
.orders {
  position: relative;
  height: 471px;
  .titleBG {
    position: absolute;
    top: 4px;
    left: 0;
    width: 6px;
    height: 23px;
    border-radius: 6px;
    background-color: #1074e3;
  }
}
</style>