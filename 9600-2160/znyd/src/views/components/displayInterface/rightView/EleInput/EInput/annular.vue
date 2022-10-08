<template>
  <div class="load">
    <div class="titleBG"></div>
    <times-charts
      id="charge"
      style="width: 1200px;height: 587px; marginTop: 77px;"
      :legend="legendData"
      :opData="opDiskData"
    />
  </div>
</template>

<script>
import TimesCharts from "@/common/BrokenLineGraph/timelineChart";
import request from "@/utils/request";
import { mapState } from "vuex";
import { reSiteInfo } from "@/common/Mixins/launchSite";

export default {
  mixins: [reSiteInfo],
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
    ...mapState(["maps", "keyer"]),
  },
  created() {
    this.LoadChargingSite();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async LoadChargingSite() {
      let staID = this.maps.StaId;
      const { data: res } = await request(
        `/charge/hisCurveSta/queryPLineTodayByStaId/${staID}`
      );

      //形成二维数组
      let todayData = Object.entries(res.jrdl);
      let yesterdayData = Object.entries(res.zrdl);
      //合并
      this.opDiskData.splice(0, 2, todayData, yesterdayData);
    },
    deRefesh() {
      if (this.keyer.aHours == "30:30") {
        this.LoadChargingSite();
      }
    },
  },
  watch: {
    //站点传送
    launchId() {
      this.LoadChargingSite();
    },
  },
};
</script>

<style lang="less" scoped>
.load {
  position: relative;
  height: 600px;
}
</style>