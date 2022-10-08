<template>
  <div class="detail">
    <div class="de_bock" v-for="item in stateCounts" :key="item.id">
      <div class="name">{{ item.text }}</div>
      <div class="acount">
        {{ item.number }}
        <span class="unit">{{ item.unit }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import { mapState } from "vuex";
import { LoginID, refreshData } from "@/common/Mixins/launchPro";

export default {
  mixins: [LoginID, refreshData],
  data() {
    return {
      stateCounts: [],
    };
  },
  created() {
    this.monitoringData();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  computed: {
    ...mapState(["login", "keyer"]),
  },
  methods: {
    async monitoringData() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/largeScreen/index/chargePointStatusMonitoring/${regId}`
        );
        this.stateCounts = [
          { text: "使用", number: res.statusSy || "0", unit: "个" },
          { text: "离线", number: res.statusLx || "0", unit: "个" },
          { text: "故障", number: res.statusGz || "0", unit: "个" },
          { text: "待机", number: res.statusDj || "0", unit: "个" },
          { text: "锁定", number: res.usePercent || "0", unit: "个" },
        ];
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/largeScreen/index/chargePointStatusMonitoring/${regId}`
        );

        this.stateCounts = [
          { text: "使用", number: res.statusSy || "0", unit: "个" },
          { text: "离线", number: res.statusLx || "0", unit: "个" },
          { text: "故障", number: res.statusGz || "0", unit: "个" },
          { text: "待机", number: res.statusDj || "0", unit: "个" },
          { text: "锁定", number: res.usePercent || "0", unit: "个" },
        ];
      }
    },
    deRefesh() {
      if (
        this.keyer.Min == "0:20" ||
        this.keyer.Min == "2:20" ||
        this.keyer.Min == "4:20" ||
        this.keyer.Min == "6:20" ||
        this.keyer.Min == "8:20"
      ) {
        this.monitoringData();
      }
    },
  },
  watch: {
    SendRegId() {
      this.monitoringData();
    },
    refreshData() {
      this.monitoringData();
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  width: 1203px;
  height: 289px;
  margin-top: 78px;
  .de_bock {
    display: flex;
    width: 380px;
    height: 120px;
    border: 1px solid #2d5394;
    border-radius: 15px;
    text-align: center;
    line-height: 120px;
    color: #fff;
    background-color: #0b1c45;
    margin-right: 28px;
    .name {
      width: 146px;
      font-family: "HYQiHei-50S";
      font-size: 33.75px;
      letter-spacing: 3px;
      border-radius: 15px 0 0 15px;
      background: linear-gradient(-40deg, #3888e4, #6130de);
    }
    .acount {
      width: 232px;
      font-family: "HYQiHei-70S";
      font-size: 41.24px;
      letter-spacing: 0px;
      .unit {
        font-family: "HYQiHei-40S";
        font-size: 24px;
      }
    }
  }
  //第三个框“故障”所在的框表单，左边距为0;
  .de_bock:nth-child(3) {
    margin-right: 0px;
  }
}
</style>