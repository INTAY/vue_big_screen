<template>
  <div>
    <data-box :countData="counts"></data-box>
  </div>
</template>

<script>
import dataBox from "@/common/dataBox/dataBox";
import request from "@/utils/request";
import { mapState } from "vuex";

import { LoginID, refreshData } from "@/common/Mixins/launchPro";

export default {
  mixins: [LoginID, refreshData],
  components: {
    dataBox,
  },
  data() {
    return {
      counts: [
        { text: "实时功率", number: 103, unit: "万kWh" },
        { text: "设备总功率", number: 5270, unit: "万kWh" },
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
        //数据赋值
        this.counts = [
          { text: "实时功率", number: res.realTimePowerSum, unit: "万kWh" },
          { text: "设备总功率", number: res.devPowerSum, unit: "万kWh" },
        ];
      } else if (this.login.isCity) {
        let id = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/property/assetStatus/getPowerByReg/${id}`
        );
        //数据赋值
        this.counts = [
          { text: "实时功率", number: res.realTimePowerSum, unit: "万kWh" },
          { text: "设备总功率", number: res.devPowerSum, unit: "万kWh" },
        ];
      }
    },
    deRefesh() {
      if (this.keyer.aHours == "59:59") {
        this.powerData();
      }
    },
  },
  watch: {
    SendRegId() {
      this.powerData();
    },
    refreshData() {
      this.powerData();
    },
  },
};
</script>

<style lang="less" scoped>
</style>