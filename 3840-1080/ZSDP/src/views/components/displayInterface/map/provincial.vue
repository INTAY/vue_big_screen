<template>
  <div class="provincial">
    <div id="provincial" class="P_map"></div>
  </div>
</template>

<script>
import request from "@/utils/request";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import BUS from "@/utils/bus";  //引入bus模块
import {refurbish} from "@/common/Mixins/refurbishMixins"

export default {
  mixins:[refurbish],
  data() {
    return {
      proveData: []
    };
  },
  computed: {
    ...mapState(["login", "maps","keyer"])
  },
  created() {
    this.proveSiteGroup();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    ...mapMutations([
      "setProve",
      "setCity",
      "setCityName",
      "setCenter",
      "setCityRegId",
      "setTopData",
      "setCityData",
    ]),
    async proveSiteGroup() {
      let regId = this.login.regId;
      const { data: res } = await request(
        `/largeScreen/mapLargeScreen/getMapStaCount/${regId}`
      );
      //地图数据
      this.proveData = res;
      this.myProvince();
      //站点数前三名
      let topData = res
        .sort(function(a, b) {
          return b.value - a.value;
        })
        .slice(0, 3);
      this.setTopData(topData);
      //存储城市的id和城市名，搜索跳转的时候用
      
      let cityData = []
      for(let i = 0; i<res.length;i++) {        
        cityData.push({
          id: res[i].id,
          name: res[i].name,
        })
      }
      this.setCityData(cityData)     
    },
    //地图实例
    myProvince() {
      let that = this;
      let myMap = this.$echarts.init(document.getElementById("provincial"));

      myMap.on("click", function(params) {
        //获取行政id
        that.setCityRegId(data.find(item => item.name == params.name).id);
        for (let i in geoCoordMap) {
          if (params.name == i) {
            that.setCenter(geoCoordMap[i]);
          }
        }
        that.setProve(false);
        that.setCity(true);
        that.setCityName(params.name);
        //省级页面跳转到市级页面的数据刷新锚点
        BUS.$emit('refreshData',true)
      });
      var data = this.proveData;
      var geoCoordMap = {
        南京市: [118.767413, 32.041544],
        无锡市: [120.301663, 31.574729],
        徐州市: [117.684811, 34.261792],
        常州市: [119.946973, 31.772752],
        苏州市: [120.619585, 31.199379],
        淮安市: [119.021265, 33.397506],
        宿迁市: [118.493328, 33.645154],
        南通市: [120.977608, 32.216212],
        盐城市: [120.139998, 33.377631],
        扬州市: [119.421003, 32.693159],
        镇江市: [119.452753, 32.064402],
        泰州市: [119.915176, 32.484882],
        连云港市: [119.178821, 34.600018]
      };
      var Mdata = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              id: data[i].id,
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };

      var Pdata = function(Mdata) {
        //判断是否有数量，若无数量，点击后只显示城市名
        if (typeof Mdata.value[2] == "undefined") {
          return Mdata.name;
        }
        //有数量时，显示城市和当前城市所做项目数
        else {
          return Mdata.name + ":" + Mdata.value[2];
        }
      };
      const option = {
        tooltip: {
          trigger: "item",
          formatter: Pdata
        },
        geo: [
          {
            id: {
              show: true,
              formatter: function() {
                if (name == data[i].name) {
                  return data[i].id;
                }
              }
            },
            map: "江苏", //地图名称
            zoom: 1.25,
            top: 80, //距离顶部的距离
            label: {
              show: true, // 显示对应地名
              color: "#8aacce",
              fontFamily: "HYQiHei-40S",
              fontSize: 16,
              position: ["5%", "50%"]
            },
            //地图区域的设置
            itemStyle: {
              areaColor: "rgba(10,26,70,.5)",
              borderWidth: 2,
              borderColor: "#42a9d3",
              borderType: "solid"
            },
            emphasis: {
              //高亮状态
              itemStyle: {
                // 地图区域的颜色(划过区域颜色)
                areaColor: "#11396e"
              },
              label: {
                color: "#8aacce",
                fontSize: 18,
                fontFamily: "HYQiHei-40S"
              }
            }
          }
        ],
        series: [
          {
            id: "",
            name: "气泡图",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            symbolSize: 60,
            label: {
              normal: {
                show: true,
                color: "#fff",
                fontSize: 16,
                fontFamily: "HYQiHei-40S"
              }
            },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 1, 1, [
                  {
                    offset: 0,
                    color: "rgba(94,53,222)"
                  },
                  {
                    offset: 1,
                    color: "rgba(64,118,227)"
                  }
                ])
              }
            },
            //气泡显示Mdata里的第三个数据，跳开经纬度
            encode: {
              label: 2
            },
            data: Mdata(data)
          }
        ]
      };
      myMap.setOption(option);
    },
    deRefesh() {
      if (this.keyer.punctuality == "07:00:00") {
        this.proveSiteGroup();
      }
    }
  },
  watch: {
    initialize() {
      this.proveSiteGroup();
    },
  },
};
</script>

<style lang="less" scoped>
.provincial {
  width: 100%;
  height: 100%;
  .P_map {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>