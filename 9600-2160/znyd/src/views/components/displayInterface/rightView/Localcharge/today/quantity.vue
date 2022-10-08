<template>
  <div class="quantity">
        <times-charts
      id="quantity_lod"
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
import { reSiteInfo } from "@/common/Mixins/launchSite";


export default {
  mixins: [reSiteInfo],
  components: {
    TimesCharts
  },
  data() {
    return {
      opDiskData: [],
      legendData:["今日", "昨日"],
    };
  },
  computed: {
    ...mapState(["login", "maps", "keyer"])
  },
  created() {
    this.toDaySite();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async toDaySite() {
      let regId = this.maps.StaId;
      const { data: res } = await request(
        `/largeScreen/equipment/queryAvgChargLineYear/${regId}/2`
      );
      //形成二维数组
        let todayData = Object.entries(res.jrdl);
        let yesterdayData = Object.entries(res.zrdl);
        //合并
        this.opDiskData.splice(0, 2, todayData, yesterdayData);
    },
    deRefesh() {
      if (this.keyer.aHours == "48:49") {
        this.toDaysCount();
      }
    }
  },
  watch: {
    //站点传送
    launchId() {
      this.toDaySite();
    },
  },
};
</script>

<style lang="less" scoped>
.quantity {
  height: 573px;
}
</style>