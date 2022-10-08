<template>
  <div class="situation">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 三竖标记模块 -->
    <Sign />
    <!-- 模块标题 -->
    <el-button type="text" class="M_title">运维人员情况</el-button>
    <!-- 运维人员统计模块 -->
    <Altogether />
  </div>
</template>

<script>
import Corner from "../../../cornerLine"; //引入四角高亮模块
import Sign from "../..../../../../sign"; //引入三竖标记模块
import Altogether from "./altogether"; //引入总计模块

export default {
  components: {
    //注册引用的模块
    Corner,
    Sign,
    Altogether
  }
};
</script>

<style lang="less" scoped>
.situation {
  position: relative;
  width: 100%;
  height: 325px;
  padding: 27px 0px 0px 27px;
  border: 1px solid #122c56;
  background-color: rgba(11, 32, 66, 0.5);
  box-sizing: border-box;
}
</style>