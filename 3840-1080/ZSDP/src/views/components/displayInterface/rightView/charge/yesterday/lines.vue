<template>
  <div class="line">
    <!-- 近12个月和近30天 -->
    <div class="btn">
      <btnChange :btnDates="dateBtns" @checkDate="Change" />
    </div>
    <!-- 电量、次数、金额 -->
    <btnCount :btnCounts="countBtns" @checkCount="Counts" />
    <!-- 折线图 -->
    <history
      id="break_lines"
      :time="timeData"
      :unit="unitData"
      :opData="opDiskData"
      style="height: 340px;width:495px;"
    />
  </div>
</template>

<script>
import btnChange from "@/common/btn/btnChange"; //引用30天和12个月
import btnCount from "@/common/btn/countsBtn"; //金额等切换按钮
import history from "@/common/BrokenLineGraph/historyline"; //充电折线图模块
import request from "@/utils/request";
import { mapState } from "vuex";
import {refurbish,refreshData} from "@/common/Mixins/refurbishMixins"

export default {
  mixins: [refurbish,refreshData],
  components: {
    btnChange,
    btnCount,
    history
  },
  data() {
    return {
      dateBtns: [
        { text: "近12个月", current: true },
        { text: "近30天", current: false }
      ],
      countBtns: [
        { text: "电量", current: true },
        { text: "次数", current: false },
        { text: "金额", current: false }
      ],
      timeData: [],
      opDiskData: [],
      unitData: "电量（万kWh）",
      timesData: [], //次数
      ElectricityBill: [], //电量
      payData: [] //金额
    };
  },
  computed: {
    ...mapState(["login", "keyer"])
  },
  created() {
    this.nearlyMonth();// 近12个月
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    //月份切换
    Change(data) {
      //把所有的current 属性全部改为false
      this.dateBtns.forEach((ele, index) => {
        ele.current = false;
      });
      data.current = true;
      if (data.text == "近12个月") {
        this.nearlyMonth();
      } else {
        this.nearlyDay();
      }
    },
    //统计切换 用电量 金额等
    Counts(data) {
      //把所有的current 属性全部改为false
      this.countBtns.forEach((ele, index) => {
        ele.current = false;
      });
      data.current = true;
      //判断电量 次数 金额
      if (data.text == "电量") {
        this.unitData = "电量（万kWh）\n";
        this.opDiskData = this.ElectricityBill;
      } else if (data.text == "次数") {
        this.unitData = "次数（万次）\n";
        this.opDiskData = this.timesData;
      } else {
        this.unitData = "金额（万元）\n";
        this.opDiskData = this.payData;
      }
    },
    //近12个月
    async nearlyMonth() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/largeScreen/equipment/queryChargHisLine/${regId}/1`
        );
        //时间
        let dataStr = res
          .map((obj, index) => {
            return obj.date;
          })
        this.timeData = dataStr;
        //金额
        let pay = res
          .map((obj, index) => {
            return obj.df;
          })
        this.payData = pay;
        //次数
        let times = res
          .map((obj, index) => {
            return obj.cs;
          })
        this.timesData = times;
        //电量
        let electricity = res
          .map((obj, index) => {
            return obj.dl;
          })
        this.ElectricityBill = electricity;
        this.opDiskData = electricity;
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/largeScreen/equipment/queryChargHisLine/${regId}/1`
        );
        //时间
     
        let dataStr = res
          .map((obj, index) => {
            return obj.date;
          })
        this.timeData = dataStr;
        //金额
        let pay = res
          .map((obj, index) => {
            return obj.df;
          })
        this.payData = pay;
        //次数
        let times = res
          .map((obj, index) => {
            return obj.cs;
          })
        this.timesData = times;
        //电量
        let electricity = res
          .map((obj, index) => {
            return obj.dl;
          })
        this.ElectricityBill = electricity;
        this.opDiskData = electricity;
      }
    },
    //近30天
    async nearlyDay() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/largeScreen/equipment/queryChargHisLineDay/${regId}/1`
        );
        //时间
        let dataStr = res
          .map((obj, index) => {
            return obj.date;
          })
        this.timeData = dataStr;
        //金额
        let pay = res
          .map((obj, index) => {
            return obj.df;
          })
        this.payData = pay;
        //次数
        let times = res
          .map((obj, index) => {
            return obj.cs;
          })
        this.timesData = times;
        //电量
        let electricity = res
          .map((obj, index) => {
            return obj.dl;
          })
        this.ElectricityBill = electricity;
        this.opDiskData = electricity;
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/largeScreen/equipment/queryChargHisLineDay/${regId}/1`
        );
              //时间
        let dataStr = res
          .map((obj, index) => {
            return obj.date;
          })
        this.timeData = dataStr;
        //金额
        let pay = res
          .map((obj, index) => {
            return obj.df;
          })
        this.payData = pay;
        //次数
        let times = res
          .map((obj, index) => {
            return obj.cs;
          })
        this.timesData = times;
        //电量
        let electricity = res
          .map((obj, index) => {
            return obj.dl;
          })
        this.ElectricityBill = electricity;
        this.opDiskData = electricity;
      }
    },
    deRefesh() {
      if (this.keyer.punctuality == "07:01:00") {
        this.nearlyMonth();
        this.nearlyDay();
      }
    }
  },
  watch: {
    initialize() {
      this.nearlyMonth()
    },
    refreshData() {
      this.nearlyMonth()
    }
  },
};
</script>

<style lang="less" scoped>
.btn {
  position: absolute;
  top: 24px;
  right: 24px;
}
</style>