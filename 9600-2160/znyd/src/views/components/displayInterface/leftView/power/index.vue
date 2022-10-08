<template>
  <div class="power">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 模块标题 -->
    <top-style :nameTitle="title" />

    <div class="power_main">
      <!-- 引入总汇模块 -->
      <Confluence />
      <!-- 引入折线图模块 -->
      <Electric />
    </div>
  </div>
</template>

<script>
import topStyle from "@/common/topStyle/topStyle";
import Corner from "../../cornerLine"; //引入四角高亮模块
import Confluence from "./confluence"; //引入总汇模块
import Electric from "./electric/electric"; //引入折线图模块

export default {
  //注册引用的模块
  components: {
    topStyle,
    Corner,
    Confluence,
    Electric,
  },
  data() {
    return {
      title: "充电电力",
    };
  },
};
</script>

<style lang="less" scoped>
.power {
  position: relative;
  width: 1335px;
  height: 100%;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);
  box-sizing: border-box;
  .power_main {
    padding: 0px 0px 0px 41px;
  }
}
</style>