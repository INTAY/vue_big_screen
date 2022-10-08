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
        { text: "充电电量", number: "--", unit: "kWh" },
        { text: "充电金额", number: "--", unit: "元" },
        { text: "充电次数", number: "--", unit: "次" },
      ],
      regId: "",
    };
  },
  computed: {
    ...mapState(["maps", "keyer"]),
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
      for (let i = 0; i < this.counts.length; i++) {
        if (this.counts[i].text == "充电电量") {
          this.counts[i].number = res.dl;
        }
        if (this.counts[i].text == "充电金额") {
          this.counts[i].number = Math.round( res.je * 100)/100;
        }
        if (this.counts[i].text == "充电次数") {
          this.counts[i].number = res.cs;
        }
      }
    },
    //定时刷新
    deRefesh() {
      if (this.keyer.aHours == "49:49") {
        this.toDaysCount();
      }
    },
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