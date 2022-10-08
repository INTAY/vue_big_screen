<template>
  <div class="analytical">
    <div class="Marker"></div>
    <el-button type="text" class="M_title marginLeft">今年损益分析</el-button>
    <!-- 今年损益模块 -->
    <Analysis :accumulative="accumulativeData" style="marginTop:17px" />
  </div>
</template>

<script>
import Analysis from "@/common/tableList/Analysis";
import request from "@/utils/request";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import BUS from "../../../../../utils/bus";

export default {
  components: {
    Analysis,
  },
  data() {
    return {
      accumulativeData: [
        { text: "累计收益", amount: "" },
        { text: "累计成本", amount: "" },
        { text: "累计利润", amount: "" },
      ],
      plieID: "", //监听标记
    };
  },
  computed: {
    ...mapState(["controls", "keyer"]),
  },
  created() {
    this.PlieInfo();
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
    async PlieInfo() {
      let devId = this.controls.stakeId;
      const { data: res } = await request(
        `/largeScreen/chargingRanking/getProfitLossYearByDev/${devId}`
      );
      this.accumulativeData[0].amount = res.ljsy;
      this.accumulativeData[1].amount = res.ljcb;
      this.accumulativeData[2].amount = res.ljlr;
    },
    deRefesh() {
      if (this.keyer.punctuality == "07:04:00") {
        this.PlieInfo();
      }
    },
  },
  watch: {
    plieID() {
      this.PlieInfo();
    },
  },
};
</script>

<style lang="less" scoped>
.analytical {
  position: relative;
  height: 264px;
  border: 1px solid #122c56;
  padding-top: 23px;
  background-color: rgba(11, 32, 66, 0.5);
  box-sizing: border-box;
  .Marker {
    position: absolute;
    top: 23px;
    left: 21px;
    width: 5px;
    height: 23px;
    background-color: #1074e3;
    border-radius: 12px;
  }
  .marginLeft {
    margin-left: 36px;
  }
}
</style>