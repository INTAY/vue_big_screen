<template>
  <div class="pMap">
    <!-- 搜索框 -->
    <div class="demo-input-suffix">
      <el-input v-model="inputMap" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>

      <ul class="iteList" v-if="inputMap.length > 0">
        <happy-scroll color="rgba(31,62,120,0.5)" hide-horizontal size resize>
          <li
            v-for="(item,index) in itemList"
            :key="index"
            class="listItem"
            @click="scoutAround(item)"
          >{{item.name}}</li>
        </happy-scroll>
      </ul>
    </div>

    <!-- 充电站排行（前三名） -->
    <div class="ranks" v-if="login.isProve">
      <div class="ranks_text">充电站排行榜</div>
      <div class="ranks_detail" v-for="item in (this.maps.topData)" :key="item.id">
        <div class="place">{{item.name}}</div>
        <div class="counts">{{item.value}}</div>
        <div class="unit">个</div>
      </div>
    </div>
    <!-- 故障充电桩排名 -->
    <el-card class="fault-card" v-if="login.isProve">
      <div slot="header" class="header">
        <span>故障充电桩城市排名</span>
      </div>
      <div
        :class="{'main':true,'borderLast':index == 2}"
        v-for="(item,index) in faultData"
        :key="item.id"
      >
        <div :class="{'addres':true,'colorFrist':index == 0}">{{item.name}}</div>
        <div class="counts">
          <div :class="{'number':true,'colorFrist':index == 0}">{{item.value}}</div>
          <div class="unit">个</div>
        </div>
      </div>
    </el-card>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" v-if="login.isCity">
      <el-breadcrumb-item :to="{ path: '/interface' }" @click.native="skip" v-if="login.level == 1">{{login.fullName}}</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/interface' }" v-if="login.level == 2">{{login.fullName}}</el-breadcrumb-item>
      <el-breadcrumb-item @click.native="backForword">{{login.cityName}}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 地图模块 -->
    <div class="map">
      <!-- 省级 -->
      <Province v-if="login.isProve" />
      <!-- 市级 -->
      <City v-if="login.isCity" />
    </div>
  </div>
</template>

<script>
import City from "./city"; //引入地级市模块
import Province from "./provincial"; //引入省级模块
import request from "@/utils/request";
import BUS from "@/utils/bus";  //引入bus模块
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import {refurbish} from "@/common/Mixins/refurbishMixins"

export default {
  mixins: [refurbish],
  components: {
    City,
    Province,
  },
  data() {
    return {
      inputMap: "",
      faultData: [
        { id: "1", name: "南京市", value: 78 },
        { id: "2", name: "苏州市", value: 5 },
        { id: "3", name: "无锡市", value: 25 },
      ],
      allSiteData: [],
      itemList: [],
    };
  },
  computed: {
    ...mapState(["login", "maps", "keyer"]),
  },
  created() {
    this.faultSiteCityGroup(); //故障桩前三名
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
      "setSite",
      "setMarkersData",
      "setCityRegId",
      "setCityName",
      "setSearchMessage",
      "setSearchCenter",
      "setMapLat",
      "setMapLng",
      "setIsMark",
    ]),
    //故障站城市排名
    async faultSiteCityGroup() {
      let id = this.login.regId;
      const { data: res } = await request(
        `/property/assetStatus/getAssetRanking/${id}`
      );
      this.faultData = res;
    },
    //模糊查询数据请求
    async siteData() {
      let regId = this.login.regId;
      const { data: res } = await request({
        url: `/property/station/getStationsNameByRegId?regId=${regId}`,
        method: "post",
      });
      this.allSiteData = [];
      for (let i = 0; i < res.length; i++) {
        this.allSiteData.push({
          name: res[i].staName,
          address: res[i].addr,
          adminRegion: res[i].regName,
          lat: res[i].lat,
          lng: res[i].lng,
          id: res[i].regId,
        });
      }
    },
    //模糊查询
    searchData() {
      this.itemList = [];
      let reg = new RegExp(this.inputMap);
      for (let i = 0; i < this.allSiteData.length; i++) {
        let siteResult = reg.test(this.allSiteData[i].name);
        if (siteResult) {
          this.itemList.push({
            name: this.allSiteData[i].name,
            id: this.allSiteData[i].id,
            address: this.allSiteData[i].address,
            adminRegion: this.allSiteData[i].adminRegion,
            lat: this.allSiteData[i].lat,
            lng: this.allSiteData[i].lng,
          });
        }
      }
    },
    //模糊查询跳转
    scoutAround(item) {
      this.setProve(false);
      this.setCity(true); //市区
      this.setMapLat(item.lat) //市区经纬度
      this.setMapLng(item.lng)
      this.setCityName(item.adminRegion); // 市区名称
      this.setCityRegId(item.id);// 市区所属ID
      this.setIsMark(true)
      BUS.$emit("refreshData", true);

    },
    // 面包屑导航跳转  跳转到省级
    skip() {
      this.setProve(true);
      this.setCity(false);
      this.setSite(false);
      this.setCityRegId("");
      this.setSearchMessage("");
      //返回时清除经纬度
      this.setMapLat("") 
      this.setMapLng("")
      this.setIsMark(false)
      //市级页面跳转到省级页面的数据刷新锚点
      BUS.$emit('refreshData',false)
    },
    // 跳转到市级页面
    backForword() {
      this.setProve(false);
      this.setCity(true);
      this.setSite(false);
      this.setSearchMessage("");
    },
    deRefesh() {
      if (this.login.isProve) {
        if (this.keyer.punctuality == "07:00:00") {
          this.faultSiteCityGroup();
        }
      }
    },
  },
  watch: {
    //检测输入框变化
    inputMap() {
      this.searchData();
    },
    initialize() {
      this.siteData();
      this.faultSiteCityGroup()
    },
  },
};
</script>

