<template>
  <div>
    <data-box :countData="counts"></data-box>
  </div>
</template>

<script>
import dataBox from "@/common/dataBox/dataBox";
import request from "@/utils/request";
import { mapState } from "vuex";
import { rePlieInfo } from "@/common/Mixins/launchPile";

export default {
  mixins: [rePlieInfo],

  components: {
    dataBox,
  },
  data() {
    return {
      counts: [],
    };
  },
  computed: {
    ...mapState(["controls", "keyer"]),
  },
  created() {
    this.toDaysCountPlie();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async toDaysCountPlie() {
      let regId = this.controls.PlieId;
      const { data: res } = await request(
        `/largeScreen/equipment/queryChargingToday/${regId}/3`
      );
      this.counts = [
        { text: "充电电量", number: res.dl || "0", unit: "kWh" },
        { text: "充电金额", number: res.je || "0", unit: "万元" },
        { text: "充电次数", number: res.cs || "0", unit: "次" },
      ]
    },
    deRefesh() {
      if (this.keyer.aHours == "49:49") {
        this.toDaysCountPlie();
      }
    },
  },
  watch: {
    //枪传送
    acceptId() {
      this.toDaysCountPlie();
    },
  },
};
</script>

<style lang="less" scoped>
</style>