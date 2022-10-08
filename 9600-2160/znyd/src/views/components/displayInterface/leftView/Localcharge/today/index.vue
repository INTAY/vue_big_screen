<template>
  <div class="today">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 模块标题 -->
    <top-style nameTitle="今日充电" />
    <div class="today_main">
      <!-- 引入总汇模块 -->
      <Confluence />
      <!-- 充电电量折线图 -->
      <Quantity />
    </div>
  </div>
</template>

<script>
import Corner from "../../../cornerLine"; //引入四角高亮模块
import topStyle from "@/common/topStyle/topStyle";
import Confluence from "./confluence"; //引入总汇模块
import Quantity from "./quantity"; //引入充电电量折线图

export default {
  //注册引用的模块
  components: {
    Corner,
    topStyle,
    Confluence,
    Quantity,
  },
};
</script>

<style lang="less" scoped>
.today {
  position: relative;
  width: 100%;
  height: 1026px;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);
  box-sizing: border-box;
  .today_main {
    padding: 0px 0px 0px 75px;
  }
}
</style>