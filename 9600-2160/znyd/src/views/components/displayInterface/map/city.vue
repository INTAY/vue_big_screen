<template>
  <div class="map">
    <!-- 充电分布、充电次数、工单分布 -->
    <div class="btn">
      <btnChange :btnDates="btnObjects" @checkDate="checkOut" />
    </div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" v-if="login.isCity">
      <el-breadcrumb-item
        :to="{ path: '/interface' }"
        @click.native="skip"
        v-if="login.level == 1"
      >北京市</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/interface' }" v-if="login.level == 2">北京市</el-breadcrumb-item>
      <el-breadcrumb-item @click.native="backForword">{{login.cityName}}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 地图模块 -->
    <baidu-map
      class="limit"
      :zoom="map.zoom"
      :mapStyle="mapStyle"
      :center="{lng: map.center.lng, lat: map.center.lat}"
      :scroll-wheel-zoom="true"
      @ready="onBaiduMapReady"
      @tilesloaded="hideLogo"
    >
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type>
      <bml-marker-clusterer :averageCenter="true">
        <bm-marker
          v-for="(marker,index) in markers"
          :key="index"
          :position="{lng:marker.lng,lat:marker.lat}"
          :icon="{url:require('../../../../assets/picture/icon1.png'),size:{width:39,height:44}}"
          @click="siteInfoOpen(marker)"
        ></bm-marker>
      </bml-marker-clusterer>
      <bml-heatmap :data="heatMapData" :max="100" :radius="20"></bml-heatmap>
      <bm-marker
        :position="autoLocationPoint"
        :icon="{url: require('../../../../assets/picture/signTitle.png'), size: {width: 88, height: 88,}}"
        v-if="initLocation"
      ></bm-marker>
    </baidu-map>
  </div>
</template>

<script>
import request from "@/utils/request";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import BUS from "@/utils/bus";
import {
  BaiduMap,
  BmControl,
  BmView,
  BmAutoComplete,
  BmLocalSearch,
  BmMarker,
  BmGeolocation,
  BmlMarkerClusterer,
  BmPointCollection,
  BmIcon,
  BmInfoWindow,
  BmlHeatmap,
  BmMapType,
} from "vue-baidu-map";
import btnChange from "@/common/btn/btnChange";

