<template>
  <div class="quantity">
    <times-charts
      id="to_line"
      style="width: 474px;height: 320px;marginTop:30px;"
      :legend="legendData"
      :opData="opDiskData"
    />
  </div>
</template>

<script>
import TimesCharts from "@/common/BrokenLineGraph/timelineChart";
import request from "@/utils/request";
import { mapState } from "vuex";
import BUS from "../../../../../../utils/bus";


export default {
  components: {
    TimesCharts
  },
  data() {
    return {
      legendData: ["今日", "昨日"],
      yAxisData: "电 力( 万 kWh )\n",
      opDiskData: [],
      plieID: "", //监听标记
    };
  },
  computed: {
    ...mapState(["controls", "keyer"]),
  },
  created() {
    this.toDayPlie();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
    //监听标记
    BUS.$on("skip", (val) => {
      this.plieID = val;
    });
  },
  methods: {
    async toDayPlie() {
      let regId = this.controls.PlieId;
      
      const { data: res } = await request(
        `/largeScreen/equipment/queryAvgChargLineYear/${regId}/3`
      );
      //形成二维数组
      let todayData = Object.entries(res.jrdl);
      let yesterdayData = Object.entries(res.zrdl);
      //合并
      this.opDiskData.splice(0, 2, todayData, yesterdayData);
    },
    deRefesh() {
      if (this.keyer.aHours == "48:09") {
        this.toDayPlie();
      }
    },
  },
  watch: {
    plieID() {
      this.toDayPlie()
    }
  }
};
</script>

<style lang="less" scoped>
.quantity {
  height: 480px;
}
</style>