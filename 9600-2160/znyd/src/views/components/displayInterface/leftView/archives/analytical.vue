<template>
  <div class="analytical">
    <div class="Marker"></div>
    <el-button type="text" class="M_title marginLeft">今年损益分析</el-button>
    <Analysis :accumulative="accumulativeData" style="marginTop:40px" />
  </div>
</template>

<script>
import Analysis from "@/common/tableList/Analysis";
import request from "@/utils/request";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import { rePlieInfo } from "@/common/Mixins/launchPile";

export default {
  mixins: [rePlieInfo],
  components: {
    Analysis,
  },
  data() {
    return {
      accumulativeData: [],
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
  },
  methods: {
    async PlieInfo() {
      let devId = this.controls.stakeId;

      const { data: res } = await request(
        `/largeScreen/chargingRanking/getProfitLossYearByDev/${devId}`
      );
      this.accumulativeData = [
        { text: "累计收益", amount: res.ljsy },
        { text: "累计成本", amount: res.ljcb },
        { text: "累计利润", amount: res.ljlr },
      ]

    },
    deRefesh() {
      if (this.keyer.punctuality == "07:04:00") {
        this.PlieInfo();
      }
    },
  },
  watch: {
    //枪传送
    acceptId() {
      this.PlieInfo();
    },
  },
};
</script>

<style lang="less" scoped>
.analytical {
  position: relative;
  height: 529px;
  padding-top: 53px;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);

  box-sizing: border-box;
  .Marker {
    position: absolute;
    top: 63px;
    left: 56px;
    width: 12px;
    height: 43px;
    background-color: #1074e3;
    border-radius: 12px;
  }
  .marginLeft {
    margin-left: 100px;
  }
}
</style>