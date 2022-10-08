<template>
  <div class="detail">
    <div class="de_bock" v-for="item in stateCounts" :key="item.id">
      <div class="name">{{item.text}}</div>
      <div class="acount">
        {{item.number}}
        <span class="unit">{{item.unit}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import { mapState } from "vuex";
import {refurbish,refreshData} from "@/common/Mixins/refurbishMixins"
export default {
  mixins:[refurbish,refreshData],
  data() {
    return {
      stateCounts: [
        { text: "使用", number: "--", unit: "个" },
        { text: "离线", number: "--", unit: "个" },
        { text: "故障", number: "--", unit: "个" },
        { text: "待机", number: "--", unit: "个" },
        { text: "锁定", number: "--", unit: "个" },
      ],
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
        for (let i = 0; i < this.stateCounts.length; i++) {
          if (this.stateCounts[i].text == "使用") {
            this.stateCounts[i].number = res.statusSy;
          }
          if (this.stateCounts[i].text == "离线") {
            this.stateCounts[i].number = res.statusLx;
          }
          if (this.stateCounts[i].text == "故障") {
            this.stateCounts[i].number = res.statusGz;
          }
          if (this.stateCounts[i].text == "待机") {
            this.stateCounts[i].number = res.statusDj;
          }
          if (this.stateCounts[i].text == "锁定") {
            this.stateCounts[i].number = res.statusSD;
          }
        }
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/largeScreen/index/chargePointStatusMonitoring/${regId}`
        );

        for (let i = 0; i < this.stateCounts.length; i++) {
          if (this.stateCounts[i].text == "使用") {
            this.stateCounts[i].number = res.statusSy;
          }
          if (this.stateCounts[i].text == "离线") {
            this.stateCounts[i].number = res.statusLx;
          }
          if (this.stateCounts[i].text == "故障") {
            this.stateCounts[i].number = res.statusGz;
          }
          if (this.stateCounts[i].text == "待机") {
            this.stateCounts[i].number = res.statusDj;
          }
          if (this.stateCounts[i].text == "锁定") {
            this.stateCounts[i].number = res.statusSD;
          }
        }
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
    initialize() {
      this.monitoringData();
    },
    refreshData() {
      this.monitoringData();
    }
  },
};
</script>

<style lang="less" scoped>
.detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-between;
  width: 485px;
  height: 148px;
  margin-top: 35px;
  .de_bock {
    display: flex;
    width: 152px;
    height: 60px;
    margin-right:7px;
    border: 1px solid #2d5394;
    border-radius: 8px;
    text-align: center;
    line-height: 60px;
    color: #fff;
    background-color: #0b1c45;
    
    .name {
      width: 50px;
      font-family: "HYQiHei-50S";
      font-size: 20px;
      border-radius: 8px 0 0 8px;
      background: linear-gradient(-40deg, #3888e4, #6130de);
    }
    .acount {
      width: 93px;
      display: flex;
      justify-content: center;
      font-family: "HYQiHei-70S";
      font-size: 23px;
      letter-spacing: 0px;
      .unit {
        font-family: "HYQiHei-40S";
        font-size: 16px;
      }
    }
  }
}
</style>