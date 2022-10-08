<template>
  <div class="battery">
    <!-- 四角高亮模块 -->
    <Corner />
    <!-- 模块标题 -->
    <top-style :nameTitle="this.login.cityName+'充电排名'" />
    <div class="info_main">
      <!-- 排名模块 -->
      <Ranking />
      <!-- 环形图模块 -->
      <Annular />
    </div>
  </div>
</template>

<script>
import Corner from "../../../cornerLine"; //引入四角高亮模块
import Ranking from "./ranking"; //引入排名模块
import Annular from "./annular"; //引入环形图模块
import topStyle from "@/common/topStyle/topStyle"; //引入标题
import { mapState } from "vuex"; //引入vuex数据

export default {
  //注册引用的模块
  components: {
    topStyle,
    Corner,
    Ranking,
    Annular,
  },
  computed: {
    ...mapState(["login"]),
  },
};
</script>

<style lang="less" scoped>
.battery {
  position: relative;
  width: 100%;
  height: 1026px;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);
  box-sizing: border-box;
  .info_main {
    padding: 0px 50px 0px 63px;
  }
}
</style>