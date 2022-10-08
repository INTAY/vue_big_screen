<template>
  <div class="hotPile">
    <div id="hotSite" class="line"></div>
  </div>
</template>

<script>
// 引入对象数组排序方法
import { compare } from "@/utils/sort";
import request from "@/utils/request";
import { mapState } from "vuex";
export default {
  mounted() {
    this.hotPile();
    this.hotSite();
  },
  data() {
    return {
      siteMessage: []
    };
  },
  computed: {
    ...mapState(["login", "keyer"])
  },
  methods: {
    async hotSite() {

      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/largeScreen/equipment/queryChargStaRankingTop10/${regId}`
        );
        this.siteMessage = res;
        for (let i = 0; i < this.siteMessage.length; i++) {
          this.siteMessage[i].name = res[i].name;
          this.siteMessage[i].value = res[i].chagEq;
        }
      }else if(this.login.isCity) {
        let regId =this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/largeScreen/equipment/queryChargStaRankingTop10/${regId}`
        );
        this.siteMessage = res;
        for (let i = 0; i < this.siteMessage.length; i++) {
          this.siteMessage[i].name = res[i].name;
          this.siteMessage[i].value = res[i].chagEq;
        }
      }
      this.hotPile();
    },

    hotPile() {
      var hotSite = this.$echarts.init(document.getElementById("hotSite"));
      //数据进行数组排序
      var data = this.siteMessage.sort(compare);
      var backGroundData = [],
        nameData = [],
        valueData = [],
        maxValue = 0,
        len = data.length;
      //判断最大的视频
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
          top: "12%",
          right: "2%",
          bottom: "0%",
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          formatter: "{b}：{c}",
          textStyle: {
            fontSize: "20"
          }
        },
        xAxis: [
          {
            show: false,
            splitLine: { show: false },
            axisTick: { show: false },
            axisLine: { show: false }
          }
        ],
        yAxis: [
          {
            type: "category",
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: { show: false },
            data: nameData
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
              textStyle: {
                fontSize: 31.5,
                fontFamily: "HYQiHei-40S",
                color: 'transparent',
              }
            },
            nameTextStyle: {
              fontSize: 31.5,
              color: "#fff",
              fontFamily: "HYQiHei-40S",
              padding: [0, 175, 0, 0]
            }
          }
        ],
        series: [
          {
            type: "bar",
            barWidth: 25,
            z: 10,
            data: valueData,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#c97e2b" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#cfaf30" // 100% 处的颜色
                  }
                ]),
                barBorderRadius: [15, 15, 15, 15], //圆角的设置
                shadowColor: "rgba(0,0,0,0.1)",
                shadowBlur: 3,
                shadowOffsetY: 3
              }
            },
            label: {
              show: true,
              fontSize: 20,
              distance: 100,
              position: [0, "-100%"],
              formatter: "{b}",
              offset: [0, -15],
              fontSize: 30,
              fontFamily: "HYQiHei-40S",
              color: "#999dad"
            }
          },
          {
            //底层圆柱
            type: "bar",
            barGap: "-100%",
            barWidth: 25,
            animation: false,
            z: -1,
            itemStyle: {
              color: "#2f3b4e",
              barBorderRadius: 15
            },
            label: {
              show: true,
              position: "right",
              fontSize: 31,
              color: "#fff",
              fontFamily: "HYQiHei-40S",
              formatter: function(param) {
                for (var i = 0; i < data.length; i++) {
                  if (param.name == data[i].name) {
                    return data[i].value;
                  }
                }
              }
            },
            data: backGroundData
          }
        ]
      };
      hotSite.setOption(option);
    },
    deRefesh() {
      if (this.keyer.punctuality == "07:02:00") {
        this.hotSite();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.hotPile {
  position: relative;
  width: 100%;
  height: 970px;
  .line {
    width: 100%;
    height: 100%;
  }
  .Y_unit {
    position: absolute;
    top: 2%;
    right: 0;
    font-size: 31px;
    color: #fff;
    font-weight: 200;
    font-family: "HYQiHei-40S";
    letter-spacing: 5px;
  }
}
</style>