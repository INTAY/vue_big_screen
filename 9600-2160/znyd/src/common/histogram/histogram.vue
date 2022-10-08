<template>
  <div>
    <div :id="id" class="graphical"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    value: Array,
    bar: Array,
    yAxisName: String,
    dataZoom: Number
  },
  mounted() {
    this.initHisogram();
  },
  watch: {
    id: {
      handler(newName, oldName) {
        this.initHisogram();
      }
    },
    value: {
      handler(newName, oldName) {
        this.initHisogram();
      }
    },
    bar: {
      handler(newName, oldName) {
        this.initHisogram();
      }
    },
    dataZoom: {
      handler(newName, oldName) {
        this.initHisogram();
      }
    },
    yAxisName: {
      handler(newName, oldName) {
        this.initHisogram();
      }
    }
  },
  methods: {
    initHisogram() {
      
      var Hisogram = this.$echarts.init(document.getElementById(this.id));
      let dataBar = this.bar;
      let dataValue = this.value;
      let yAxisName = this.yAxisName;
      let dataZoom = this.dataZoom;
      var option = {
        grid: {
          top: "100",
          left: "2%",
          right: "1%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            axisLine: {
              lineStyle: {
                color: "#3e556c"
              }
            },
            axisTick: {
              //去掉X轴的刻度线
              show: false,
              alignWithLabel: true
            },
            axisLabel: {
              //刻度数与轴线之间距离
              fontSize: 18,
              fontFamily: "HYQiHei-45S",
              interval: 0,
              color: "#acb9cb"
            },
            data: dataBar
          }
        ],
        yAxis: [
          {
            type: "value",
            name: yAxisName || "充电桩数（个）\n",
            axisLine: {
              lineStyle: {
                color: "#3e556c"
              }
            },
            axisLabel: {
              //刻度数与轴线之间距离
              margin: 30,
              fontFamily: "HYQiHei-45S",
              color: "#acb9cb",
              fontSize: 25
            },
            nameTextStyle: {
              fontSize: 25,
              fontFamily: "HYQiHei-45S",
              color: "#acb9cb",
              padding: [0, 0, 0, 20],
            },
            splitLine: { show: false },
            axisTick: {
              //去掉Y轴的刻度线
              show: false
            }
          }
        ],
        dataZoom: [
          {
            show: true,
            type: "slider",
            height: 8,
            xAxisIndex: [0],
            bottom: "0%",
            start: 0,
            end:dataZoom || 100,
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
        series: [
          {
            name: "昨日",
            type: "bar",
            barWidth: 30,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    //渐变色
                    offset: 0,
                    color: "#8cc710"
                  },
                  {
                    offset: 1,
                    color: "#419933"
                  }
                ]), //改变折线点的颜色
                barBorderRadius: [18, 18, 0, 0],
                label: {
                  //数值显示在柱头上
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontFamily: "HYQiHei-45S",
                    fontSize: 23
                  }
                }
              }
            },
            barCategoryGap: "10%", // 柱形的间距
            data: dataValue
          }
        ]
      };
      Hisogram.setOption(option);
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