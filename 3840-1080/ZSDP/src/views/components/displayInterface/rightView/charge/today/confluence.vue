<template>
  <div>
    <data-box :countData="counts"></data-box>
  </div>
</template>

<script>
import dataBox from "@/common/dataBox/dataBox";
import request from "@/utils/request";
import { mapState } from "vuex";
import { refurbish,refreshData } from "@/common/Mixins/refurbishMixins";


export default {
  mixins: [refurbish,refreshData],
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
    ...mapState(["login", "keyer"])
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
      if (this.login.isProve) {
        //省级页面
        let regId = this.login.regId;
        const { data: res } = await request(
          `/largeScreen/equipment/queryChargingToday/${regId}/1`
        );
        for (let i = 0; i < this.counts.length; i++) {
          if (this.counts[i].text == "充电电量") {
            this.counts[i].number = Number(res.dl).toFixed(1);
          }
          if (this.counts[i].text == "充电金额") {
            this.counts[i].number = Number(res.je).toFixed(1);
          }
          if (this.counts[i].text == "充电次数") {
            this.counts[i].number = Number(res.cs).toFixed(1);
          }
        }
      } else if (this.login.isCity) {
        //市级页面
        let regId = this.login.cityRegId || this.login.regId;

        const { data: res } = await request(
          `/largeScreen/equipment/queryChargingToday/${regId}/1`
        );
        for (let i = 0; i < this.counts.length; i++) {
          if (this.counts[i].text == "充电电量") {
            this.counts[i].number = Number(res.dl).toFixed(1);
          }
          if (this.counts[i].text == "充电金额") {
            this.counts[i].number = Number(res.je).toFixed(1);
          }
          if (this.counts[i].text == "充电次数") {
            this.counts[i].number = Number(res.cs).toFixed(1);
          }
        }
      }
    },
    deRefesh() {
      if (this.keyer.aHours == "59:59") {
        this.toDaysCount();
      }
    }
  },
  watch: {
    initialize() {
      this.toDaysCount();
    },
    refreshData() {
      this.toDaysCount();
    }
  },
};
</script>

<style lang="less" scoped>
</style>