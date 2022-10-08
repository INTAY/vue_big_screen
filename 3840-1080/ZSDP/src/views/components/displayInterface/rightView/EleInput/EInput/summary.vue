<template>
  <div>
    <data-box :countData="counts"></data-box>
  </div>
</template>

<script>
import dataBox from "@/common/dataBox/dataBox";
import request from "@/utils/request";
import { mapState } from "vuex";
import { reSiteInfo } from "@/common/Mixins/launchSite";

export default {
  mixins: [reSiteInfo],
  components: {
    dataBox,
  },
  data() {
    return {
      counts: [
        { text: "实时功率", number: "--", unit: "kW" },
        { text: "充电站容量", number: "--", unit: "kW" },
      ],
    };
  },

  computed: {
    ...mapState(["maps", "keyer"]),
  },
  created() {
    this.powerDataLcation();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async powerDataLcation() {
      let staId = this.maps.StaId;
      let staIds = [];
      staIds.push(staId);
      const { data: res } = await request({
        url: "/property/assetStatus/getPowerBySta",
        method: "post",
        data: staIds,
      });
      for (let i = 0; i < this.counts.length; i++) {
        if (this.counts[i].text == "实时功率") {
          this.counts[i].number = res.realTimePowerSum;
        }
        if (this.counts[i].text == "充电站容量") {
          this.counts[i].number = res.stationCapSum;
        }
      }
    },
    deRefesh() {
      if (this.keyer.aHours == "30:30") {
        this.powerDataLcation();
      }
    },
  },
  watch: {
    //站点传送
    launchId() {
      this.powerDataLcation();
    },
  },
};
</script>

<style lang="less" scoped>
</style>