<template>
  <div class="works">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 三竖标记模块 -->
    <Sign />
    <!-- 模块标题 -->
    <el-button type="text" class="M_title">工单信息</el-button>
    <!-- 引入主体模块 -->
    <Statistic />
  </div>
</template>

<script>
import Corner from "../../cornerLine"; //引入四角高亮模块
import Sign from "../../sign"; //引入三竖标记模块
import Statistic from "./statistic/index"; //引入主体模块

export default {
  components: {
    //注册引用的模块
    Corner,
    Sign,
    Statistic
  }
};
</script>

<style lang="less" scoped>
.works {
  position: relative;
  width: 532px;
  height: 100%;
  padding: 26px 0px 0px 22px;
  border: 1px solid #122c56;
  background-color: rgba(11, 32, 66, 0.5);
  box-sizing: border-box;
}
</style>