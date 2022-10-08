<template>
  <div>
    <data-box :countData="counts"></data-box>
  </div>
</template>

<script>
import dataBox from "@/common/dataBox/dataBox";
import request from "@/utils/request";
import { mapState } from "vuex";
import BUS from "../../../../../../utils/bus";

export default {
  components: {
    dataBox,
  },
  data() {
    return {
      counts: [
        { text: "充电电量", number: 10360, unit: "kWh" },
        { text: "充电金额", number: 6273, unit: "万元" },
        { text: "充电次数", number: 10360, unit: "次" },
      ],
      plieID: "", //监听标记
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
    //监听标记
    BUS.$on("skip", (val) => {
      this.plieID = val;
    });
  },
  methods: {
    async toDaysCountPlie() {
      let regId = this.controls.PlieId;
      
      const { data: res } = await request(
        `/largeScreen/equipment/queryChargingToday/${regId}/3`
      );
      for (let i = 0; i < this.counts.length; i++) {
        if (this.counts[i].text == "充电电量") {
          this.counts[i].number = res.dl;
        }
        if (this.counts[i].text == "充电金额") {
          this.counts[i].number =Math.round( res.je * 100)/100;
        }
        if (this.counts[i].text == "充电次数") {
          this.counts[i].number = res.cs;
        }
      }
    },
    deRefesh() {
      if (this.keyer.aHours == "49:49") {
        this.toDaysCountPlie();
      }
    },
  },
  watch: {
    plieID() {
      this.toDaysCountPlie();
    },
  },
};
</script>

<style lang="less" scoped>
</style>