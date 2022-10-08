<template>
  <div class="defaultStyle" :id="id"></div>
</template>

<script>
import { lineDatas } from "@/utils/line"
export default {
  props: {
    id: String,
    legend: Array,
    xAxis: Array,
    yAxis: String,
    areaColor: Array,
    lineColor: Array,
    lineWidth: Array,
    opData: Array,
    textTitle:String,
  },
  mounted() {
    this.init();
  },
  watch: {
    legend: {
      handler(newName, oldName) {
        this.init();
      }
    },
    xAxis: {
      handler(newName, oldName) {
        this.init();
      }
    },
    yAxis: {
      handler(newName, oldName) {
        this.init();
      }
    },
    areaColor: {
      handler(newName, oldName) {
        this.init();
      }
    },
    lineColor: {
      handler(newName, oldName) {
        this.init();
      }
    },
    lineWidth: {
      handler(newName, oldName) {
        this.init();
      }
    },
    opData: {
      handler(newName, oldName) {
        this.init();
      }
    },
    textTitle: {
      handler(newName, oldName) {
        this.init();
      }
    },
  },
  methods: {
    init() {
      var echartsLine = this.$echarts.init(document.getElementById(this.id));
      //变量赋值
      let legend = this.legend
      let xAxis = this.xAxis //X轴坐标数据
      let yAxis = this.yAxis // Y轴坐标数据
      let opData = this.opData // 折线图数据
      let areaColor = this.areaColor //折线图区域颜色
      let lineColor = this.lineColor // 折线颜色
      let lineWidth = this.lineWidth //折线宽度
      let textTitle = this.textTitle //折线图标题名称
        // 图形对象
      const option = {
        //标题
        title: {          
          text: textTitle || "",
          left: 30,
          textStyle: {
            color: "#fff",
            fontSize: 36,
            fontFamily: 'HYQiHei-40S',
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" }
        },
        legend: {
          icon: "rect",
          right: 20,
          top: 5,
          data: legend || '',
          itemGap: 47,
          itemWidth: 45,
          itemHeight: 3,
          textStyle: {
            fontSize: 27,
            color: "#cecece",
            fontFamily: "HYQiHei-40S",
            padding: [0, 20]
          }
        },
        grid: {
          top: "100",
          left: "2%",
          right: "1%",
          bottom: "3%",
          containLabel: true,
          borderWidth: 0,
          show: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#3e556c"
              }
            },
            axisTick: {
              //去掉X轴的刻度线
              show: false
            },
            axisLabel: {
              //刻度数与轴线之间距离
              margin: 20,
              fontFamily: "HYQiHei-45S",
              color:'#ccc',
              fontSize: 25
            },
            data: xAxis || [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            name: yAxis || "电 力( 万 kWh )\n",
            axisLine: {
              lineStyle: {
                color: "#3e556c"
              }
            },
            nameTextStyle: {
              fontSize: 25,
              color:'#ccc',
              padding: [0,0,0,50],
              letterSpacing: 5,
              fontFamily: "HYQiHei-45S"
            },
            splitLine: { show: false },
            //去掉Y轴的刻度线
            axisTick: { show: false },
            //刻度数与轴线之间距离
            axisLabel: {
              margin: 30,
              color:'#ccc',
              fontSize: 25
            }
          },
        ],
        axisLine: {
          show: true,
          onZero: true,
          lineStyle: {
            width: 15,
            type: "solid",
            color: "#3e556c"
          }
        },
        dataZoom: [
          {
            show: true,
            type: "slider",
            height: 8,
            xAxisIndex: [0],
            bottom: "0%",
            start: 0,
            end: 100,
            textStyle: {
              color: "#fff"
            },
            handleStyle: {
              color: "rgba(51,72,116,0.6)"
            },
            fillerColor: "rgba(51,72,116,0.6)",
            borderColor: "rgba(11,31,69,0.4)"
          },
          {
            type: "inside",
            show: true,
            height: 15,
            start: 1,
            end: 35
          }
        ],
        series: lineDatas(opData,legend,areaColor,lineColor,lineWidth),

      };
      echartsLine.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
.defaultStyle {
  width: 100%;
  height: 100%;
}
</style>