<template>
  <div class="battery">
    <!-- 四角高亮模块 -->
    <Corner />
    <!-- 三竖标记模块 -->
    <Sign />
    <!-- 模块标题 -->
    <el-button type="text" class="M_title">{{this.login.cityName}}充电排名</el-button>
    <!-- 排名模块 -->
    <Ranking />
    <!-- 环形图模块 -->
    <Annular />
  </div>
</template>

<script>
import Corner from "../../../cornerLine"; //引入四角高亮模块
import Sign from "../../../sign"; //引入三竖标记模块
import Ranking from "./ranking"; //引入排名模块
import Annular from "./annular"; //引入环形图模块
import { mapState } from "vuex";

export default {
  components: {
    //注册引用的模块
    Corner,
    Sign,
    Ranking,
    Annular
  },
  computed: {
    ...mapState(["login"])
  },
};
</script>

<style lang="less" scoped>
.battery {
  position: relative;
  width: 100%;
  height: 514px;
  padding: 29px 23px 0px 27px;
  border: 1px solid #122c56;
  background-color: rgba(11, 32, 66, 0.5);
  box-sizing: border-box;
}
</style>