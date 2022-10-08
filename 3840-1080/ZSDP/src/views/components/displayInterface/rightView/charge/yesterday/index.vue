<template>
  <div class="History">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 三竖标记模块 -->
    <Sign />
    <!-- 模块标题 -->
    <el-button type="text" class="M_title">历史充电</el-button>
    <!-- 折线图 -->
    <Lines />
  </div>
</template>

<script>
import Corner from "../../../cornerLine"; //引入四角高亮模块
import Sign from "../../../sign"; //引入三竖标记模块
import Lines from "./lines"; //引入折线图

export default {
  components: {
    //注册引用的模块
    Corner,
    Sign,
    Lines
  }
};
</script>

<style lang="less" scoped>
.History {
  position: relative;
  width: 100%;
  height: 410px;
  padding: 25px 30px 0px 25px;
  border: 1px solid #122c56;
  background-color: rgba(11, 32, 66, 0.5);
  box-sizing: border-box;
}
</style>