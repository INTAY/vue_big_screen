<template>
  <div>
    <data-box :countData="counts"></data-box>
  </div>
</template>

<script>
import dataBox from "@/common/dataBox/dataBox";
import request from "@/utils/request";
import { mapState } from "vuex";
import {refurbish,refreshData} from "@/common/Mixins/refurbishMixins"
export default {
  mixins:[refurbish,refreshData],
  components: {
    dataBox,
  },
  data() {
    return {
      counts: [
        { text: "实时功率", number: 0, unit: "万kWh" },
        { text: "设备总功率", number: 0, unit: "万kWh" },
      ],
    };
  },
  computed: {
    ...mapState(["login", "keyer"]),
  },
  created() {
    this.powerData();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async powerData() {
      if (this.login.isProve) {
        let id = this.login.regId;
        const { data: res } = await request(
          `/property/assetStatus/getPowerByReg/${id}`
        );

        for (let i = 0; i < this.counts.length; i++) {
          if (this.counts[i].text == "实时功率") {
            this.counts[i].number = Math.floor(res.realTimePowerSum);
          }
          if (this.counts[i].text == "设备总功率") {
            this.counts[i].number = Math.floor(res.devPowerSum);
          }
        }
      } else if (this.login.isCity) {
        let id = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/property/assetStatus/getPowerByReg/${id}`
        );
        for (let i = 0; i < this.counts.length; i++) {
          if (this.counts[i].text == "实时功率") {
            this.counts[i].number = Math.floor(res.realTimePowerSum);
          }
          if (this.counts[i].text == "设备总功率") {
            this.counts[i].number = Math.floor(res.devPowerSum);
          }
        }
      }
    },
    deRefesh() {
      if (this.keyer.aHours == "59:59") {
        this.powerData();
      }
    },
  },
  watch: {
    initialize() {
      this.powerData();
    },
    refreshData() {
      this.powerData();
    }
  },
};
</script>

<style lang="less" scoped>
</style>