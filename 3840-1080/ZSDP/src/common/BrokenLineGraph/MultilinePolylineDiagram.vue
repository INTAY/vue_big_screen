<template>
  <div class="defaultStyle" :id="id"></div>
</template>

<script>
import { lineDatas } from "@/utils/line";
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
    textTitle: String
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
    }
  },
  methods: {
    init() {
      var echartsLine = this.$echarts.init(document.getElementById(this.id));
      //变量赋值
      let legend = this.legend;
      let xAxis = this.xAxis; //X轴坐标数据
      let yAxis = this.yAxis; // Y轴坐标数据
      let opData = this.opData; // 折线图数据
      let areaColor = this.areaColor; //折线图区域颜色
      let lineColor = this.lineColor; // 折线颜色
      let lineWidth = this.lineWidth; //折线宽度
      let textTitle = this.textTitle; //折线图标题名称
      // 图形对象
      const option = {
        //标题
        title: {
          text: textTitle || "",
          left: 9,
          textStyle: {
            color: "#fff",
            fontSize: 20,
            fontFamily: "HYQiHei-40S"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" }
        },
        legend: {
          icon: "rect",
          right: 5,
          top: 1,
          data: legend || "",
          itemGap: 15,
          itemWidth: 18,
          itemHeight: 2,
          textStyle: {
            fontSize: 15,
            color: "#cecece",
            fontFamily: "HYQiHei-40S",
            padding: [0, 4]
          }
        },
        grid: {
          top: "60",
          left: "0%",
          right: "2%",
          bottom: "4%",
          containLabel: true,
          borderWidth: 0,
          show: true
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
        xAxis: [
          {
            type: 'time',
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
              margin: 9,
              fontFamily: "HYQiHei-45S",
              color: '#ccc',
              fontSize: 18
            },
            data: xAxis ,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: yAxis || "电力(kWh)",
            axisLine: {
              lineStyle: {
                color: "#3e556c"
              }
            },
            nameTextStyle: {
              fontSize: 16,
              color: '#ccc',
              fontFamily: "HYQiHei-45S",
              padding: [0, 0, 0, 50]
            },
            splitLine: { show: false },
            //去掉Y轴的刻度线
            axisTick: { show: false },
            //刻度数与轴线之间距离
            axisLabel: {
              margin: 8,
              fontSize: 16,
              color:'#ccc'
            }
          }
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
        series: lineDatas(opData, legend, areaColor, lineColor, lineWidth)
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