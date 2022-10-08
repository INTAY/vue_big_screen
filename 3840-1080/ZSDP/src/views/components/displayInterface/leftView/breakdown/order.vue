<template>
  <div class="order">
    <!-- 四角高亮模块 -->
    <Corner />
    <!-- 三竖标记模块 -->
    <Sign />
    <!-- title 模块 -->
    <el-button type="text" class="M_title">工单信息</el-button>
    <div class="order_main">
      <div class="message">
        <el-form :label-position="labelPosition" class="message_all">
          <el-form-item label="工单编号">
            <el-button type="text">{{this.numberID}}</el-button>
          </el-form-item>
          <el-form-item label="工单类型">
            <el-button type="text">{{this.sheetType}}</el-button>
          </el-form-item>
          <el-form-item label="工单状态">
            <el-button type="primary" class="btn_style">{{this.sheetStatus}}</el-button>
          </el-form-item>
          <el-form-item label="处理人">
            <el-button type="text">{{this.workMan}}</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="timeLine">
        <el-form :label-position="labelPosition" class="timeLine_all">
          <el-form-item label="故障时间">
            <el-button type="text">
              {{this.alarmTimeData}}
              <span class="times">{{this.alarmTimeHours}}</span>
            </el-button>
          </el-form-item>
          <el-form-item label="派单时间">
            <el-button type="text">
              {{this.dispatchTimeDate}}
              <span class="times">{{this.dispatchTimeHours}}</span>
            </el-button>
          </el-form-item>
          <el-form-item label="接单时间">
            <el-button type="text">
              {{this.receiveTimeDate}}
              <span class="times">{{this.receiveTimeHours}}</span>
            </el-button>
          </el-form-item>
          <el-form-item label="办结时间">
            <el-button type="text">
              {{this.finishTimeDate}}
              <span class="times">{{this.finishTimeHours}}</span>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Corner from "../../cornerLine"; //引入四角高亮模块
import Sign from "../../sign"; //引入三竖标记模块
import request from "@/utils/request";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import BUS from "../../../../../utils/bus";

export default {
  components: {
    Corner,
    Sign,
  },
  data() {
    return {
      plieID: "",
      labelPosition: "top",
      numberID: "",
      sheetType: "",
      sheetStatus: "",
      workMan: "",
      alarmTimeData: "",
      alarmTimeHours: "",
      dispatchTimeDate: "", //派单时间日期
      dispatchTimeHours: "", //派单时间小时
      receiveTimeDate: "", //接单时间日期
      receiveTimeHours: "", //接单时间小时
      finishTimeDate: "", //办结时间日期
      finishTimeHours: "", //办结时间小时
    };
  },
  computed: {
    ...mapState(["controls", "keyer"]),
  },
  created() {
    this.faultWorkInfo();
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
    async faultWorkInfo() {
      let devId = this.controls.stakeId;
      const { data: res } = await request(
        `/operation/workSheet/getDetailByDevId/${devId}`
      );
      this.numberID = res.workSheetDetailVo.id;
      if (res.workSheetDetailVo.sheetType == 2) {
        this.sheetType = "故障工单";
      }
      if (res.workSheetProcs[0].handleType == 1) {
        this.sheetStatus = "开始处理";
      } else if (res.workSheetProcs[0].handleType == 2) {
        this.sheetStatus = "发起退单";
      } else if (res.workSheetProcs[0].handleType == 3) {
        this.sheetStatus = "发起专派";
      } else if (res.workSheetProcs[0].handleType == 4) {
        this.sheetStatus = "发起挂起";
      } else {
        this.sheetStatus = "处理完成";
      }
      this.workMan = res.workSheetProcs[0].handleManName;
      // 时间
      //故障时间

      if (res.workSheetDevVos[0] != []) {
        this.alarmTime = res.workSheetDevVos[0].generaTime.split("T");
        this.alarmTimeData = this.alarmTime[0];
        this.alarmTimeHours = this.alarmTime[1].split(".")[0];
      } else {
        this.alarmTime = res.workSheetDevVos[1].generaTime.split("T");
        this.alarmTimeData = this.alarmTime[0];
        this.alarmTimeHours = this.alarmTime[1].split(".")[0];
      }

      //派单时间
      this.dispatchTime = res.workSheetDetailVo.dispatchTime.split("T");
      this.dispatchTimeDate = this.dispatchTime[0];
      this.dispatchTimeHours = this.dispatchTime[1].split(".")[0];
      //接单时间
      this.receiveTime = res.workSheetDetailVo.receiveTime.split("T");
      this.receiveTimeDate = this.receiveTime[0];
      this.receiveTimeHours = this.receiveTime[1].split(".")[0];
      //办结时间
      this.finishTime = res.workSheetProcs[0].handleTime.split("T");
      this.finishTimeDate = this.finishTime[0];
      this.finishTimeHours = this.finishTime[1].split(".")[0];
    },
    deRefesh() {
      if (this.keyer.Sec == "45") {
        this.faultWorkInfo();
      }
    },
  },
  watch: {
    plieID() {
      this.faultWorkInfo();
    },
  },
};
</script>

<style lang="less">
.order {
  position: relative;
  height: 423px;
  border: 1px solid #122c56;
  padding: 26px 0 0 21px;
  background-color: rgba(11, 32, 66, 0.5);
  box-sizing: border-box;
  .order_main {
    display: flex;
    width: 464px;
    height: 321px;
    margin: 29px 0 0 5px;
    // 工单信息 编号
    .message {
      flex: 1;
      .message_all {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .el-form-item {
          flex: 1;
          margin: 0 15px 0 0;
          .el-button {
            font-family: "HYQiHei-60S";
            font-size: 20px;
            padding: 8px 0;
            color: #fff;
          }
          .btn_style {
            padding: 6px 16px;
            border-radius: 35px;
          }
        }
      }
      .el-form-item__label {
        //编号 等
        font-family: "HYQiHei-40S";
        font-size: 24px;
        color: #acb9cb;
        padding: 0;
        font-weight: 300;
      }
    }
    // 处理时间线
    .timeLine {
      flex: 1;
      padding-left: 15px;
      border-left: 1px solid #677a9a;
      box-sizing: border-box;
      .timeLine_all {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .el-form-item {
          flex: 1;
          margin: 0;
          .el-button {
            font-family: "HYQiHei-60S";
            padding: 8px 0;
            font-size: 20px;
            color: #fff;
            .times {
              margin-left: 10px;
            }
          }
        }
      }
      .el-form-item__label {
        //编号 等
        font-family: "HYQiHei-40S";
        font-size: 24px;
        color: #acb9cb;
        padding: 0;
        font-weight: 300;
      }
    }
  }
}
</style>