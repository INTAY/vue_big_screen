<template>
  <div class="archives">
    <!-- 充电桩档案模块 -->
    <Record />
    <!-- 引入收益损分析模块 -->
    <Analytical />
  </div>
</template>

<script>
import Analytical from './analytical' //引入收益损分析模块
import Record from './record' //引入充电桩档案模块
export default {
  //注册引用的模块
  components: {
    Analytical,
    Record

  }
};
</script>

<style lang="less" scoped>
.archives {
  display: flex;
  flex-direction: column;
  justify-content: space-between;;
  width: 371px;
  height: 100%;
  box-sizing: border-box;
}
</style>