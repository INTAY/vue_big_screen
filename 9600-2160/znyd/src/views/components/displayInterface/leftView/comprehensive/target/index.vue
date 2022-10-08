<template>
  <div class="target">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 模块标题 -->
    <top-style :nameTitle="title" />
    <!-- 仪表盘图形 -->
    <div class="target_main">
      <Panel />
    </div>
  </div>
</template>

<script>
import topStyle from "@/common/topStyle/topStyle";
import Corner from "../../../cornerLine"; //引入四角高亮模块
import Panel from "./panel"; //引入仪表盘图形

export default {
  //注册引用的模块
  components: {
    topStyle,
    Corner,
    Panel,
  },
  data() {
    return {
      title: "指标",
    };
  },
};
</script>

<style lang="less" scoped>
.target {
  position: relative;
  width: 100%;
  height: 593px;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);
  box-sizing: border-box;
  .target_main {
    padding: 0px 0px 0px 60px;
  }
}
</style>