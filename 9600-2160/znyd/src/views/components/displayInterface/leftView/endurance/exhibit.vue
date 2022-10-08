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
import { rePlieInfo } from "@/common/Mixins/launchPile";

export default {
  mixins: [rePlieInfo],
  components: {
    formOptions,
  },
  data() {
    return {
      counts: [],
      //电池信息
      BATTERY_INFO: [],
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
  },
  methods: {
    async exhibitInfo() {
      let staId = this.controls.PlieId;
      const { data: res } = await request(
        `/largeScreen/index/thisChargingInfo/${staId}`
      );
      // 电池信息
      this.BATTERY_INFO = [
        { name: "SOC", number: res.SOC },
        { name: "充电时长", number: res.cdsc },
        { name: "电池类型", number: res.dclx },
      ],
      // this.BATTERY_INFO[0].number = res.SOC ;
      // this.BATTERY_INFO[1].number = res.cdsc ;
      // this.BATTERY_INFO[2].number = res.dclx ;
      //费用信息
      this.counts = [
        { text: "充电电量", number: res.cddl, unit: "kWh" },
        { text: "充电金额", number: res.cdje, unit: "元" },
        { text: "充电费用", number: res.cdfy, unit: "元" },
        { text: "服务费用", number: res.fwfy, unit: "元" },
      ]
    },
    deRefesh() {
      if (this.keyer.Sec == "55") {
        this.exhibitInfo();
      }
    },
  },
  watch: {
    //枪传送
    acceptId() {
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
  width: 1187px;
  height: 412px;
  margin-top: 60px;
  .cost {
    display: flex;
    justify-content: space-between;
    height: 196px;
    li {
      width: 280px;
      height: 196px;
      padding-top: 31px;
      color: #f5b325;
      text-align: center;
      background-image: linear-gradient(#183283, rgba(9, 64, 144), #183486);
      box-sizing: border-box;
      .el-button {
        font-family: "HYQiHei-40S";
        font-size: 36px;
        letter-spacing: 5px;
        color: #fff;
      }
      div {
        font-family: "HYQiHei-70S";
        font-size: 54px;
        span {
          font-family: "HYQiHei-50S";
          font-size: 30px;
          color: #fff;
        }
      }
    }
  }
}
</style>