<template>
  <div class="counter">
    <div class="counts" v-for="item in itemCounts" :key="item.id">
      <div class="slash"></div>
      <el-button type="text" class="counts_name">{{ item.name }}</el-button>
      <ul class="counts_num">
        <li v-for="number in (item.num + '').split('')" :key="number.id">
          {{ number }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import { mapState } from "vuex";
import { LoginID } from "@/common/Mixins/launchPro";

export default {
  mixins: [LoginID],
  name: "record",
  data() {
    return {
      i: 0,
      itemCounts: [
        { name: "充电站数（座）", num: "0" },
        { name: "充电桩数（个）", num: "0" },
        { name: "自营充电桩数（个）", num: "0" },
        { name: "充电容量(kW)", num: "0" },
        { name: "累计充电电量（kW）", num: "0" },
        { name: "累计充电次数（次）", num: "0" },
        { name: "累计完成工单数（个）", num: "0" },
        { name: "总用户数（人）", num: "0" },
        { name: "活跃用户数（人）", num: "0" },
        { name: "本月增长数（人）", num: "0" },
        { name: "安全运行天数（天）", num: "0" },
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
      // 充电容量（kW）、充电桩数（个）、累计充电次数（万次）
      const { data: res } = await request(
        `/largeScreen/equipment/queryChargingInfoToday/${regId}`
      );
      for (let i = 0; i < this.itemCounts.length; i++) {
        if (this.itemCounts[i].name == "累计充电电量（kW）") {
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
        if (this.itemCounts[i].name == "累计充电次数（次）") {
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
      // 充电站数（座）、自营充电桩数（个）、充电容量(kW)
      const { data: res } = await request(
        `/largeScreen/equipment/getCountInfo/${regId}`
      );
      for (let i = 0; i < this.itemCounts.length; i++) {
        if (this.itemCounts[i].name == "充电站数（座）") {
          this.itemCounts[i].num = res.stationSum;
        }
        if (this.itemCounts[i].name == "自营充电桩数（个）") {
          this.itemCounts[i].num = res.zyStakeSum;
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
          this.itemCounts[i].num = res.stakeSum;
        }
        if (this.itemCounts[i].name == "安全运行天数（天）") {
          this.itemCounts[i].num = res.aqyxts;
        }
        if (this.itemCounts[i].name == "总用户数（人）") {
          this.itemCounts[i].num = res.yhzs;
        }
        if (this.itemCounts[i].name == "活跃用户数（人）") {
          this.itemCounts[i].num = res.hyyhs;
        }
        if (this.itemCounts[i].name == "本月增长数（人）") {
          this.itemCounts[i].num = res.byzzrs;
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
    SendRegId() {
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
  .counts {
    display: flex;
    flex: 1;
    position: relative;
    flex-direction: column;
    justify-content: center;
    padding: 0 150px 0 50px;
    height: 220px;
    font-size: 34px;
    color: #fff;
    font-family: "HYQiHei-40S";
    .counts_name {
      margin-bottom: 4px;
      font-family: "HYQiHei-65S";
      font-size: 45px;
      color: #fff;
      letter-spacing: 2px;
    }
    .counts_num {
      display: flex;

      li {
        margin-right: 8px;
        width: 60px;
        height: 93px;
        font-family: "HYQiHei-85S";
        font-size: 78px;
        text-align: center;
        border-radius: 8px;
        background-color: red;
        background: linear-gradient(#e49829 40%, #e6be1e 80%, #e6a21e 100%);
        -webkit-text-stroke: 1px #ca7933;
        text-stroke: 1px #ca7933;
      }
    }
    .slash {
      position: absolute;
      top: 0;
      right: 0;
      width: 251px;
      height: 225px;
      background: url("../../../assets/picture/top_line1.png");
    }
  }
}
</style>