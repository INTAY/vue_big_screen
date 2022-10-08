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
    dataZoom: Number,
  },
  mounted() {
    this.initHisogram();
  },
  watch: {
    id: {
      handler(newName, oldName) {
        this.initHisogram();
      },
    },
    value: {
      handler(newName, oldName) {
        this.initHisogram();
      },
    },
    bar: {
      handler(newName, oldName) {
        this.initHisogram();
      },
    },
    dataZoom: {
      handler(newName, oldName) {
        this.initHisogram();
      },
    },
    yAxisName: {
      handler(newName, oldName) {
        this.initHisogram();
      },
    },
  },
  methods: {
    initHisogram() {
      var Hisogram = this.$echarts.init(document.getElementById(this.id));
      let dataBar = this.bar;
      let dataValue = this.value;
      let yAxisName = this.yAxisName;
      let dataZoom = this.dataZoom;
      const option = {
        grid: {
          top: "60",
          left: "1%",
          right: "0.9%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            axisLine: {
              lineStyle: {
                color: "#3e556c",
              },
            },
            //去掉X轴的刻度线
            axisTick: {
              show: false,
              alignWithLabel: true,
            },
            //刻度数与轴线之间距离
            axisLabel: {
              fontSize: 16,
              fontFamily: "HYQiHei-45S",
              interval: 0,
              color: "#acb9cb",
              formatter: function (value) {  //超过五个字换行
                var str = "";
                var num = 5; //每行显示字数
                var valLength = value.length; //该项x轴字数
                var rowNum = Math.ceil(valLength / num); // 行数

                if (rowNum > 1) {
                  for (var i = 0; i < rowNum; i++) {
                    var temp = "";
                    var start = i * num;
                    var end = start + num;

                    temp = value.substring(start, end) + "\n";
                    str += temp;
                  }

                  return str;
                } else {
                  return value;
                }
              },
            },
            data: dataBar,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: yAxisName || "充电桩数（个）",
            axisLine: {
              lineStyle: {
                color: "#3e556c",
              },
            },
            //刻度数与轴线之间距离
            axisLabel: {
              margin: 10,
              fontFamily: "HYQiHei-45S",
              color: "#acb9cb",
              fontSize: 16,
            },
            nameTextStyle: {
              fontSize: 18,
              fontFamily: "HYQiHei-45S",
              color: "#acb9cb",
              padding: [0, 0, 5, 85],
            },
            splitLine: { show: false },
            //去掉Y轴的刻度线
            axisTick: { show: false },
          },
        ],
        dataZoom: [
          {
            show: true,
            type: "slider",
            height: 8,
            xAxisIndex: [0],
            bottom: "0%",
            start: 0,
            end: dataZoom || 100,
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
            name: "昨日",
            type: "bar",
            barWidth: 11,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    //渐变色
                    offset: 0,
                    color: "#01bcfb",
                  },
                  {
                    offset: 1,
                    color: "#0f6cdf",
                  },
                ]), //改变折线点的颜色
                barBorderRadius: [10, 10, 0, 0],
                //数值显示在柱头上
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontFamily: "HYQiHei-45S",
                    fontSize: 15,
                  },
                },
              },
            },
            barCategoryGap: "4%", // 柱形的间距
            data: dataValue,
          },
        ],
      };
      Hisogram.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.graphical {
  width: 100%;
  height: 100%;
}
</style>