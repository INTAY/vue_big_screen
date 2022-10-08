<template>
  <div class="census">
    <div class="countB" v-for="item in counts" :key="item.id">
      <div>{{item.text}}</div>
      <div class="countB_n">
        {{item.quantity}}
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
      counts: [
        { text: "工单数", quantity: 36, unit: "个" },
        { text: "客服工单数", quantity: 67, unit: "个" },
        { text: "故障工单数", quantity: 136, unit: "个" }
      ]
    };
  },
  computed: {
    ...mapState(["login", "keyer"])
  },
  created() {
    this.powerData();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async powerData() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getWorkFaultByRegion/${regId}`
        );
        
        for (let i = 0; i < this.counts.length; i++) {
          if (this.counts[i].text == "工单数") {
            this.counts[i].quantity = res.WorkSheetNum;
          }
          if (this.counts[i].text == "客服工单数") {
            this.counts[i].quantity = res.WorkSheetCustomerNum;
          }
          if (this.counts[i].text == "故障工单数") {
            this.counts[i].quantity = res.WorkSheetFaultNum;
          }
        }
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getWorkFaultByRegion/${regId}`
        );
        for (let i = 0; i < this.counts.length; i++) {
          if (this.counts[i].text == "工单数") {
            this.counts[i].quantity = res.WorkSheetNum;
          }
          if (this.counts[i].text == "客服工单数") {
            this.counts[i].quantity = res.WorkSheetCustomerNum;
          }
          if (this.counts[i].text == "故障工单数") {
            this.counts[i].quantity = res.WorkSheetFaultNum;
          }
        }
      }
    },
    deRefesh() {
      if (this.keyer.aHours == "59:59") {
        this.powerData();
      }
    }
  },
  watch: {
    initialize() {
      this.powerData();
    },
    refreshData() {
      this.powerData()
    }
  },
};
</script>

<style lang="less" scoped>
.census {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 121px;
  box-sizing: border-box;
  .countB {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 121px;
    font-family: "HYQiHei-40S";
    font-size: 24px;
    color: #fff;
    background-image: linear-gradient(#183283, rgba(9, 64, 144), #183486);
    .countB_n {
      padding-top: 5px;
      font-family: "HYQiHei-70S";
      font-size: 45px;
      .unit {
        font-family: "HYQiHei-50S";
        font-size: 20px;
      }
    }
  }
}
</style>