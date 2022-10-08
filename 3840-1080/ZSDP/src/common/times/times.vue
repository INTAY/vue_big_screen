<template>
  <div>
    <el-row>
      <el-col :span="24">
        <Time class="pos timePadding" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Time from "./timeDate"; //引入时间组件模块

export default {
  components: { Time },
};
</script>

<style lang="less" scoped>
.el-col {
  position: relative;
  height: 90px;
  .login_bgline {
    position: absolute;
    top: 40%;
    right: 0;
    width: 2px;
    height: 98px;
    background-image: url("../../assets/picture/login_line.png");
  }
  .pos {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
  }
  .timePadding {
    padding-left: 32px
  }
}
</style>