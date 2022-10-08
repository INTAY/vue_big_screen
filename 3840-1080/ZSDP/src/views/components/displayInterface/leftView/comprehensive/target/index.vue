<template>
  <div class="target">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 三竖标记模块 -->
    <Sign />
    <!-- 模块标题 -->
    <el-button type="text" class="M_title">指标</el-button>
    <!-- 仪表盘图形 -->
    <Panel />
  </div>
</template>

<script>
import Corner from "../../../cornerLine"; //引入四角高亮模块
import Sign from "../..../../../../sign"; //引入三竖标记模块
import Panel from "./panel" //引入仪表盘图形

export default {
  components: {
    //注册引用的模块
    Corner,
    Sign,
    Panel
  }
};
</script>

<style lang="less" scoped>
.target {
  position: relative;
  width: 100%;
  height: 295px;
  padding: 21px 0px 0px 27px;
  border: 1px solid #122c56;
  background-color: rgba(11,32,66,.5);
  box-sizing: border-box;

}
</style>