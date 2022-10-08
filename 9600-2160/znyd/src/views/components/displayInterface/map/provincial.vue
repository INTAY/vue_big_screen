<template>
  <div class="provincial">
    <!-- 充电分布、充电次数、工单分布 -->
    <div class="btn">
      <btnChange :btnDates="btnObjects" @checkDate="checkOut" />
    </div>
    <!-- 充电桩和充电站 -->
    <div class="charge" v-if="login.isProve">
      <el-button
        :class="{ de_bgc: item.current, details: true }"
        v-for="item in btnPile"
        :key="item.id"
        @click="checkPile(item)"
      >
        {{ item.text }}
        <div :class="{ cirle: true, cirle_bgc: !item.current }"></div>
      </el-button>
    </div>
    <!-- 搜索框 -->
    <div class="demo-input-suffix" v-if="login.isProve">
      <el-input
        v-model="inputMap"
        placeholder="请输入内容"
        suffix-icon="el-icon-search"
      ></el-input>
      <ul class="iteList" v-if="inputMap != ''">
        <happy-scroll color="rgba(31,62,120,0.5)" aria-setsize="0" resize>
          <li
            v-for="(item, index) in itemList"
            :key="index"
            class="listItem"
            @click="scoutAround(item)"
          >
            {{ item.name }}
          </li>
        </happy-scroll>
      </ul>
    </div>
    <!-- 省级地图 -->
    <div id="provincial" class="P_map"></div>
  </div>
</template>

<script>
import request from "@/utils/request";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import btnChange from "@/common/btn/btnChange";
import { MapsDIY } from "@/common/Mixins/launchPro";
import BUS from "@/utils/bus";

