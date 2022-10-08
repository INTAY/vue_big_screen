<template>
  <div class="History">
    <!-- 引入四角高亮模块 -->
    <Corner />
    <!-- 模块标题 -->
    <top-style nameTitle="历史充电" />
    <div class="History_main">
      <!-- 折线图 -->
      <Lines />
    </div>
  </div>
</template>

<script>
import Corner from "../../../cornerLine"; //引入四角高亮模块
import Lines from "./lines"; //引入折线图
import topStyle from "@/common/topStyle/topStyle";

export default {
  //注册引用的模块
  components: {
    Corner,
    Lines,
    topStyle,
  },
};
</script>

<style lang="less" scoped>
.History {
  position: relative;
  width: 100%;
  height: 821px;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);
  box-sizing: border-box;
  .History_main {
    padding: 0px 50px 0px 46px;
  }
}
</style>