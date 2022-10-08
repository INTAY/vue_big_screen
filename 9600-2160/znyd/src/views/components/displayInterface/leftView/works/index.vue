<template>
  <div class="works">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 模块标题 -->
    <top-style :nameTitle="title" />
    <!-- 引入主体模块 -->
    <div class="works_main">
      <Statistic />
    </div>
  </div>
</template>

<script>
import topStyle from "@/common/topStyle/topStyle";
import Corner from "../../cornerLine"; //引入四角高亮模块
import Statistic from "./statistic/index"; //引入主体模块

export default {
  //注册引用的模块
  components: {
    Corner,
    Statistic,
    topStyle,
  },
  data() {
    return {
      title: "工单信息",
    };
  },
};
</script>

<style lang="less" scoped>
.works {
  position: relative;
  width: 1325px;
  height: 100%;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);
  box-sizing: border-box;
  .works_main {
    padding: 0px 0px 0px 59px;
  }
}
</style>