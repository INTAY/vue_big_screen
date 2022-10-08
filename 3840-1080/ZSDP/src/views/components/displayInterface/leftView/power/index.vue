<template>
  <div class="power">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 三竖标记模块 -->
    <Sign />
    <!-- 模块标题 -->
    <el-button type="text" class="M_title">充电电力</el-button>
    <!-- 引入总汇模块 -->
    <Confluence />
    <!-- 引入折线图模块 -->
    <Electric />
  </div>
</template>

<script>
import Corner from "../../cornerLine"; //引入四角高亮模块
import Sign from "../../sign"; //引入三竖标记模块
import Confluence from "./confluence"; //引入总汇模块
import Electric from "./electric/electric"; //引入折线图模块

export default {
  components: {
    //注册引用的模块
    Corner,
    Sign,
    Confluence,
    Electric
  }
};
</script>

<style lang="less" scoped>
.power {
  position: relative;
  width: 535px;
  height: 100%;
  padding: 20px 0px 0px 25px;
  border: 1px solid #122c56;
  background-color: rgba(11,32,66,.5);
  box-sizing: border-box;
}
</style>