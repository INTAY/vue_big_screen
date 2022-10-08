<template>
  <div class="load">
    <div class="titleBG"></div>
    <times-charts
      id="loads"
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
      textClass: "负荷充电",
      legendData: ["今日", "昨日"],
      yAxisData: "电 力( 万 kWh )\n",
      opDiskData: [],
      
    };
  },
  computed: {
    ...mapState(["login", "keyer","maps"]),
  },
  created() {
    this.LoadCharging();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async LoadCharging() {
      if (this.login.isProve) {
        //省级页面请求
        let regId = this.login.regId;
        const { data: res } = await request(
          `/largeScreen/chargingPower/queryLoadCharging/${regId}/1`
        );
        //形成二维数组
        let todayData = Object.entries(res.jrdl);
        let yesterdayData = Object.entries(res.zrdl);
        //合并
        this.opDiskData.splice(0, 2, todayData, yesterdayData);
      } else if (this.login.isCity) {
        //市级数据请求
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/largeScreen/chargingPower/queryLoadCharging/${regId}/1`
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
        this.LoadCharging();
      }
    },
  },
  watch: {
    initialize() {
      this.LoadCharging();
    },
    refreshData() {
      this.LoadCharging();
    }
  },
};
</script>

<style lang="less" scoped>
.load {
  position: relative;
  height: 471px;
  .titleBG {
    position: absolute;
    top: 4px;
    left: 0px;
    width: 6px;
    height: 23px;
    border-radius: 6px;
    background-color: #1074e3;
  }
}
</style>