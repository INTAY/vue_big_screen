<template>
  <div class="counter">
    <div class="counts" v-for="item in itemCounts" :key="item.id">
      <div class="slash"></div>
      <el-button type="text" class="counts_name">{{item.name}}</el-button>
      <el-button type="text" class="counts_num">{{item.num}}</el-button>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import { mapState } from "vuex";
import {refurbish} from "@/common/Mixins/refurbishMixins"

export default {
  mixins:[refurbish],
  data() {
    return {
      itemCounts: [
        { name: "充电站数（座）", num: 0 },
        { name: "充电桩数（个）", num: 0 },
        { name: "自营充电桩数（个）", num: 0 },
        { name: "充电容量(kW)", num: 0 },
        { name: "累计充电电量（万kW）", num: 0 },
        { name: "累计充电次数（万次）", num: 0 },
        { name: "累计完成工单数（个）", num: 0 },
        { name: "安全运行天数（天）", num: 0 },
      ],    
    };
  },
  computed: {
    ...mapState(["login", "keyer"]),
  },
  created() {
    this.HeaderCount();
    this.HeaderCountSiteS();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async HeaderCount() {
      let regId = this.login.regId;
      // 累计充电次数（万次）
      const { data: res } = await request(
        `/largeScreen/equipment/queryChargingInfoToday/${regId}`
      );
      for (let i = 0; i < this.itemCounts.length; i++) {
        if (this.itemCounts[i].name == "累计充电电量（万kW）") {
          if (res.dl < 10000) {
            this.itemCounts[i].num = (res.dl).toFixed(2);
          } else {
            this.itemCounts[i].name = "累计充电电量（万kW）";
            this.itemCounts[i].num = (res.dl / 10000).toFixed(2);
          }
        }
        if (this.itemCounts[i].name == "累计完成工单数（个）") {
          if (res.gds < 10000) {
            this.itemCounts[i].num = res.gds;
          } else {
            this.itemCounts[i].name = "累计完成工单数（万个）";
            this.itemCounts[i].num = (res.gds / 10000).toFixed(3);
          }
        }
        if (this.itemCounts[i].name == "累计充电次数（万次）") {
          if (res.cs < 10000) {
            this.itemCounts[i].num = res.cs;
          } else {
            this.itemCounts[i].name = "累计充电次数（万次）";
            this.itemCounts[i].num = (res.cs / 10000).toFixed(3);
          }
        }
      }
    },
    async HeaderCountSiteS() {
      let regId = this.login.regId;
      const { data: res } = await request(
        `/largeScreen/equipment/getCountInfo/${regId}`
      );
      for (let i = 0; i < this.itemCounts.length; i++) {
        if (this.itemCounts[i].name == "充电站数（座）") {
          this.itemCounts[i].num = res.stationSum ;
        }
        if (this.itemCounts[i].name == "自营充电桩数（个）") {
          this.itemCounts[i].num = res.zyStakeSum ;
        }

        if (this.itemCounts[i].name == "充电容量(kW)") {
           if (res.stakeCapSum < 10000) {
            this.itemCounts[i].num = (res.stakeCapSum).toFixed(2);
          } else {
            this.itemCounts[i].name = "充电容量(万kW)";
            this.itemCounts[i].num = (res.stakeCapSum / 10000).toFixed(2);
          }
        }
        if (this.itemCounts[i].name == "充电桩数（个）") {
          this.itemCounts[i].num = res.stakeSum ;
        }
        if (this.itemCounts[i].name == "安全运行天数（天）") {
          this.itemCounts[i].num = res.aqyxts ;
        }
      }
    },
    deRefesh() {
      if (this.keyer.punctuality == "07:03:30") {
        this.HeaderCountSiteS();
      } else if (this.keyer.aHours == "59:59") {
        this.HeaderCount();
      }
    },
  },
  watch: {
    initialize() {
      this.HeaderCount();
      this.HeaderCountSiteS();
    },
  },
};
</script>

<style lang="less" scoped>
.counter {
  display: flex;
  justify-content: flex-start;
  width: 2500px;
  margin-left: 42px;
  .counts {
    display: flex;
    flex: 1;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 19px 0 0;
    margin-left: 60px;
    height: 109px;
    font-size: 22.5px;
    color: #fff;
    font-family: "HYQiHei-40S";
    .counts_name {
      margin-bottom: 10px;
      padding: 0;
      font-family: "HYQiHei-40S";
      font-size: 22.5px;
      color: #c6cbd1;
    }
    .counts_num {
      margin-left: 0px;
      padding: 0;
      font-family: "HYQiHei-85S";
      font-size: 36px;
      color: #3a7af8;
    }
    .slash {
      position: absolute;
      top: 0;
      right: -15%;
      width: 100px;
      height: 113px;
      background: url("../../../../assets/picture/top_line1.png");
    }
  }
}
</style>