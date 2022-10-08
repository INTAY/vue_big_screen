<template>
  <div class="capacity">
    <!-- 三竖标记模块 -->
    <Sign />
    <!-- 模块标题 -->
    <el-button type="text" class="M_title">
      <span class="Topcolor">Top10</span> 充电量
    </el-button>
    <!-- 排行榜 -->
    <Capacitys />
  </div>
</template>

<script>
import Sign from "../../../sign"; //引入三竖标记模块
import Capacitys from "./capacitys"; //引入排行榜模块

export default {
  components: {
    //注册引用的模块
    Sign,
    Capacitys
  }
};
</script>

<style lang="less" scoped>
.capacity {
  position: relative;
  width: 100%;
  height: 547px;
  padding: 32px 0px 0px 30px;
  border: 1px solid #122c56;
  background-color: rgba(11, 32, 66, 0.5);
  box-sizing: border-box;
    .Topcolor {
      color: #01e9f9;
  }
}
</style>