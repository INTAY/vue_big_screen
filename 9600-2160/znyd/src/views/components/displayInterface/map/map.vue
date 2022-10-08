<template>
  <div class="pMap">
    <!-- 地图模块 -->
    <div class="map">
      <!-- 省级 -->
      <Province v-if="login.isProve" ref="childMap" />
      <!-- 市级 -->
      <City v-if="login.isCity" :cityData="database" />
    </div>
  </div>
</template>

<script>
import City from "./city"; //引入地级市模块
import Province from "./provincial"; //引入省级模块
import btnChange from "../../../../common/btn/btnChange";
import request from "@/utils/request";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import { LoginID } from "@/common/Mixins/launchPro";
import BUS from "@/utils/bus";

export default {
  mixins: [LoginID],
  components: {
    City,
    Province,
    btnChange,
  },
  data() {
    return {
      database: [],
      itemList: [],
    };
  },
  computed: {
    ...mapState(["login", "maps", "keyer"]),
  },
  created() {
    this.siteData();
    this.proveSiteGroup();
  },
  mounted() {
    this.proveSiteGroup();
  },
  methods: {
    ...mapMutations([
      "setProve",
      "setCity",
      "setSite",
      "setMarkersData",
      "setProveData",
      "setSearchMessage",
      "setCityRegId",
      "setHotMapData",
    ]),
    //充电站分布
    async proveSiteGroup() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/largeScreen/mapLargeScreen/getMapStaCount/${regId}`
        );
        this.setProveData(res);
        this.$refs.childMap.myProvince();
        BUS.$emit("mapPro","resData")
      } else if (this.login.isCity) {
        let id = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/property/station/getLngAndLat/${id}`
        );
        //站点数据
        this.setHotMapData(res);
      }
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
      this.setProveData(addrData);
      this.$refs.childMap.myProvince();
      
    },
    //充电电量/充电次数分布
    async rechargNumber() {
      if (this.login.isProve) {
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
        this.setProveData(addrData);
        this.$refs.childMap.myProvince();
      }
    },
    //工单信息
    async rechargWorkers() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getRegSheetByRegId/${regId}`
        );
        this.setProveData(res);
        this.$refs.childMap.myProvince();
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getStaSheetByRegId/${regId}`
        );
        let hotMapData = [];
        for (let i = 0; i < res.length; i++) {
          hotMapData.push({
            lat: res[i].lat,
            lng: res[i].lng,
            count: res[i].value,
          });
        }
        this.setHotMapData(hotMapData);
      }
    },
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
          name: res[i].staName,
          address: res[i].addr,
        });
      }
    },

    // 跳转到市级页面
    backForword() {
      this.setProve(false);
      this.setCity(true);
      this.setSite(false);
    },
    // 跳转到省级
    skip() {
      this.setProve(true);
      this.setCity(false);
    },
    deRefesh() {
      if (this.login.isProve) {
        if (this.keyer.punctuality == "07:06:00") {
          this.faultSiteCityGroup();
          this.rechargNumber();
          this.rechargWorkers();
        }
      }
    },
  },

};
</script>

<style lang="less">
.pMap {
  width: 1630px;
  height: 1600px;
  padding-top: 100px;
  box-sizing: border-box;
  // 搜索框
  .demo-input-suffix {
    position: relative;
    position: absolute;
    top: 200px;
    left: 615px;
    width: 876px;
    height: 80px;
    z-index: 15;
    .el-input__inner {
      height: 86px;
      padding: 0 30px;
      font-family: "HYQiHei-45S";
      font-size: 33.75px;
      color: #636c80;
      letter-spacing: 3px;
      border-radius: 60px;
      background-color: rgba(9, 21, 50, 0.6);
      border: 2px solid #41577d;
      box-sizing: border-box;
    }
    .el-icon-search {
      position: absolute;
      top: 25px;
      right: 80px;
      font-size: 53px;
    }
  }
  //搜搜框展示区
  .iteList {
    position: absolute;
    left: 45px;
    width: 800px;
    height: 500px;
    border-top: none;
    background-color: rgba(9, 21, 50, 0.6);
    .listItem {
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding-left: 30px;
      font-size: 23px;
      color: #ccc;
      cursor: pointer;
    }
    li:hover {
      height: 50px;
      line-height: 50px;
      padding-left: 30px;
      font-size: 23px;
      background-color: rgba(58, 122, 248, 0.5);
      cursor: pointer;
    }
  }
  // 面包屑导航
  .el-breadcrumb {
    position: absolute;
    top: 220px;
    right: 150px;
    letter-spacing: 5px;
    font-family: "HYQiHei-50S";
    font-size: 33.75px;
    z-index: 10;
    color: #fff;
    .el-breadcrumb__inner.is-link {
      color: #3a7af8;
    }
    .el-breadcrumb__item:last-child .el-breadcrumb__inner {
      color: #fff;
    }
  }
  .map {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  // 地图样式
  .province_map {
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