<template>
  <div class="monitor">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 三竖标记模块 -->
    <Sign />
    <!-- 模块标题 -->
    <el-button type="text" class="M_title">充电桩状态监控</el-button>
    <!-- 使用、故障等模块 -->
    <Detail />
  </div>
</template>

<script>
import Corner from "../../../cornerLine"; //引入四角高亮模块
import Sign from "../../../sign"; //引入三竖标记模块
import Detail from "./details"; //引入使用等模块

export default {
  components: {
    //注册引用的模块
    Corner,
    Sign,
    Detail
  }
};
</script>

<style lang="less" scoped>
.monitor {
  position: relative;
  width: 100%;
  height: 284px;
  padding: 25px 0px 0px 25px;
  border: 1px solid #122c56;
  background-color: rgba(11, 32, 66, 0.5);
  box-sizing: border-box;
}
</style>