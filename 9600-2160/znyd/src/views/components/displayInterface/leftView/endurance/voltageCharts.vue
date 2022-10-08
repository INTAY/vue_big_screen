<template>
  <div class="charts">
    <!-- 电压电流折线图模块 -->
    <div class="even" id="voltage"></div>
    <!-- 功率折线图模块 -->
    <div class="odd">
      <capacitys
        id="capacitys"
        :time="timeData"
        :unit="unitData"
        :opData="opDiskData"
        :circleSize="Size"
        style="height: 560px;width:1235px;"
      />
    </div>
  </div>
</template>

<script>
import capacitys from "@/common/BrokenLineGraph/historyline";
import request from "@/utils/request";
import { mapState } from "vuex";
import { rePlieInfo } from "@/common/Mixins/launchPile";

export default {
  mixins: [rePlieInfo],
  components: {
    capacitys,
  },
  data() {
    return {
      timeData: [],
      opDiskData: [],
      unitData: "充电功率( kW )\n",
      Size: "0",
      minuteData: [],
      Udata: [],
      Idata: [],
    };
  },
  computed: {
    ...mapState(["controls", "keyer"]),
  },
  created() {
    this.voltageInfo();
    this.capacityInfo();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    //电流电压
    async voltageInfo() {
      let staId = this.controls.PlieId;
      const { data: res } = await request(
        `/largeScreen/index/thisDyDlLine/${staId}`
      );
      //电压电流数据
      //电压电流数据
      this.Udata = [];
      this.Idata = [];
      this.Udata = Object.values(res.U);
      this.Idata = Object.values(res.I);
      // X轴的数据
      let U  = Object.keys(res.U)
          .map((obj, index,array) => {
            return obj.slice(11,16)
          })
      let I  = Object.keys(res.I)
          .map((obj, index,array) => {
            return obj.slice(11,16)
          })
      if (U.length > I.length) {
        this.minuteData = U;
      } else {
        this.minuteData = I;
      }
      this.Voltage();
      //设置i,i发生变化,进行数据请求
    },

    // 功率折线图
    async capacityInfo() {
      let devId = this.controls.PlieId;
      const { data: res } = await request(
        `/largeScreen/index/thisGlLine/${devId}`
      );
      this.opDiskData = Object.values(res.P) ;
      this.timeData  = Object.keys(res.P)
          .map((obj, index,array) => {
            return obj.slice(11,16)
          })
    },
    //电压电流 折线图
    Voltage() {
      var myLine = this.$echarts.init(document.getElementById("voltage"));
      let minuteData = this.minuteData ;
      let Udatas = this.Udata ;
      let Idatas = this.Idata ;

      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" }
        },
        legend: {
          icon: "rect",
          right: 100,
          top: 0,
          data: ["电压", "电流"],
          itemGap: 17,
          itemWidth: 18,
          itemHeight: 3,
          textStyle: {
            fontSize: 18,
            color: "#cecece",
            fontFamily: "HYQiHei-40S",
            padding: [0, 2],
          },
        },
        grid: {
          top: "100",
          left: "2%",
          right: "7%",
          bottom: "3%",
          containLabel: true,
          borderWidth: 0,
          show: true,
        },
        xAxis: [
          {
            type: "category",
            name: "(分钟)",
            nameGap: 35,
            boundaryGap: true,
            //刻度数与轴线之间距离
            axisLabel: {
              fontSize: 18,
              fontFamily: "HYQiHei-45S",
            },
            axisLine: {
              lineStyle: {
                color: "#ccc",
              },
            },
            nameTextStyle: {
              fontSize: 16,
              fontWeight: 200,
              padding: [40, 0, 0, -35],
            },
            axisTick: { show: false },
            data: minuteData,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "电压( V )\n",
            axisLine: {
              lineStyle: {
                color: "#ccc",
              },
            },
            axisLabel: {
              margin: 10,
              fontSize: 18,
            },
            nameTextStyle: {
              fontSize: 20,
              fontWeight: 200,
            },
            splitLine: { show: false },
            axisTick: { show: false },
          },
          {
            type: "value",
            name: "电流( A )\n",
            axisLine: {
              lineStyle: {
                color: "#ccc",
              },
            },
            //刻度数与轴线之间距离
            axisLabel: {
              margin: 10,
              fontSize: 18,
            },
            nameTextStyle: {
              fontSize: 20,
              fontWeight: 200,
            },
            splitLine: { show: false },
            axisTick: {
              //去掉Y轴的刻度线
              show: false,
            },
          },
        ],
        axisLine: {
          show: true,
          onZero: true,
          lineStyle: {
            width: 5,
            type: "solid",
            color: "#3e556c",
          },
        },
        dataZoom: [
          {
            show: true,
            type: "slider",
            height: 8,
            xAxisIndex: [0],
            bottom: "0%",
            start: 0,
            end: 60,
            textStyle: {
              color: "#fff",
            },
            handleStyle: {
              color: "rgba(51,72,116,0.6)",
            },
            fillerColor: "rgba(51,72,116,0.6)",
            borderColor: "rgba(11,31,69,0.4)",
          },
          {
            type: "inside",
            show: true,
            height: 15,
            start: 1,
            end: 35,
          },
        ],
        series: [
          {
            name: "电压",
            type: "line",
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#5b8dc8",
                  },
                  {
                    offset: 0.34,
                    color: "rgba(91,144,200,0.5)",
                  },
                  {
                    offset: 1,
                    color: "rgba(91,144,200,0.1)",
                  },
                ]),
              },
            },
            itemStyle: {
              normal: {
                color: "#2279e1", //改变折线点的颜色
                lineStyle: {
                  color: "#2279e1", //改变折线颜色
                  width: 2,
                },
              },
            },
            symbol: "none",
            data: Udatas,
          },
          {
            name: "电流",
            type: "line",
            yAxisIndex: 1,
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#f7a240",
                  },
                  {
                    offset: 0.34,
                    color: "rgba(247,162,64,0.5)",
                  },
                  {
                    offset: 1,
                    color: "rgba(247,162,64,0.1)",
                  },
                ]),
              },
            },
            itemStyle: {
              normal: {
                color: "#f7a240", //改变折线点的颜色
                lineStyle: {
                  color: "#f7a240",
                  width: 2, //改变折线颜色
                },
              },
            },
            symbol: "none",
            data: Idatas,
          },
        ],
      };
      myLine.setOption(option);
    },
    deRefesh() {
      if (this.keyer.Sec == "55") {
        this.voltageInfo();
        this.capacityInfo();
      }
    },
  },
  watch: {
    //枪传送
    acceptId() {
      this.voltageInfo();
      this.capacityInfo();
    },
  },
};
</script>

<style lang="less" scoped>
.charts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 1190px;
  margin-top: 62px;
  .even {
    height: 560px;
  }
  .odd {
    height: 560px;
  }
}
</style>