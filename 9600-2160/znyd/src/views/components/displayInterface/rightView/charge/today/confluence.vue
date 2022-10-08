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
      counts: [],
    };
  },
  computed: {
    ...mapState(["login", "keyer"]),
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
        let regId = this.login.regId;
        const { data: res } = await request(
          `/largeScreen/equipment/queryChargingToday/${regId}/1`
        );
        this.counts = [
          { text: "充电电量", number: Number(res.dl).toFixed(1), unit: "kWh" },
          { text: "充电金额", number: Number(res.je).toFixed(1), unit: "元" },
          { text: "充电次数", number: Number(res.cs).toFixed(1), unit: "次" },
        ];
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;

        const { data: res } = await request(
          `/largeScreen/equipment/queryChargingToday/${regId}/1`
        );
        this.counts = [
          { text: "充电电量", number: Number(res.dl).toFixed(1), unit: "kWh" },
          { text: "充电金额", number: Number(res.je).toFixed(1), unit: "元" },
          { text: "充电次数", number: Number(res.cs).toFixed(1), unit: "次" },
        ];
      }
    },
    deRefesh() {
      if (this.keyer.aHours == "59:59") {
        this.toDaysCount();
      }
    },
  },
  watch: {
    SendRegId() {
      this.toDaysCount();
    },
    refreshData() {
      this.toDaysCount();
    },
  },
};
</script>

<style lang="less" scoped>
</style>