export default {
  components: {
    BaiduMap,
    BmControl,
    BmView,
    BmAutoComplete,
    BmLocalSearch,
    BmMarker,
    BmGeolocation,
    BmlMarkerClusterer,
    BmPointCollection,
    BmIcon,
    BmInfoWindow,
    BmlHeatmap,
    BmMapType,
    btnChange,
  },
  data() {
    return {
      map: {
        center: { lng: null, lat: null }, //'南京市',
        zoom: 10,
        ltlon: "", //地图左上角经度
        ltlat: "", //地图左上角纬度
        rblon: "", //地图右下角经度
        rblat: "", //地图右下角纬度
      },
      btnObjects: [
        { text: "充电站分布", current: true },
        { text: "充电量/次数分布", current: false },
        { text: "工单分布", current: false },
      ],
      //热力图
      heatMapData: [],
      zoneGeoPoints: [{ lng: null, lat: null }],
      markers: [],
      //地图样式
      mapStyle: {
        styleJson: [
          {
            featureType: "land", //调整土地颜色
            elementType: "geometry",
            stylers: {
              color: "#081d3f",
            },
          },
          {
            featureType: "building", //调整建筑物颜色
            elementType: "geometry",
            stylers: {
              color: "#04406F",
            },
          },
          {
            featureType: "building", //调整建筑物标签是否可视
            elementType: "labels",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "highway", //调整高速道路颜色
            elementType: "geometry",
            stylers: {
              color: "#015B99",
            },
          },
          {
            featureType: "highway", //调整高速名字是否可视
            elementType: "labels",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "arterial", //调整一些干道颜色
            elementType: "geometry",
            stylers: {
              color: "#003051",
            },
          },
          {
            featureType: "arterial",
            elementType: "labels",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "green",
            elementType: "geometry",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: {
              color: "#044161",
            },
          },
          {
            featureType: "subway", //调整地铁颜色
            elementType: "geometry.stroke",
            stylers: {
              color: "#003051",
            },
          },
          {
            featureType: "subway", //地铁的名字是否显示
            elementType: "labels",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "railway", //铁路系统是否显示
            elementType: "geometry",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "railway", //铁路的名字
            elementType: "labels",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "all", //调整所有的标签的边缘颜色
            elementType: "labels.text.stroke",
            stylers: {
              color: "#313131",
            },
          },
          {
            featureType: "all", //调整所有标签的填充颜色
            elementType: "labels.text.fill",
            stylers: {
              color: "#FFFFFF",
            },
          },
          {
            featureType: "manmade",
            elementType: "geometry",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "manmade",
            elementType: "labels",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "local",
            elementType: "geometry",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "local",
            elementType: "labels",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "subway",
            elementType: "geometry",
            stylers: {
              lightness: -65,
            },
          },
          {
            featureType: "railway",
            elementType: "all",
            stylers: {
              lightness: -40,
            },
          },
          {
            featureType: "boundary",
            elementType: "geometry",
            stylers: {
              color: "#8b8787",
              weight: "1",
              lightness: -29,
            },
          },
        ],
      },
      autoLocationPoint: { lng: null, lat: null }, //定位的地点
      initLocation: null,
    };
  },
  computed: {
    ...mapState(["login", "maps", "keyer"]),
  },
  created() {
    this.AccuratePositioning();
  },
  mounted() {
    this.initLocation = this.maps.isMark

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
      "setProveData",
      "setMarkersData",
      "setStaId",
      "setPliId",
      "setMapLat",
      "setMapLng",
      "setIsMark",
      "setFirstCheck"
    ]),
    //充电信息按钮切换
    checkOut(data) {
      this.btnObjects.forEach((ele, index) => {
        ele.current = false;
      });
      data.current = true;
      if (data.text == "充电站分布") {
        this.mapData();
      } else if (data.text == "充电量/次数分布") {
        this.rechargNumber();
      } else {
        this.rechargWorkers();
      }
    },
    // ready事件：在你需要二次开发或手动控制其子组件，可以使用在此事件中使用返回的 BMap 类和 map 实例进行手动控制
    onBaiduMapReady({ BMap, map }) {
      this.mapData();
    },
    //精准定位
    AccuratePositioning() {
      this.autoLocationPoint = {
        lng: this.maps.mapLng,
        lat: this.maps.mapLat,
      };
      this.map.center.lng = this.maps.mapLng
      this.map.center.lat = this.maps.mapLat
    },
    //点击标记按钮
    siteInfoOpen(val) {
      BUS.$emit("launch", val);
      this.setSite(true);
      this.setStaId(val.id);
      this.setFirstCheck(true)
    },
    //市级地图数据请求
    async mapData() {
      let id = this.login.cityRegId || this.login.regId;
      const { data: res } = await request(
        `/property/station/getLngAndLat/${id}`
      );

      //站点赋值
      this.heatMapData = [];
      this.markers = res;
      //自动确定中心
      this.map.center.lng = this.maps.isCenter[0];
      this.map.center.lat = this.maps.isCenter[1];
    },
    //工单分布
    async rechargWorkers() {
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
      //清空站点
      this.markers = [];
      //数据赋值给热力图
      this.heatMapData = res;
    },
    //充电电量~充电次数分布
    async rechargNumber() {
      let regId = this.login.cityRegId || this.login.regId;
      const { data: res } = await request(
        `/largeScreen/mapLargeScreen/getMapChargCount/${regId}`
      );
      //清空站点
      this.markers = [];
      let addrData = [];
      for (let i = 0; i < res.length; i++) {
        let values = res[i].dl + "/" + res[i].cs;
        addrData.push({
          name: res[i].name,
          regId: res[i].regId,
          value: values,
        });
      }
      this.heatMapData = addrData;
    },
    //-----------------面包屑导航----------------
    // 跳转到市级页面
    backForword() {
      this.setProve(false);
      this.setCity(true);
      this.setSite(false);
      //清空经纬度
      this.setMapLng("")
      this.setMapLat("")
      this.setIsMark(false)
    },
    // 跳转到省级
    skip() {
      this.setProve(true);
      this.setCity(false);
      this.setSite(false);
      //市级页面跳转到省级页面的数据刷新锚点
      BUS.$emit("refreshData", false);
    },
    deRefesh() {
      if (this.keyer.punctuality == "07:00:00") {
        this.mapData();
      }
    },
    //去除版本信息号
    hideLogo() {
      for (
        let i = 0;
        i < document.getElementsByClassName("anchorBL").length;
        i++
      ) {
        document.getElementsByClassName("anchorBL")[i].style.display = "none";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.map {
  width: 100%;
  height: 100%;
  .limit {
    width: 100%;
    height: 110%;
  }
  .btn {
    position: absolute;
    top: 38px;
    left: 532px;
  }
}
</style>