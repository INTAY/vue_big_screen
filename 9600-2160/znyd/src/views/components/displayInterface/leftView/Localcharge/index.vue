<template>
  <div class="charges">
    <!-- 今日充电模块 -->
    <Today />
    <!-- 历史充电模块 -->
    <Yesterday />
  </div>
</template>

<script>
import Today from "./today/index"; //引入今日充电模块
import Yesterday from "./yesterday/index"; //引入历史充电模块

export default {
  components: {
    //注册引用的模块
    Today,
    Yesterday
  }
};
</script>

<style lang="less" scoped>
.charges {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1335px;
  height: 100%;
}
</style>