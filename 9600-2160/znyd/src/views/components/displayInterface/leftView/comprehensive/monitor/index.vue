<template>
  <div class="monitor">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 模块标题 -->
    <top-style :nameTitle="title" />
    <!-- 使用、故障等模块 -->
    
    <div class="monitor_main">
      <Detail />
    </div>
  </div>
</template>

<script>
import topStyle from "@/common/topStyle/topStyle";
import Corner from "../../../cornerLine"; //引入四角高亮模块
import Detail from "./details"; //引入使用等模块

export default {
  //注册引用的模块
  components: {
    
    Corner,
    topStyle,
    Detail
  },
    data() {
    return {
      title: "充电桩状态监控",
    };
  },
};
</script>

<style lang="less" scoped>
.monitor {
  position: relative;
  width: 100%;
  height: 539px;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);
  box-sizing: border-box;
  .monitor_main {
    padding: 0px 0px 0px 60px;
  }
}
</style>