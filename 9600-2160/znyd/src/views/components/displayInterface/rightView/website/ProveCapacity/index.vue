<template>
  <div class="capacity">
    <!-- 模块标题 -->
    <el-button type="text" class="M_title posti">
      <span class="Topcolor">Top10</span> 充电量
    </el-button>
    <top-style />
    <!-- 排行榜 -->
    <div class="capacity_main">
      <Capacitys />
    </div>
  </div>
</template>

<script>
import Capacitys from "./capacitys"; //引入排行榜模块
import topStyle from "@/common/topStyle/topStyle";

export default {
  //注册引用的模块
  components: { 
    Capacitys,
    topStyle,
  },
  data() {
    return {
      title: "历史充电",
    };
  },
};
</script>

<style lang="less" scoped>
.capacity {
  position: relative;
  width: 100%;
  height: 1096px;
  border: 1px solid #2c63b1;
  
  background-color: rgba(5, 56, 107, 0.5);
  box-sizing: border-box;
  .posti {
    position: absolute;
    top: 2.8%;
  }
  .Topcolor {
    color: #01e9f9;
  }
  .capacity_main {
    padding: 0px 0px 0px 80px;
  }
}
</style>