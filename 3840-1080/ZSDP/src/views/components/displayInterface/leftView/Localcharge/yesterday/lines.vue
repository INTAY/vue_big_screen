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
      id="city_lines"
      :time="timeData"
      :unit="unitData"
      :opData="opDiskData"
      style="height: 300px;paddingTop: 30px;width:490px;"
    />
  </div>
</template>

<script>
import btnChange from "@/common/btn/btnChange"; //引用30天和12个月
import btnCount from "@/common/btn/countsBtn"; //金额等切换按钮
import history from "@/common/BrokenLineGraph/historyline"; //历史充电
import request from "@/utils/request";
import { mapState } from "vuex";
import BUS from "../../../../../../utils/bus";

export default {
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
      unitData: "电量（万kWh）\n",
      timesData: [], //次数
      ElectricityBill: [], //电量
      payData: [], //金额
      timeData: [],
      opDiskData: [],
      plieID: "", //监听标记
    };
  },
  computed: {
    ...mapState(["controls", "keyer"])
  },
  created() {
    this.nearlyMonthPile();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
        //监听标记
    BUS.$on("skip", (val) => {
      this.plieID = val;
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
        this.nearlyMonthPile();
      } else {
        this.nearlyDayPile();
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
    async nearlyMonthPile() {
      let regId = this.controls.PlieId;
      
      const { data: res } = await request(
        `/largeScreen/equipment/queryChargHisLine/${regId}/3`
      );
        
      //时间
      let dataStr = res
        .map((obj, index) => {
          return obj.date;
        });
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
    },
    async nearlyDayPile() {
      let regId = this.controls.PlieId;
      const { data: res } = await request(
        `/largeScreen/equipment/queryChargHisLineDay/${regId}/3`
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
    },
    deRefesh() {
      if (this.keyer.punctuality == "07:04:00") {
        this.nearlyMonthPile();
        this.nearlyDayPile();
      }
    }
  },
  watch: {
    plieID() {
      this.nearlyMonthPile();
    }
  }
};
</script>

<style lang="less" scoped>
.btn {
  position: absolute;
  top: 20px;
  right: 18px;
}
</style>