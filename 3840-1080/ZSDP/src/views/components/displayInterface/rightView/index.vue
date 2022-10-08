<template>
  <div class="showright">
    <!-- 充电排名和资产信息模块 -->
    <Rank v-if="!(login.isSite)" />
    <!-- 引入充电电力 -->
    <EleInput v-if="login.isSite" />
    <!-- 今日充电和历史充电模块 -->
    <Charge v-if="!(login.isSite)" />
    <!-- 地区充电量模块 -->
    <Localcharge v-if="login.isSite" />
    <!-- 充电站数和充电量模块 -->
    <Site v-if="!(login.isSite)" />
    <!-- 充电桩信息模块 -->
    <Location v-if="login.isSite" />
  </div>
</template>

<script>
import Rank from "./rank"; //引入充电排名和资产信息模块
import Charge from "./charge"; //引入今日充电和历史充电模块
import Site from "./website"; //引入充电站数和充电量模块
import Location from "./Location"; //引入充电桩信息模块
import EleInput from "./EleInput"; //引入充电电力
import Localcharge from "./Localcharge"; //引入地区充电量模块
import { mapState } from "vuex"; //引入vuex数据


export default {
  components: {
    Rank,
    Charge,
    Site,
    Location,
    EleInput,
    Localcharge
  },
  data() {
    return {
      isPcRank: true,
      countryName:''
    };
  },
  computed: {
    ...mapState(["login"])
  },
};
</script>

<style lang="less" scoped>
.showright {
  display: flex;
  justify-content: space-between;
  width: 1485px;
  height: 100%;
}
</style>