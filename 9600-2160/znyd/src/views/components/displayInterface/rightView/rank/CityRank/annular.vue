<template>
  <div class="annular">
    <div id="annulars" class="chart"></div>
    <!-- 标注数据 -->
    <circle-item :circleData="circles" />
  </div>
</template>

<script>
import CircleItem from "@/common/circleline/circle";
import { circleData } from "@/utils/circle"; //引入同心环配置函数
import request from "@/utils/request";
import { mapState } from "vuex"; //引入vuex数据
export default {
  components: {
    CircleItem,
  },

  data() {
    return {
      circles: [],
    };
  },
  computed: {
    ...mapState(["login", "keyer"]),
  },
  created() {
    this.circularData();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    // 数据请求
    async circularData() {
      let regId = this.login.cityRegId || this.login.regId;
      const { data: res } = await request(
        `/largeScreen/chargingRanking/queryDevCharg/${regId}`
      );
      //循环进入数组中
      this.circles = [
        {
          name: "充电次数",
          value: Number(res.chargTimes).toFixed(5) || "0",
        },
        {
          name: "充电量",
          value: Number(res.charg).toFixed(5) || "0",
        },
        {
          name: "用户数",
          value: Number(res.userPercentage).toFixed(5) || "0",
        },
        {
          name: "充电设施",
          value: Number(res.ChargingFacilities).toFixed(5) || "0",
        },
        {
          name: "充电站",
          value: Number(res.chargePoint).toFixed(5) || "0",
        },
      ];
      this.myAnnular();
    },
    myAnnular() {
      var myCharts = this.$echarts.init(document.getElementById("annulars")); //初始化饼状图
      let legendData = [this.login.cityName, "北京市"]; //控制按钮
      let circData = this.circles;
      const dataStyle = {
        normal: {
          label: { show: false },
          labelLine: { show: false },
        },
      };

      const option = {
        //  提示框组件
        tooltip: {
          show: true,
        },

        color: ["#03b1f7", "#1e3c66"],
        // 图例
        legend: {
          orient: "horizontal",
          x: "center",
          data: legendData,
          itemWidth: 43,
          itemHeight: 4,
          itemGap: 47,
          padding: 16,
          textStyle: {
            fontFamily: "HYQiHei-40S",
            fontSize: 27,
            color: "#fff",
            padding: [0, 20],
          },
        },
        series: circleData(circData, legendData, dataStyle),
      };

      myCharts.setOption(option);
    },
    //定时刷新
    deRefesh() {
      if (this.keyer.punctuality == "07:00:00") {
        this.circularData();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.annular {
  position: relative;
  width: 100%;
  height: 650px;
  margin-top: 41px;

  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>