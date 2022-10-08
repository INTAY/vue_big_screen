<template>
  <div class="panel">
    <div class="promptness" id="dashboard"></div>
  </div>
</template>

<script>
import request from "@/utils/request";
import { panelDatas } from "@/utils/panel";
import { mapState } from "vuex";
import {refurbish,refreshData} from "@/common/Mixins/refurbishMixins"
export default {
  mixins: [refurbish,refreshData],
  data() {
    return {
      panelCounts: [
        {
          name: "工单处理及时率",
          value: 1,
          unit: "%",
          pos: ["16.6%", "25%"],
          range: [80, 100],
        },
        {
          name: "充电设施可用率",
          value: 2,
          unit: "%",
          pos: ["49.8%", "25%"],
          range: [80, 100],
        },
        {
          name: "充电设施在线率",
          value: 92,
          unit: "%",
          pos: ["83%", "25%"],
          range: [80, 100],
        },
      ],
    };
  },
  computed: {
    ...mapState(["login", "keyer"]),
  },
  created() {
    this.Indicators();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    myCharts() {
      //循环数组 ,把id给循环出来
      let myPanel = this.$echarts.init(document.getElementById("dashboard"));
      let panelCounts = this.panelCounts;

      const option = {
        series: panelDatas(panelCounts),
      };
      myPanel.setOption(option);
    },
    // 数据请求
    async Indicators() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/largeScreen/index/getIndex/${regId}`
        );
        for (let i = 0; i < this.panelCounts.length; i++) {
          if (this.panelCounts[i].name == "工单处理及时率") {
            this.panelCounts[i].value = res.gdcl;
          }
          if (this.panelCounts[i].name == "充电设施可用率") {
            this.panelCounts[i].value = res.lyl;
          }
          if (this.panelCounts[i].name == "充电设施在线率") {
            this.panelCounts[i].value = res.zxl;
          }
        }
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;

        const { data: res } = await request(
          `/largeScreen/index/getIndex/${regId}`
        );

        for (let i = 0; i < this.panelCounts.length; i++) {
          if (this.panelCounts[i].name == "工单处理及时率") {
            this.panelCounts[i].value = res.gdcl;
          }
          if (this.panelCounts[i].name == "充电设施可用率") {
            this.panelCounts[i].value = res.lyl;
          }
          if (this.panelCounts[i].name == "充电设施在线率") {
            this.panelCounts[i].value = res.zxl;
          }
        }
      }

      //调用仪表盘
      this.myCharts();
    },
    //定时刷新
    deRefesh() {
      if (this.keyer.punctuality == "07:02:30") {
        this.Indicators();
      }
    },
  },
  watch: {
    initialize() {
      this.Indicators();
    },
    refreshData() {
      this.Indicators();
    }
  },
};
</script>

<style lang="less" scoped>
.panel {
  display: flex;
  width: 474px;
  justify-content: space-between;
  height: 400px;
  .promptness {
    width: 100%;
    height: 100%;
  }
}
</style>