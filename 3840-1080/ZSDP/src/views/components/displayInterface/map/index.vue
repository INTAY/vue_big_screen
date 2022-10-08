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
    Map
  },
};
</script>

<style lang="less" scoped>
.map {
  position: relative;
  width: 710px;
  height: 100%;
  padding: 21px 0px 0px 40px;
  box-sizing: border-box;
}
</style>