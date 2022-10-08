<template>
  <div class="capacity">
    <el-button type="text" class="M_title posti">
      <span class="Topcolor">Top10</span> 热门充电站充电量
    </el-button>
    <!-- 模块标题 -->
    <top-style/>
    <!-- 排行榜 -->
    <div class="info_main">
      <HotSite />
    </div>
    
  </div>
</template>

<script>
import HotSite from "../../../../../../common/hotPile/hotSite"  //热门站点的引用
import topStyle from "@/common/topStyle/topStyle"; //引入标题

export default {
  //注册引用的模块
  components: {
    HotSite,
    topStyle
  }
};
</script>

<style lang="less" scoped>
.capacity {
  position: relative;
  width: 100%;
  height: 1096px;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);
  box-sizing: border-box;
  .posti {
    position: absolute;
    top: 2.8%;
  }
  .Topcolor {
    color: #01e9f9;
  }
  .info_main {
    padding: 0px 0px 0px 81px;
  }
}
</style>