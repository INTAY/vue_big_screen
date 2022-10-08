<template>
  <div class="showleft">
    <!-- 工单信息模块 -->
    <Work v-if="!(login.isSite)" />
    <!-- 充电电力模块 -->
    <Power v-if="!(login.isSite)" />
    <!-- 指标、监控与运维人员情况模块 -->
    <Comprehensive v-if="!(login.isSite)" />
    <!-- 控制按钮模块 -->
    <Control v-if="login.isSite" />
    <!-- 充电档案模块 -->
    <Archives v-if="login.isSite" />
    <!-- 充电量模块 -->
    <Localcharge v-if="login.isSite" />
    <!-- 本次充电 -->
    <Endurance v-if="login.isSite&& !controls.isFault" :class="{'Smectite_free':controls.CheckStyle}" />
    <!-- 故障模块 -->
    <Breakdown
      v-if="login.isSite&&controls.isFault"
      :class="{'Smectite_free':controls.CheckStyle}"
    />
  </div>
</template>

<script>
import Work from "./works"; //引入工单信息模块
import Power from "./power"; //引入充电电力模块
import Comprehensive from "./comprehensive"; //指标、监控与运维人员情况模块
import Control from "./control"; //引入控制模块
import Archives from "./archives"; //引入充电档案模块
import Localcharge from "./Localcharge"; //引入充电量模块
import Endurance from "./endurance"; //引入本次充电模块
import Breakdown from "./breakdown"; //故障模块
import { mapState } from "vuex"; //引入vuex数据

export default {
  components: {
    Work,
    Power,
    Comprehensive,
    Control,
    Archives,
    Localcharge,
    Endurance,
    Breakdown
  },
  data() {
    return {
      isPcRank: true,
      isShow: true
    };
  },
  computed: {
    ...mapState(["login", "controls"])
  }
};
</script>

<style lang="less" scoped>
.showleft {
  display: flex;
  justify-content: space-between;
  width: 4059px;
  height: 100%;
}
//空闲和
.Smectite_free {
  background-color: #0d1834;
  opacity: 0.8;
}
</style>