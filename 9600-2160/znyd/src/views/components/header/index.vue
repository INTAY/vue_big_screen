<template>
  <div class="header">
    <img src="../../../assets/picture/headerlogo.png" alt="">
    <el-button type="text" class="corporateName">国网北京市电动汽车服务</el-button>

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
import Date from "../../../common/times/times";

export default {
  components: {
    Record,
    Date,
  },
};
</script>

<style lang="less" scoped>
.header {
  //设置头部的整体宽高
  position: relative;
  display: flex;
  width: 100%;
  height: 218px;
  padding-left: 150px;
  box-sizing: border-box;
  border-bottom: 2px solid #0076bc;
  background-image: linear-gradient(#0d1835 50%, #0a2f56 100%);

  img {
    margin: 54px 33px 0px 0px;
    width: 115px;
    height: 111px;
  }
  //公司名称
  .corporateName {
    font-family: "jzy.TTF";
    font-weight: 650;
    font-size: 94px;
    background: linear-gradient(#e6f3ff, #c6e3fc);
    background-clip: text;
    color: transparent;
    margin-right: 200px;
    letter-spacing: 10px;
  }
  .header_WD {
    position: absolute;
    top: -18%;
    right: 0;
    width: 1212px;
    height: 227px;
  }
}
</style>