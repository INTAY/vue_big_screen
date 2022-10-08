<template>
  <div class="charts">
    <div class="btn">
      <btnChange :btnDates="btnCounts" @checkDate="Change" />
    </div>
    <!-- 充电桩数（个） -->
    <div class="graphical">
      <Histogram
        id="service"
        :bar="barData"
        :value="valueData"
        :yAxisName="nameYaxis"
        style="width: 483px; height: 320px"
      />
    </div>
    <!-- 故障工单数 -->
    <div class="graphical">
      <faulty-work
        id="city_lines"
        :time="timeData"
        :unit="unitData"
        :opData="opDiskData"
        :lineColor="clolrLine"
        :areaColor="colorArea"
        style="height: 305px; width: 490px"
      />
    </div>
  </div>
</template>

<script>
import btnChange from "@/common/btn/btnChange";
import faultyWork from "@/common/BrokenLineGraph/historyline"; //折线图封装模块引用
import Histogram from "../../../../../../../common/histogram/histogram"; //柱状图引用
import request from "@/utils/request";
import { mapState } from "vuex";
import { refurbish, refreshData } from "@/common/Mixins/refurbishMixins";

export default {
  mixins: [refurbish, refreshData],
  components: {
    faultyWork,
    Histogram,
    btnChange,
  },
  data() {
    return {
      //统计 电量 金额
      btnCounts: [
        { text: "今日", current: true },
        { text: "本月", current: false },
        { text: "本年", current: false },
      ],
      // 充电桩数
      barData: [],
      valueData: [],
      // 故障工单数
      clolrLine: "#05e1f3",
      unitData: "故障工单数（个）\n",
      nameYaxis: "客服工单数（个）\n",
      colorArea: [
        { offset: 0, color: "#05e1f3" },
        { offset: 0.34, color: "rgba(5,255,243,0.5)" },
        { offset: 1, color: "rgba(5,255,243,0.1)" },
      ], //渐变色
      timeData: [],
      opDiskData: [],
    };
  },
  computed: {
    ...mapState(["login", "keyer"]),
  },
  created() {
    // 客服工单
    this.getHeadElementToday();
    // 故障工单
    this.BreakdownToday();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },

  methods: {
    Change(data) {
      //把所有的current 属性全部改为false
      this.btnCounts.forEach((ele, index) => {
        ele.current = false;
      });
      //再把当前的current改为true
      data.current = true;
      if (data.text == "今日") {
        // 今日充电桩数
        this.getHeadElementToday();
        // 今日故障工单数
        this.BreakdownToday();
      } else if (data.text == "本月") {
        this.getHeadElementMonth();
        // 本月故障工单数
        this.BreakdownMonth();
      } else {
        // 本年充电桩数
        this.getHeadElementYear();
        // 本年故障工单数
        this.BreakdownYear();
      }
    },
    //客服工单 今日
    async getHeadElementToday() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getCustomerSheetByRegion/${regId}/1`
        );
        let workSheetType = [];
        let workSheetNumber = [];
        for (let i = 0; i < res.length; i++) {
          workSheetType.push(res[i].code);
          workSheetNumber.push(res[i].value);
        }

        this.dictionaryConversion(workSheetType);
        this.valueData = workSheetNumber;
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getCustomerSheetByRegion/${regId}/1`
        );
        let workSheetType = [];
        let workSheetNumber = [];
        for (let i = 0; i < res.length; i++) {
          workSheetType.push(res[i].code);
          workSheetNumber.push(res[i].value);
        }
        // 字典转换
        this.dictionaryConversion(workSheetType);
        this.valueData = workSheetNumber;
      }
    },
    //客服工单 本月
    async getHeadElementMonth() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getCustomerSheetByRegion/${regId}/2`
        );
        let workSheetType = [];
        let workSheetNumber = [];
        for (let i = 0; i < res.length; i++) {
          workSheetType.push(res[i].code);
          workSheetNumber.push(res[i].value);
        }
        this.dictionaryConversion(workSheetType);
        this.valueData = workSheetNumber;
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getCustomerSheetByRegion/${regId}/2`
        );
        let workSheetType = [];
        let workSheetNumber = [];
        for (let i = 0; i < res.length; i++) {
          workSheetType.push(res[i].code);
          workSheetNumber.push(res[i].value);
        }
        this.dictionaryConversion(workSheetType);
        this.valueData = workSheetNumber;
      }
    },
    //客服工单 本年
    async getHeadElementYear() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getCustomerSheetByRegion/${regId}/3`
        );
        let workSheetType = [];
        let workSheetNumber = [];
        for (let i = 0; i < res.length; i++) {
          workSheetType.push(res[i].code);
          workSheetNumber.push(res[i].value);
        }
        this.dictionaryConversion(workSheetType);
        this.valueData = workSheetNumber;
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getCustomerSheetByRegion/${regId}/3`
        );
        let workSheetType = [];
        let workSheetNumber = [];
        for (let i = 0; i < res.length; i++) {
          workSheetType.push(res[i].code);
          workSheetNumber.push(res[i].value);
        }
        this.dictionaryConversion(workSheetType);
        this.valueData = workSheetNumber;
      }
    },

    //故障工单 今日
    async BreakdownToday() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getFaultTimeByRegion/${regId}/1`
        );
        let failWorkSheetType = [];
        let failWorkSheetNumber = [];
        for (let i = 0; i < res.length; i++) {
          failWorkSheetType.push(res[i].code);
          failWorkSheetNumber.push(res[i].value);
        }
        this.timeData = failWorkSheetType;
        this.opDiskData = failWorkSheetNumber;
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getFaultTimeByRegion/${regId}/1`
        );
        let failWorkSheetType = [];
        let failWorkSheetNumber = [];
        for (let i = 0; i < res.length; i++) {
          failWorkSheetType.push(res[i].code);
          failWorkSheetNumber.push(res[i].value);
        }
        this.timeData = failWorkSheetType;
        this.opDiskData = failWorkSheetNumber;
      }
    },
    //故障工单 本月
    async BreakdownMonth() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getFaultTimeByRegion/${regId}/2`
        );
        let failWorkSheetType = [];
        let failWorkSheetNumber = [];
        for (let i = 0; i < res.length; i++) {
          failWorkSheetType.push(res[i].code);
          failWorkSheetNumber.push(res[i].value);
        }
        this.timeData = failWorkSheetType;
        this.opDiskData = failWorkSheetNumber;
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getFaultTimeByRegion/${regId}/2`
        );
        let failWorkSheetType = [];
        let failWorkSheetNumber = [];
        for (let i = 0; i < res.length; i++) {
          failWorkSheetType.push(res[i].code);
          failWorkSheetNumber.push(res[i].value);
        }
        this.timeData = failWorkSheetType;
        this.opDiskData = failWorkSheetNumber;
      }
    },
    //故障工单 本年
    async BreakdownYear() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getFaultTimeByRegion/${regId}/3`
        );

        let failWorkSheetType = [];
        let failWorkSheetNumber = [];
        for (let i = 0; i < res.length; i++) {
          failWorkSheetType.push(res[i].code);
          failWorkSheetNumber.push(res[i].value);
        }
        this.timeData = failWorkSheetType;
        this.opDiskData = failWorkSheetNumber;
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/operation/workSheet/getFaultTimeByRegion/${regId}/3`
        );
        let failWorkSheetType = [];
        let failWorkSheetNumber = [];
        for (let i = 0; i < res.length; i++) {
          failWorkSheetType.push(res[i].code);
          failWorkSheetNumber.push(res[i].value);
        }
        this.timeData = failWorkSheetType;
        this.opDiskData = failWorkSheetNumber;
      }
    },
    //字典查询
    dictionaryConversion(val) {
      const dictionary = [
        { number: "1", name: "巡检工单" },
        { number: "2", name: "故障工单" },
        { number: "3", name: "人工录入工单" },
        { number: "4", name: "告警工单" },
        { number: "5", name: "计划巡视工单" },
        { number: "6", name: "特殊巡视工单" },
        { number: "7", name: "周期保养工单" },
        { number: "8", name: "巡视检查工单" },
        { number: "9", name: "环境维护工单" },
        { number: "10", name: "厂家协助工单" },
        { number: "11", name: "安防巡检工单" },
        { number: "12", name: "消防巡检工单" },
        { number: "13", name: "附属设施维护工单" },
        { number: "14", name: "迁移改造工单" },
        { number: "15", name: "复运工单" },
        { number: "16", name: "停运工单" },
        { number: "17", name: "缺陷工单" },
        { number: "31", name: "故障报修" },
        { number: "32", name: "服务申请" },
        { number: "33", name: "业务咨询" },
        { number: "34", name: "举报" },
        { number: "35", name: "投诉" },
        { number: "36", name: "建议" },
        { number: "37", name: "表扬" },
        { number: "38", name: "意见" },
      ];
      this.barData = [];
      for (let i = 0; i < val.length; i++) {
        for (let j = 0; j < dictionary.length; j++) {
          if (val[i] == dictionary[j].number) {
            this.barData.push(dictionary[j].name);
          }
        }
      }
    },
    //定时刷新
    deRefesh() {
      if (this.keyer.punctuality == "07:02:30") {
        this.getHeadElementMonth();
        this.getHeadElementYear();
        this.BreakdownMonth();
        this.BreakdownYear();
      } else if (this.keyer.aHours == "59:59") {
        this.getHeadElementToday();
        this.BreakdownToday();
      }
    },
  },
  watch: {
    initialize() {
      this.getHeadElementToday();
      // 故障工单
      this.BreakdownToday();
    },
    refreshData() {
      this.getHeadElementToday();
      // 故障工单
      this.BreakdownToday();
    },
  },
};
</script>

<style lang="less" scoped>
.charts {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 48px;
  //   今日 本月 本年 等
  .btn {
    position: absolute;
    top: 240px;
    right: 28px;
    z-index: 150;
  }
  .graphical {
    flex: 1;
    box-sizing: border-box;
  }
}
</style>