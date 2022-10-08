<template>
  <div class="pile">
    <!-- 引入充电站模块 -->
    <stationCounts :counts="countSite" />
  </div>
</template>

<script>
import stationCounts from "@/common/siteCounts/sites";
import request from "@/utils/request";
import { mapState } from "vuex"; //引入vuex数据
import {refurbish} from "@/common/Mixins/refurbishMixins"

export default {
  mixins:[refurbish],
  components: {
    //注册引用的模块
    stationCounts,
  },
  data() {
    return {
      countSite: [
        { name: "充电站总数", amount: "0", unit: "座" },
        { name: "直流设施数", amount: "0", unit: "个" },
        { name: "交流设施数", amount: "0", unit: "个" },
      ],
    };
  },
  computed: {
    ...mapState(["login", "keyer"]),
  },
  created() {
    this.allCitySite();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async allCitySite() {
      let regId = this.login.cityRegId || this.login.regId;

      const { data: res } = await request(
        `/largeScreen/equipment/getStaCount/${regId}`
      );

      for (let i = 0; i < this.countSite.length; i++) {
        if (this.countSite[i].name == "充电站总数") {
          this.countSite[i].amount = res.sumSite;
        }
        if (this.countSite[i].name == "直流设施数") {
          this.countSite[i].amount = res.sumZL;
        }
        if (this.countSite[i].name == "交流设施数") {
          this.countSite[i].amount = res.sumJL;
        }
      }
    },
    //实时刷新 30s刷新一次
    deRefesh() {
      if (this.keyer.punctuality == "07:02:00") {
        this.allCitySite();
      }
    },
  },
  watch: {
    initialize() {
      this.allCitySite();
    },
  },
};
</script>

<style lang="less" scoped>
.pile {
  position: relative;
  width: 100%;
  height: 368px;
  padding: 38px 0px 0px 27px;
  border: 1px solid #122c56;
  background-color: rgba(11, 32, 66, 0.5);
  box-sizing: border-box;
}
</style>