<template>
  <div class="capacity">
    <!-- 三竖标记模块 -->
    <Sign />
    <!-- 模块标题 -->
    <el-button type="text" class="M_title"><span class="ranKTop">Top10</span>热门站点充电量</el-button>
    <!-- 排行榜 -->
    <HotSite />
  </div>
</template>

<script>
import Sign from "../../../sign"; //引入三竖标记模块
import HotSite from "../../../../../../common/hotPile/hotSite"  //热门站点的引用
export default {
  //注册引用的模块
  components: {
    Sign,
    HotSite
  }
};
</script>

<style lang="less" scoped>
.capacity {
  position: relative;
  width: 100%;
  height: 547px;
  padding: 32px 0px 0px 30px;
  border: 1px solid #122c56;
  background-color: #0b204280;
  box-sizing: border-box;
  .ranKTop {
    color: #01e9f9;
  }
}
</style>