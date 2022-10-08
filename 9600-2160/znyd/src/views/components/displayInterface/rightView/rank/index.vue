<template>
  <div class="rank">
    <!-- 省级充电量排名模块 -->
    <ProveRank v-if="login.isProve" />
    <!-- 市级充电量排名模块 -->
    <CityRank v-if="login.isCity" />
    <!-- 省级资产信息模块 -->
    <ProveInfo v-if="login.isProve" />
    <!-- 市级资产信息模块 -->
    <CityInfo v-if="login.isCity" />
  </div>
</template>

<script>
import ProveRank from "./ProveRank"; //引入省级充电量排名模块
import ProveInfo from "./ProveInfo"; //引入省级资产信息模块
import CityInfo from "./CityInfo"; //市级资产信息模块
import CityRank from "./CityRank"; //市级充电量排名模块
import { mapState } from "vuex"; //引入vuex数据

export default {
  components: {
    ProveRank,
    ProveInfo,
    CityInfo,
    CityRank
  },
  computed: {
    ...mapState(["login"])
  }
};
</script>


<style lang="less" scoped>
.rank {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1345px;
  height: 100%;
}
</style>