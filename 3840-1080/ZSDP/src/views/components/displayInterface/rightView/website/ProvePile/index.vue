<template>
  <div class="pile">
    <!-- 引入充电站模块 -->
    <stationCounts :counts="countSite" />
  </div>
</template>

<script>
import stationCounts from "@/common/siteCounts/sites";
import request from "@/utils/request";
import { mapState } from "vuex";
import { refurbish } from "@/common/Mixins/refurbishMixins";

export default {
  mixins: [refurbish],
  components: {
    stationCounts,
  },
  data() {
    return {
      countSite: [
        { name: "充电站总数", amount: "0", unit: "座" },
        { name: "城市充电站数", amount: "0", unit: "座" },
        { name: "高速快充电站", amount: "0", unit: "座" },
      ],
    };
  },
  computed: {
    ...mapState(["login", "keyer"]),
  },
  created() {
    this.allStation();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async allStation() {
      let regId = this.login.regId;
      const { data: res } = await request(
        `/largeScreen/equipment/getStaCount/${regId}`
      );
      for (let i = 0; i < this.countSite.length; i++) {
        if (this.countSite[i].name == "充电站总数") {
          this.countSite[i].amount = res.sumSite;
        }
        if (this.countSite[i].name == "城市充电站数") {
          this.countSite[i].amount = res.sumCity;
        }
        if (this.countSite[i].name == "高速快充电站") {
          this.countSite[i].amount = res.sumHigh;
        }
      }
    },
    //定时刷新
    deRefesh() {
      if (this.keyer.punctuality == "07:02:00") {
        this.allStation();
      }
    },
  },
  watch: {
    initialize() {
      this.allStation();
    },
  },
};
</script>

<style lang="less" scoped>
.pile {
  position: relative;
  width: 392px;
  height: 368px;
  padding: 38px 0px 0px 27px;
  border: 1px solid #122c56;
  background-color: rgba(11, 32, 66, 0.5);
  box-sizing: border-box;
}
</style>