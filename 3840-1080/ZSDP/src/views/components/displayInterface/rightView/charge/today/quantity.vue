<template>
  <div class="quantity">
    <times-charts
      id="times"
      style="width: 474px;height: 320px;"
      :legend="legendData"
      :opData="opDiskData"
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
      legendData: ["今日", "昨日"],
      yAxisData: "电 力( 万 kWh )\n",
      opDiskData: [],
    };
  },
  computed: {
    ...mapState(["login", "keyer"]),
  },
  created() {
    this.toDaysline();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async toDaysline() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/charge/hisCurveRegion/queryChargLineTodayByRegId/${regId}`
        );
        console.log(res,"res111111");
        //形成二维数组
        let todayData = Object.entries(res.jrdl);
        let yesterdayData = Object.entries(res.zrdl);
        //合并
        this.opDiskData.splice(0, 2, todayData, yesterdayData);
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/charge/hisCurveRegion/queryChargLineTodayByRegId/${regId}`
        );
        //形成二维数组
        let todayData = Object.entries(res.jrdl);
        let yesterdayData = Object.entries(res.zrdl);
        this.opDiskData.splice(0, 2, todayData, yesterdayData);
      }
    },
    deRefesh() {
      if (this.keyer.aHours == "59:59") {
        this.toDaysline();
      }
    },
  },
  watch: {
    initialize() {
      this.toDaysline();
    },
    refreshData() {
      this.toDaysline();
    }
  },
};
</script>

<style lang="less" scoped>
.quantity {
  margin-top: 25px;
}
</style>