export default {
  mixins: [MapsDIY],
  components: { btnChange },
  data() {
    return {
      MapData: [],
      //工单等按钮信息
      btnObjects: [
        { text: "充电站分布", current: true },
        { text: "充电量/次数分布", current: false },
        { text: "工单分布", current: false },
      ],
      //充电桩和充电信息
      btnPile: [
        { text: "充电站 （座）", current: true },
        { text: "充电桩 （个）", current: false },
      ],
      proveData: [],
      active: true,
      inputMap: "",
      allSiteData: [],
    };
  },
  computed: {
    ...mapState(["login", "maps", "keyer"]),
  },
  created() {
    this.proveSiteGroup();
    this.siteData();
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
      "setProveData",
      "setSearchMessage",
      "setMapLat",
      "setMapLng",
      "setIsMark",
    ]),
    //充电信息按钮切换
    checkOut(data) {
      this.btnObjects.forEach((ele, index) => {
        ele.current = false;
      });
      data.current = true;
      if (data.text == "充电站分布") {
        this.proveSiteGroup();
      } else if (data.text == "充电量/次数分布") {
        this.rechargNumber();
      } else {
        this.rechargWorkers();
      }
    },
    //充电桩和充电站切换
    checkPile(data) {
      this.btnPile.forEach((ele, index) => {
        ele.current = false;
      });
      data.current = true;
      if (data.text == "充电站 （座）") {
        this.proveSiteGroup();
      } else {
        this.provePlieGroup();
      }
    },
    //充电站分布
    async proveSiteGroup() {
      let regId = this.login.regId;
      const { data: res } = await request(
        `/largeScreen/mapLargeScreen/getMapStaCount/${regId}`
      );
      this.proveData = res;
      this.myProvince();
    },
    // 充电桩
    async provePlieGroup() {
      let regId = this.login.regId;
      const { data: res } = await request(
        `/largeScreen/mapLargeScreen/getMapStaCount/${regId}`
      );
      let addrData = [];
      for (let i = 0; i < res.length; i++) {
        addrData.push({
          name: res[i].name,
          regId: res[i].regId,
          value: res[i].stakeNum,
        });
      }
      this.proveData = addrData;
      this.myProvince();
    },
    //充电电量/充电次数分布
    async rechargNumber() {
      let regId = this.login.regId;
      const { data: res } = await request(
        `/largeScreen/mapLargeScreen/getMapChargCount/${regId}`
      );
      let addrData = [];
      for (let i = 0; i < res.length; i++) {
        let values = res[i].dl + "/" + res[i].cs;
        addrData.push({
          name: res[i].name,
          regId: res[i].regId,
          value: values,
        });
      }
      this.proveData = addrData;
      this.myProvince();
    },
    //工单信息
    async rechargWorkers() {
      let regId = this.login.regId;
      const { data: res } = await request(
        `/operation/workSheet/getRegSheetByRegId/${regId}`
      );
      this.proveData = res;
      this.myProvince();
    },
    //地图
    myProvince() {
      let that = this;

      let myMap = that.$echarts.init(document.getElementById("provincial"));
      var data = that.proveData;
      //先注销点击事件
      myMap.off('click')
      //注册点击事件
      myMap.on("click", function (params) {
      
        that.setCityRegId(data.find((item) => item.name == params.name).id);
        for (let i in geoCoordMap) {
          if (params.name == i) {
            that.setCenter(geoCoordMap[i]);
          }
        }
        that.setProve(false);
        that.setCity(true);
        that.setCityName(params.name);
        //省级页面跳转到市级页面的数据刷新锚点
        BUS.$emit("refreshData", true);
      });

      var geoCoordMap = {
        朝阳区: [116.5409, 39.961489],
        密云区: [116.883352, 40.507362],
        怀柔区: [116.637122, 40.724272],
        延庆区: [115.985006, 40.465325],
        海淀区: [116.250316, 39.999974],
        平谷区: [117.112335, 40.144783],
        门头沟区: [115.805381, 39.997183],
        昌平区: [116.235906, 40.218085],
        大兴区: [116.338033, 39.628908],
        西城区: [116.366794, 39.915309],
        丰台区: [116.286968, 39.813642],
        通州区: [116.678603, 39.802486],
        石景山区: [116.195445, 39.924601],
        东城区: [116.418757, 39.917544],
        顺义区: [116.663525, 40.168936],
        房山区: [115.839157, 39.735535],
      };
      var Mdata = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }

        return res;
      };

      var Pdata = function (Mdata) {
        //判断是否有数量，若无数量，点击后只显示城市名
        if (typeof Mdata.value[2] == "undefined") {
          return Mdata.name;
        }
        //有数量时，显示城市和当前城市所做项目数
        else {
          return Mdata.name + ":" + Mdata.value[2];
        }
      };
      var option = {
        tooltip: {
          trigger: "item",
          formatter: Pdata,
        },
        geo: [
          {
            map: "北京", //地图名称
            zoom: 1.24,
            top: 152, //距离顶部的距离
            label: {
              show: true, // 显示对应地名
              color: "#8aacce",
              fontFamily: "HYQiHei-40S",
              fontSize: 28.66,
              position: ["10%", "50%"],
            },
            itemStyle: {
              //地图区域的设置
              areaColor: "rgba(10,26,70,.5)",
              borderWidth: 3,
              borderColor: "#42a9d3",
              borderType: "solid",
            },
            emphasis: {
              //高亮状态
              itemStyle: {
                // 地图区域的颜色
                areaColor: "#0b5c8a",
              },
              label: {
                color: "#8aacce",
                fontSize: 28,
                fontFamily: "HYQiHei-40S",
              },
            },
          },
        ],
        series: [
          {
            name: "气泡图",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            symbolSize: 190,
            label: {
              normal: {
                show: true,
                color: "#fff",
                fontSize: 28,
                fontFamily: "HYQiHei-40S",
              },
            },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(207,175,48)",
                  },
                  {
                    offset: 1,
                    color: "rgb(205,118,23)",
                  },
                ]),
              },
            },
            //气泡显示Mdata里的第三个数据，跳开经纬度
            encode: {
              label: 2,
            },
            data: Mdata(data),
          },
        ],
      };
      myMap.setOption(option);
    },
    //------------------搜索框站点------------------
    //查询所有的站点并站点合并
    async siteData() {
      let regId = this.login.regId;
      const { data: res } = await request({
        url: `/property/station/getStationsNameByRegId?regId=${regId}`,
        method: "post",
      });
      this.allSiteData = [];
      for (let i = 0; i < res.length; i++) {
        this.allSiteData.push({
          name: res[i].regName,
          address: res[i].addr,
          lat: res[i].lat,
          lng: res[i].lng,
          id: res[i].regId,
        });
      }
    },
    //模糊查询
    searchData() {
      //分割字符串
      let lap = this.inputMap.split("");
      for (let i = 0; i < lap.length; i++) {
        //匹配需要的字符
        let reg = new RegExp(lap[i]);
        //清空itemList数据,防止数据堆叠
        this.itemList = [];
        // 遍历数组
        for (let j = 0; j < this.allSiteData.length; j++) {
          //进行匹配
          let siteResult = reg.test(this.allSiteData[j].name);
          //符合条件的数据添加到itemList数组里
          if (siteResult) {
            this.itemList.push({
              name: this.allSiteData[j].name,
              address: this.allSiteData[j].address,
              lat: this.allSiteData[j].lat,
              lng: this.allSiteData[j].lng,
              id: this.allSiteData[j].id,
            });
          }
        }
      }
    },
    //模糊查询跳转
    scoutAround(item) {
      this.setProve(false);
      this.setCity(true); //市区
      this.setMapLat(item.lat); //市区经纬度
      this.setMapLng(item.lng);
      this.setCityName(item.name); // 市区名称
      this.setCityRegId(item.id); // 市区所属ID
      this.setIsMark(true); //精准定位是否显示
      BUS.$emit("refreshData", true);
    },
  },
  watch: {
    inputMap() {
      this.searchData();
    },
    deRefesh() {
      if (this.login.isProve) {
        if (this.keyer.punctuality == "07:06:00") {
          this.proveSiteGroup();
        }
      }
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
  .btn {
    position: absolute;
    top: 38px;
    left: 532px;
  }
  .charge {
    display: flex;
    position: absolute;
    top: 200px;
    left: 116px;
    width: 474px;
    height: 215px;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
    .details {
      width: 378px;
      height: 88px;
      font-family: "HYQiHei-50S";
      font-size: 39px;
      letter-spacing: 4px;
      margin: 0px;
      color: #88a7c9;
      border: 2px solid #2d5394;
      background-color: rgba(15, 27, 77, 0.5);
      border-radius: 50px;
    }
    .el-button {
      position: relative;
      padding-left: 75px;
      .cirle {
        position: absolute;
        top: 33px;
        left: 30px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #fff;
      }
      .cirle_bgc {
        opacity: 0.5;
      }
    }
    .de_bgc {
      color: #fff;
      background: #043c6e;
      border-color: #043c6e;
    }
  }
}
</style>