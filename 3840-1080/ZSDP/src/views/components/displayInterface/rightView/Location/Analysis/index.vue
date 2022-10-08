<template>
  <div class="capacity">
    <div class="Marker"></div>
    <el-button type="text" class="M_title M_padding">今年损益分析</el-button>
    <!-- 损益分析模块 -->
    <Analysis />
  </div>
</template>

<script>
import Analysis from './Analysis'
export default {
  //注册引用的模块
  components: {
    Analysis,   //损益分析模块
  }
};
</script>

<style lang="less" scoped>
.capacity {
  position: relative;
  width: 100%;
  height: 392px;
  padding-top: 17px;
  border: 1px solid #122c56;
  background-color: rgba(11,32,66,.5);
  box-sizing: border-box;
  .Marker {
    position: absolute;
    top:17px;
    left: 22px;
    width: 5px;
    height: 23px;
    background-color: #1074e3;
    border-radius: 12px;
  }
  .M_padding {
    padding-left: 25px;
  }
}
</style>