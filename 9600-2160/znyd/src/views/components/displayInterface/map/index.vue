<template>
  <div class="map">
    <!-- 三竖标记模块 -->
    <Sign />
    <!-- 模块标题 -->
    <el-button type="text" class="M_title">充电情况分布统计</el-button>
    <!-- 地图模块 -->
    <Map />
  </div>
</template>

<script>
import Sign from "../sign"; //引入三竖标记模块
import Map from "./map"; //引入地图模块

export default {
  components: {
    Sign,
    Map,
  },
};
</script>

<style lang="less" scoped>
.map {
  position: relative;
  width: 1752px;
  height: 100%;
  padding: 50px 0px 0px 100px;
  box-sizing: border-box;
  background: linear-gradient(#0c1d3e 10%, #073069 45%, #0c1d3e 100%);
  box-shadow: 0px -15px 15px 0px #0c1d3e, -4px 1px 6px 0px #0c1d3e,
    10px 0px 10px 0px #0c1d3e, 0px 10px 10px 0px #0c1d3e;
}
</style>