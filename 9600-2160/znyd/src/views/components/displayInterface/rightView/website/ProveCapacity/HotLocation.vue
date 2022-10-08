<template>
  <div class="hotLocation">
    <div id="hotLocation" class="line"></div>
  </div>
</template>

<script>
import { compareFlashback } from "@/utils/sort";
import request from "@/utils/request";
import { mapState } from "vuex";
export default {
  data() {
    return {
      locationMessage: [],
    };
  },
  computed: {
    ...mapState(["login","keyer"])
  },
  created() {
    this.hotlist();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    hotLocation() {
      var hotLocation = this.$echarts.init(
        document.getElementById("hotLocation")
      );
      //排序
      var data = this.locationMessage.sort(compareFlashback);
      var backGroundData = [],
        nameData = [],
        valueData = [],
        maxValue = 0,
        len = data.length;
      //判断最大的数据
      for (var i = 0; i < len; i++) {
        if (data[i].value > maxValue) {
          maxValue = data[i].value;
        }
      }

      for (var i = 0; i < len; i++) {
        backGroundData.push(maxValue * 1.1);
        nameData.push(data[i].name);
        valueData.push(data[i].value);
      }
      var option = {
        grid: {
          left: "0%",
          right: "0%",
          bottom: "0%",
          containLabel: true
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLine: { show: false }, //y轴轴线取消
            splitLine: { show: false }, //网格线取消
            axisTick: { show: false }, //刻度线取消
            data: nameData,
            nameTextStyle: {
              fontSize: 30,
              color: "#fff",
              fontFamily: "HYQiHei-40S"
            },
            axisLabel: {
              textStyle: {
                fontSize: 33,
                fontFamily: "HYQiHei-40S",
                color: "#fff"
              }
            }
          },
          {
            name: "单位（万kWh）",
            nameLocation: "start",
            data: valueData,
            inverse: true,
            axisLine: { show: false }, //y轴轴线取消
            splitLine: { show: false }, //网格线取消
            axisTick: { show: false }, //刻度线取消
            axisLabel: {
              show: true,
              margin: 13,
              textStyle: {
                fontSize: 31.5,
                fontFamily: "HYQiHei-40S",
                color: "#fff"
              }
            },
            nameTextStyle: {
              fontSize: 31.5,
              color: "#fff",
              fontFamily: "HYQiHei-40S",
              padding: [0, 135, 0, 0]
            }
          }
        ],
        xAxis: [
          {
            show: false,
            axisLine: { show: false }, //y轴轴线取消
            splitLine: { show: false }, //网格线取消
            axisTick: { show: false } //刻度线取消
          }
        ],
        series: [
          {
            name: "充电量Top 10",
            type: "bar",
            barWidth: 26,
            data: valueData,
            label: {
              normal: {
                show: false,
                position: "right",
                textStyle: {
                  fontSize: 30,
                  fontFamily: "HYQiHei-40S",
                  color: "white"
                }
              }
            },

            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#c97f2e" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#cfaf31" // 100% 处的颜色
                  }
                ]),
                barBorderRadius: [15, 15, 15, 15],
                shadowColor: "rgba(0,0,0,0.1)",
                shadowBlur: 3,
                shadowOffsetY: 3
              }
            }
          },
          {
            type: "bar",
            barWidth: 25,
            barGap: "-100%",
            itemStyle: {
              color: "#18345c",
              barBorderRadius: [15, 15, 15, 15]
            },
            z: -12,
            data: backGroundData
          }
        ]
      };
      hotLocation.setOption(option);
    },
    async hotlist() {
      let regId = this.login.regId;
      const { data: res } = await request(
        `/largeScreen/equipment/queryChargRankingTop10/${regId}`
      );

      this.locationMessage = res;
      for (let i = 0; i < this.locationMessage.length; i++) {
        this.locationMessage[i].name = res[i].name;
        this.locationMessage[i].value = res[i].chagEq;
      }
      this.hotLocation();
    },
    deRefesh() {
      if (this.keyer.punctuality == "07:02:00") {
        this.hotlist();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.hotLocation {
  width: 100%;
  height: 100%;
  .line {
    width: 100%;
    height: 100%;
    margin-top: 25px;
  }
}
</style>