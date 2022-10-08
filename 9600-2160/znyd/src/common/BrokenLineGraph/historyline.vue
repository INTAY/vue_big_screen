<template>
  <div>
    <div class="graphical" :id="id"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    time: Array,
    unit: String,
    circleSize: String,
    opData: Array,
    lineColor: String, //折线图颜色
    areaColor: Array //折线图区域颜色
  },
  mounted() {
    this.init(); //折线图
  },
  watch: {
    time: {
      handler(newName, oldName) {
        this.init();
      }
    },
    opData: {
      handler(newName, oldName) {
        this.init();
      }
    },
    unit: {
      handler(newName, oldName) {
        this.init();
      }
    },
    circleSize: {
      handler(newName, oldName) {
        this.init();
      }
    },
    lineColor: {
      handler(newName, oldName) {
        this.init();
      }
    },
    areaColor: {
      handler(newName, oldName) {
        this.init();
      }
    }
  },
  methods: {
    //折线图模块
    init() {
      var myLine = this.$echarts.init(document.getElementById(this.id));
      //进行赋值
      var titleName = this.unit;
      var dateValue = this.opData;
      var date = this.time;
      var Size = this.circleSize || "10";
      var lineColor = this.lineColor;
      var areaColor = this.areaColor;

      var option = {
        tooltip: {
          // 坐标轴指示器，坐标轴触发有效
          trigger: "axis",
          formatter: function (param) {
            return `${param[0].axisValue}:
            ${param[0].value}`
          },
          axisPointer: { type: "shadow" }
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
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#3e556c"
              }
            },
            axisTick: { show: false },
            //刻度数与轴线之间距离
            axisLabel: {
              margin: 20,
              fontSize: 27,
              color:'#ccc',
              fontFamily: "HYQiHei-45S"
            },
            data: date
          }
        ],
        yAxis: [
          {
            type: "value",
            name: titleName,
            axisLine: {
              lineStyle: {
                color: "#3e556c"
              }
            },
            nameTextStyle: {
              fontSize: 27,
              color:'#ccc',
              fontFamily: "HYQiHei-45S",
              padding: [0,0,0,140]
            },
            splitLine: { show: false },
            axisTick: { show: false },
            //刻度数与轴线之间距离
            axisLabel: {
              margin: 45,
              fontSize: 27,
              color:'#ccc',
              fontFamily: "HYQiHei-45S"
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
        series: [
          {
            name: "昨日",
            type: "line",
            //渐变色
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  areaColor || [
                    {
                      offset: 0,
                      color: "#144585"
                    },
                    {
                      offset: 0.34,
                      color: "rgba(56,155,255,0.25)"
                    },
                    {
                      offset: 1,
                      color: "rgba(38,197,254,0.00)"
                    }
                  ]
                )
              }
            },
            itemStyle: {
              normal: {
                color: lineColor || "#2586f7", //改变折线点的颜色
                lineStyle: {
                  color: lineColor || "#2586f7" //改变折线颜色
                }
              }
            },
            symbol: "circle", //折线点的形状
            symbolSize: Size, //折线点的大小
            data: dateValue
          }
        ]
      };
      myLine.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
.graphical {
  width: 100%;
  height: 100%;
}
</style>