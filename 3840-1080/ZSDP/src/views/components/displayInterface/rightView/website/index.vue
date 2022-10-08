<template>
  <div class="wesite">
    <!-- 引入省级充电桩数 -->
    <ProvePile v-if="login.isProve" />
    <!-- 引入省级充电量 -->
    <ProveCapacity v-if="login.isProve" />
    <!-- 引入市级充电桩数模块 -->
    <CityPile v-if="login.isCity" />
    <!-- 引入市级充电量模块 -->
    <CityCapacity v-if="login.isCity" />
  </div>
</template>

<script>
import ProvePile from "./ProvePile"; //引入省级充电桩数模块
import ProveCapacity from "./ProveCapacity"; //引入省级充电量模块
import CityPile from "./CityPile"; //引入市级电桩数模块
import CityCapacity from "./CityCapacity"; //引入市级充电量模块
import { mapState } from "vuex"; //引入vuex数据

export default {
  components: {
    ProvePile,
    ProveCapacity,
    CityPile,
    CityCapacity
  },
  computed: {
    ...mapState(["login"])
  },
  created() {
    
  }
};
</script>

<style lang="less" scoped>
.wesite {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 392px;
  height: 100%;
}
</style>