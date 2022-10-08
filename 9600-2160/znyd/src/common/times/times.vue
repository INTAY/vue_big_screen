<template>
  <div>
    <el-row>
      <el-col :span="24">
        <Time class="pos login_time" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Time from "./timeDate"; //引入时间组件模块

export default {
  components: {
    Time
  }
};
</script>

<style lang="less" scoped>
.el-col {
  position: relative;
  height: 219px;
  .pos {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%);
  }
}
</style>