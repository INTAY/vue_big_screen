<template>
  <div class="quantity">
    <times-charts
      id="to_quantity"
      style="width: 1219px;height: 573px;marginTop:70px;"
      :legend="legendData"
      :opData="opDiskData"
    />
  </div>
</template>

<script>
import TimesCharts from "@/common/BrokenLineGraph/timelineChart";
import request from "@/utils/request";
import { mapState } from "vuex";
import { rePlieInfo } from "@/common/Mixins/launchPile";

export default {
  mixins: [rePlieInfo],
  components: {
    TimesCharts,
  },
  data() {
    return {
      opDiskData: [],
      legendData: ["今日", "昨日"],
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
    //枪传送
    acceptId() {
      this.toDayPlie();
    },
  },
};
</script>

<style lang="less" scoped>
.quantity {
  height: 573px;
}
</style>