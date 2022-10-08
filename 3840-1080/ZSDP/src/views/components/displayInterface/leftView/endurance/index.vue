<template>
  <div class="charges">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 引入三角模块 -->
    <Sign />
    <el-button type="text" class="M_title">本次充电</el-button>
    <!-- 显示模块 -->
    <Exhibit />
    <!-- 电压图形模块 -->
    <Voltage />
  </div>
</template>

<script>
import Corner from '../../cornerLine' //引入四个角高亮模块
import Sign from '../../sign'// 引入三角模块
import Exhibit from './exhibit' //引入显示模块
import Voltage from './voltageCharts'  //引入电压图形模块
export default {
    //注册引入组件
  components: {
      Corner,
      Sign,
      Exhibit,
      Voltage
  }
};
</script>

<style lang="less" scoped>
.charges {
 position: relative;
  width: 535px;
  height: 100%;
  border: 1px solid #122c56;
  padding: 25px 0 0 25px;
  background-color: rgba(11,32,66,.5);
  box-sizing: border-box;
}

</style>