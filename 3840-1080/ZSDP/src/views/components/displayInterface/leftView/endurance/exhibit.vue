<template>
  <div class="exhibit">
    <ul class="cost">
      <li v-for="item in counts" :key="item.id">
        <el-button type="text">{{item.text}}</el-button>
        <div>
          {{item.number}}
          <span>{{item.unit}}</span>
        </div>
      </li>
    </ul>
    <!-- 电池状态 -->
    <form-options :postsCustom="BATTERY_INFO" style="marginTop: 35px" />
  </div>
</template>

<script>
import formOptions from "@/common/tableList/formOptions";
import request from "@/utils/request";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import BUS from "../../../../../utils/bus";
export default {
  components: {
    formOptions,
  },
  data() {
    return {
      plieID: "", //监听标记
      counts: [
        { text: "充电电量", number: "-", unit: "kWh" },
        { text: "充电金额", number: "-", unit: "元" },
        { text: "充电费用", number: "-", unit: "元" },
        { text: "服务费用", number: "-", unit: "元" },
      ],
      //电池信息
      BATTERY_INFO: [
        { name: "SOC", number: "-" },
        { name: "充电时长", number: "-" },
        { name: "电池类型", number: "-" },
      ],
    };
  },
  computed: {
    ...mapState(["controls", "keyer"]),
  },
  created() {
    this.exhibitInfo();
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
    async exhibitInfo() {
      let staId = this.controls.PlieId;

      const { data: res } = await request(
        `/largeScreen/index/thisChargingInfo/${staId}`
      );
      // 电池信息
      this.BATTERY_INFO[0].number = res.SOC;
      this.BATTERY_INFO[1].number = res.cdsc;
      this.BATTERY_INFO[2].number = res.dclx;
      //费用信息
      this.counts[0].number = res.cddl;
      this.counts[1].number = res.cdje;
      this.counts[2].number = res.cdfy;
      this.counts[3].number = res.fwfy;
    },
    deRefesh() {
      if (this.keyer.Sec == "55") {
        this.exhibitInfo();
      }
    },
  },
  watch: {
    plieID() {
      this.exhibitInfo();
    },
  },
};
</script>

<style lang="less" scoped>
//具体费用
.exhibit {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 480px;
  height: 208px;
  margin-top: 26px;
  .cost {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 97px;
    li {
      width: 113px;
      height: 97px;
      color: #fff;
      text-align: center;
      background-image: linear-gradient(#183283, rgba(9, 64, 144), #183486);
      box-sizing: border-box;
      .el-button {
        font-family: "HYQiHei-40S";
        font-size: 22px;
        color: #fff;
      }
      div {
        font-family: "HYQiHei-70S";
        font-size: 33px;
        span {
          font-family: "HYQiHei-50S";
          font-size: 20px;
        }
      }
    }
  }
}
</style>