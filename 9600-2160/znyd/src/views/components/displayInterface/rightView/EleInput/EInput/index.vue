<template>
  <div class="battery">
    <!-- 四角高亮模块 -->
    <Corner />
    <!-- 模块标题 -->
    <top-style nameTitle="充电电力" />
    <div class="today_main">
      <!-- 功率和充电电力模块 -->
      <Summary />
      <!-- 环形图模块 -->
      <Annular />
    </div>
  </div>
</template>

<script>
import topStyle from "@/common/topStyle/topStyle";
import Corner from "../../../cornerLine"; //引入四角高亮模块
import Summary from "./summary"; //引入总汇模块
import Annular from "./annular"; //引入环形图模块

export default {
  //注册引用的模块
  components: {
    Corner,
    Summary,
    Annular,
    topStyle,
  },
};
</script>

<style lang="less" scoped>
.battery {
  position: relative;
  width: 100%;
  height: 1026px;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);
  box-sizing: border-box;
  .today_main {
    padding: 0px 0px 0px 66px;
  }
}
</style>