<template>
  <div class="header">
    <el-button type="text" class="corporateName">国网{{this.login.fullName}}电动汽车服务</el-button>
    <!-- 引入数据汇总模块  -->
    <Record />
    <!-- 时间与天气模块 -->
    <div class="header_WD">
      <Date />
    </div>
  </div>
</template>

<script>
import Record from "./record"; //引入数据汇总模块
import Date from "../../../../common/times/times";
import { mapState } from "vuex";

export default {
  components: {
    Record,
    Date,
  },
  computed: {
    ...mapState(['login'])
  },
};
</script>

<style lang="less" scoped>
.header {
  //设置头部的整体宽高
  position: relative;
  display: flex;
  width: 100%;
  height: 105px;
  padding-left: 133px;
  box-sizing: border-box;
  //公司名称
  .corporateName {
    font-family: "jzy.TTF";
    font-weight: 650;
    font-size: 47px;
    background: linear-gradient(#e9f5ff, #c6e3fc);
    background-clip: text;
    color: transparent;
    letter-spacing: 2px;
  }
  .header_WD {
    position: absolute;
    top: -31%;
    right: 65px;
    width: 410px;
    height: 105px;
  }
}
</style>