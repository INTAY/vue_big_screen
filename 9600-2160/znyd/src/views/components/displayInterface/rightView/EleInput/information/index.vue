<template>
  <div class="info">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 模块标题 -->
    <top-style nameTitle="工单信息" />
    <div class="today_main">
    <!-- 折线图 -->
    <Histograms />
    </div>
  </div>
</template>

<script>
import Corner from "../../../cornerLine"; //引入四角高亮模块
import Histograms from './histogram'; //引入折线图
import topStyle from "@/common/topStyle/topStyle";

export default {
   //注册引用的模块
  components: {
    topStyle,
    Corner,
    Histograms
  }
};
</script>

<style lang="less" scoped>
.info {
  position: relative;
  width: 100%;
  height: 821px;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);
  box-sizing: border-box;
  .today_main {
    padding: 0px 0px 0px 58px;
  }
}
</style>