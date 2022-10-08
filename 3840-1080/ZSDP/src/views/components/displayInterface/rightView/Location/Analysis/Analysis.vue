<template>
  <div class="Analysis">
    <!-- 今年损益收益 -->
    <Analysis :accumulative="accumulativeData" />

    <ul class="img">
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import Analysis from "@/common/tableList/Analysis";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import request from "@/utils/request";
import { reSiteInfo } from "@/common/Mixins/launchSite";

export default {
  mixins: [reSiteInfo],
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
    };
  },
  computed: {
    ...mapState(["login", "maps", "keyer"]),
  },
  created() {
    this.analysisData();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async analysisData() {
      let staId = this.maps.StaId;
      const { data: res } = await request(
        `/largeScreen/chargingRanking/getProfitLossYearBySta/${staId}`
      );
      //今日收益损
      this.accumulativeData[0].amount = res.ljsy;
      this.accumulativeData[1].amount = res.ljcb;
      this.accumulativeData[2].amount = res.ljlr;
    },
    //定时刷新
    deRefesh() {
      if (this.keyer.punctuality == "07:04:00") {
        this.analysisData();
      }
    },
  },
  watch: {
    //站点传送
    launchId() {
      this.analysisData();
    },
  },
};
</script>

<style lang="less" scoped>
.Analysis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 328px;
  margin-top: 21px;
  //  图片区域
  .img {
    display: flex;
    justify-content: flex-start;
    height: 142px;
    li {
      flex: 1;
    }
    li:nth-child(odd) {
      background-color: #1a3067;
    }
    li:nth-child(even) {
      background-color: #e1bf48;
    }
  }
}
</style>