<style lang="less">
.pMap {
  width: 657px;
  height: 857px;
  padding-top: 50px;
  box-sizing: border-box;
  // 搜索框
  .demo-input-suffix {
    position: relative;
    position: absolute;
    top: 15px;
    left: 246px;
    width: 430px;
    height: 40px;
    z-index: 15;
    .el-input__inner {
      height: 40px;
      padding: 0 16px;
      font-family: "HYQiHei-45S";
      font-size: 20px;
      color: #636c80;
      border-radius: 60px;
      background-color: rgba(9, 21, 50, 0.6);
      border: 1px solid #41577d;
      box-sizing: border-box;
    }
    .el-icon-search {
      position: absolute;
      right: 11px;
      font-size: 20px;
      cursor: pointer;
      z-index: 12;
    }
  }
  //搜搜框展示区
  .iteList {
    position: absolute;
    left: 15px;
    width: 400px;
    height: 200px;
    border-top: none;
    background-color: rgba(9, 21, 50, 0.6);
    .listItem {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding-left: 15px;
      font-size: 15px;
      color: #ccc;
      cursor: pointer;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    li:hover {
      height: 30px;
      line-height: 30px;
      padding-left: 15px;
      font-size: 15px;
      background-color: rgba(58, 122, 248, 0.5);
      cursor: pointer;
    }
  }

  //排行榜
  .ranks {
    display: flex;
    width: 100%;
    height: 70px;
    border-radius: 5px;
    border: 1px solid #2c4073;
    .ranks_text {
      width: 100px;
      height: 100%;
      padding: 9px 15px 0 21px;
      font-size: 18px;
      font-weight: 550;
      color: #fff;
      text-align: center;
      letter-spacing: 1px;
      background-color: #0c2b62;
      box-sizing: border-box;
    }
    .ranks_detail {
      display: flex;
      flex: 1;
      padding: 0px 15px;
      justify-content: space-around;
      line-height: 70px;
      border-left: 1px solid #2c4073;
      background-color: rgba(12, 29, 79, 0.5);
      .place {
        flex: 6;
        font-size: 18px;
        color: #fff;
      }
      .counts {
        flex: 4;
        font-size: 30px;
        font-weight: 600;
        text-align: center;
        color: #387dfc;
      }
      .unit {
        flex: 1;
        font-size: 15px;
        padding-top: 5px;
        color: #fff;
      }
    }
  }
  //故障排行榜
  .fault-card {
    display: flex;
    position: absolute;
    bottom: 120px;
    flex-direction: column;
    width: 200px;
    height: 160px;
    border: 1px solid #2c4075;
    background-color: rgba(12, 29, 79, 0.5);
    .el-card__header {
      height: 40px;
      padding: 0px;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      border-bottom: none;
      letter-spacing: 2px;
      background-color: #0a428d;
    }
    .el-card__body {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 0px 11px 0 15px;

      .main {
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #42587d;
        color: #13879e;
      }
      .addres {
        flex: 1;
        font-size: 18px;
        font-weight: 600;
      }
      .counts {
        display: flex;
        flex: 1;
        justify-content: flex-start;
        .number {
          flex: 3;
          font-size: 18px;
          font-weight: 600;
        }
        .unit {
          flex: 3;
          padding-top: 6px;
          color: #fff;
          font-size: 11px;
        }
      }
      .colorFrist {
        color: #b2691c;
      }
      .borderLast {
        border: none;
      }
    }
  }
  // 面包屑导航
  .el-breadcrumb {
    position: absolute;
    top: 60px;
    right: 60px;
    font-family: "HYQiHei-50S";
    font-size: 20px;
    z-index: 10;
    color: #fff;
    .el-breadcrumb__inner.is-link {
      color: #3a7af8;
    }
    .el-breadcrumb__item:last-child .el-breadcrumb__inner {
      color: #fff;
      cursor: pointer;
    }
  }

  .map {
    width: 100%;
    height: 740px;
    box-sizing: border-box;
  }
  // 地图样式
  .province_map {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>