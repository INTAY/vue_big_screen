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
import {refurbish} from "@/common/Mixins/refurbishMixins"

export default {
  mixins:[refurbish],
  components: {
    CircleItem,
  },
  data() {
    return {
      circles: [
        {
          name: "充电次数",
          value: 0.2,
        },
        {
          name: "充电量",
          value: 0.1,
        },
        {
          name: "用户数",
          value: 0.4,
        },
        {
          name: "充电设施",
          value: 0.3,
        },
        {
          name: "充电站",
          value: 0.1,
        },
      ],
    };
  },
  computed: {
    ...mapState(["login", "keyer"]),
  },
  created() {
    this.requestData();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    // 数据请求
    async requestData() {
      let regId = this.login.cityRegId || this.login.regId;

      const { data: res } = await request(
        `/largeScreen/chargingRanking/queryDevCharg/${regId}`
      );
      // 把数据循环进数组中
      for (let i = 0; i < this.circles.length; i++) {
        if (this.circles[i].name == "充电次数") {
          this.circles[i].value = Number(res.chargTimes).toFixed(5);
        }
        if (this.circles[i].name == "充电量") {
          this.circles[i].value = Number(res.charg).toFixed(5);
        }
        if (this.circles[i].name == "用户数") {
          this.circles[i].value = Number(res.userPercentage).toFixed(5);
        }
        if (this.circles[i].name == "充电设施") {
          this.circles[i].value = Number(res.ChargingFacilities).toFixed(5);
        }
        if (this.circles[i].name == "充电站") {
          this.circles[i].value = Number(res.chargePoint).toFixed(5);
        }
      }
      this.myAnnular();
    },
    myAnnular() {
      var myCharts = this.$echarts.init(document.getElementById("annulars")); //初始化饼状图
      let legendData = [this.login.cityName, "江苏省"]; //控制按钮
      let circData = this.circles;
      const dataStyle = {
        normal: {
          label: { show: false },
          labelLine: { show: false },
        },
      };
      //  提示框组件
      const option = {
        tooltip: {
          show: true,
        },

        color: ["#03b1f7", "#1e3c66"],
        // 图例
        legend: {
          orient: "horizontal",
          x: "center",
          data: legendData,
          itemWidth: 18,
          itemHeight: 3,
          itemGap: 21,
          padding: 0,
          textStyle: {
            fontFamily: "HYQiHei-40S",
            fontSize: 18,
            color: "#fff",
            padding: [0, 10],
          },
        },
        series: circleData(circData, legendData, dataStyle),
      };

      myCharts.setOption(option);
    },
    //定时刷新
    deRefesh() {
      if (this.keyer.punctuality == "07:00:00") {
        this.requestData();
      }
    },
  },
  watch: {
    initialize() {
      this.requestData();
    },
  },
};
</script>

<style lang="less" scoped>
.annular {
  position: relative;
  width: 100%;
  height: 343px;
  margin-top: 18px;
  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>