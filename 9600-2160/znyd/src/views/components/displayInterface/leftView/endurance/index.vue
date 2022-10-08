<template>
  <div class="charges">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <top-style nameTitle="本次充电" />
    <div class="today_main">
      <!-- 显示模块 -->
      <Exhibit />
      <!-- 电压图形模块 -->
      <Voltage />
    </div>
  </div>
</template>

<script>
import Corner from "../../cornerLine"; //引入四个角高亮模块
import Exhibit from "./exhibit"; //引入显示模块
import Voltage from "./voltageCharts"; //引入电压图形模块
import topStyle from "@/common/topStyle/topStyle";

export default {
  //注册引入组件
  components: {
    Corner,
    topStyle,
    Exhibit,
    Voltage,
  },
};
</script>

<style lang="less" scoped>
.charges {
  position: relative;
  width: 1335px;
  height: 100%;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);
  box-sizing: border-box;
  .today_main {
    padding: 0 0 0 62px;
  }
}
</style>