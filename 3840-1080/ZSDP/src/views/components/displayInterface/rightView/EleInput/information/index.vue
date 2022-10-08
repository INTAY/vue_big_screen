<template>
  <div class="info">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 三竖标记模块 -->
    <Sign />
    <!-- 模块标题 -->
    <el-button type="text" class="M_title">工单信息</el-button>
    <!-- 折线图 -->
    <Histograms />
  </div>
</template>

<script>
import Corner from "../../../cornerLine"; //引入四角高亮模块
import Sign from "../../../sign"; //引入三竖标记模块
import Histograms from './histogram'; //引入折线图

export default {
  components: {
    //注册引用的模块
    Corner,
    Sign,
    Histograms
  }
};
</script>

<style lang="less" scoped>
.info {
  position: relative;
  width: 100%;
  height: 411px;
  padding: 25px 0px 0px 25px;
  border: 1px solid #122c56;
  background-color: rgba(11,32,66,.5);
  box-sizing: border-box;
}
</style>