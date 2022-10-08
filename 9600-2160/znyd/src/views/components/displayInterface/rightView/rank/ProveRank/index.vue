<template>
  <div class="battery">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 模块标题 -->
    <top-style :nameTitle="title" />
    <div class="battery_main">
      <!-- 排名模块 -->
      <Ranking />
      <!-- 环形图模块 -->
      <Annular />
    </div>
  </div>
</template>

<script>
import topStyle from "@/common/topStyle/topStyle"
import Corner from "../../../cornerLine"; //引入四角高亮模块
import Ranking from "./ranking"; //引入排名模块
import Annular from "./annular"; //引入环形图模块
import { mapState } from "vuex";

export default {
  //注册引用的模块
  components: {
    Corner,
    Ranking,
    Annular,
    topStyle,
  },
  computed: {
    ...mapState(["login"]),
  },
  data() {
    return {
      title: '北京市充电排名'
    }
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
  .battery_main {
    padding: 0px 50px 0px 63px;
  }
}
</style>