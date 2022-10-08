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
    dataBox
  },
  data() {
    return {
      counts: [
        { text: "充电电量", number: 10360, unit: "kWh" },
        { text: "充电金额", number: 6273, unit: "元" },
        { text: "充电次数", number: 10360, unit: "次" }
      ]
    };
  },
  computed: {
    ...mapState(["maps", "keyer"])
  },
  created() {
    this.toDaysCount();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async toDaysCount() {
      let regId = this.maps.StaId;
      const { data: res } = await request(
        `/largeScreen/equipment/queryChargingToday/${regId}/2`
      );
      //循环充电金额、充电电量、充电次数
      this.counts = [
        { text: "充电电量", number: Number(res.dl).toFixed(1), unit: "kWh" },
        { text: "充电金额", number: Number(res.je).toFixed(1), unit: "元" },
        { text: "充电次数", number: Number(res.cs).toFixed(1), unit: "次" },
      ]
      
    },
    //定时刷新
    deRefesh() {
      if (this.keyer.aHours == "49:49") {
        this.toDaysCount();
      }
    }
  },
  watch: {
    //站点传送
    launchId() {
      this.toDaysCount();
    },
  },
};
</script>

<style lang="less" scoped>
</style>