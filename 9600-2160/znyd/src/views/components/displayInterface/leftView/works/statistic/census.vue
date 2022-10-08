<template>
  <div class="census">
    <div class="countB" v-for="item in counts" :key="item.id">
      <div>{{ item.text }}</div>
      <div class="countB_n">
        {{ item.quantity }}
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
      counts: [],
    };
  },
  computed: {
    ...mapState(["login", "keyer"]),
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
        //数据赋值
        this.counts = [
          { text: "工单数", quantity: res.WorkSheetNum || "0", unit: "个" },
          { text: "客服工单数", quantity: res.WorkSheetCustomerNum || "0", unit: "个" },
          { text: "故障工单数", quantity: res.WorkSheetFaultNum || "0", unit: "个" },
        ];

      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getWorkFaultByRegion/${regId}`
        );
        //数据赋值
        this.counts = [
          { text: "工单数", quantity: res.WorkSheetNum || "0", unit: "个" },
          { text: "客服工单数", quantity: res.WorkSheetCustomerNum || "0", unit: "个" },
          { text: "故障工单数", quantity: res.WorkSheetFaultNum || "0", unit: "个" },
        ];
      }
    },
    deRefesh() {
      if (this.keyer.aHours == "59:59") {
        this.powerData();
      }
    },
  },
  watch: {
    SendRegId() {
      this.powerData();
    },
    refreshData() {
      this.powerData();
    },
  },
};
</script>

<style lang="less" scoped>
.census {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 248px;
  .countB {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 382px;
    font-family: "HYQiHei-40S";
    font-size: 36px;
    color: #fff;
    letter-spacing: 6px;
    background-image: linear-gradient(#183283, rgba(9, 64, 144), #183486);
    .countB_n {
      margin-top: 15px;
      font-family: "HYQiHei-70S";
      font-size: 69px;
      color: #f5b325;
      .unit {
        font-family: "HYQiHei-50S";
        font-size: 30px;
        color: #fff;
      }
    }
  }
}
</style>