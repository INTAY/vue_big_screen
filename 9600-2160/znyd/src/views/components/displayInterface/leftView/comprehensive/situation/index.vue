<template>
  <div class="situation">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 模块标题 -->
    <top-style :nameTitle="title" />
    <!-- 运维人员统计模块 -->
    <div class="situation_main">
      <Altogether />
    </div>
  </div>
</template>

<script>
import topStyle from "@/common/topStyle/topStyle";
import Corner from "../../../cornerLine"; //引入四角高亮模块
import Altogether from "./altogether"; //引入总计模块

export default {
  //注册引用的模块
  components: {
    
    topStyle,
    Corner,
    Altogether,
  },
  data() {
    return {
      title: "运维人员情况",
    };
  },
};
</script>

<style lang="less" scoped>
.situation {
  position: relative;
  width: 100%;
  height: 652px;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);
  box-sizing: border-box;
  .situation_main {
    padding: 0px 0px 0px 60px;
  }
}
</style>