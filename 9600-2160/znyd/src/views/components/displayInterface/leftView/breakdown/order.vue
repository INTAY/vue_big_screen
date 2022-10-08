<template>
  <div class="order">
    <!-- 四角高亮模块 -->
    <Corner />
    <!-- title 模块 -->
    <top-style nameTitle="工单信息" />
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
            <el-button type="primary" class="btn_style" v-if="btnStstus">{{this.sheetStatus}}</el-button>
          </el-form-item>
          <el-form-item label="处理人">
            <el-button type="text">{{this.workMan}}</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="timeLine">
          <el-form :label-position="labelPosition" class="timeLine_all">
          <el-form-item label="故障时间">
            <el-button type="text">{{this.alarmTimeData}}<span class="times">{{this.alarmTimeHours}}</span></el-button>
          </el-form-item>
          <el-form-item label="派单时间">
            <el-button type="text">{{this.dispatchTimeDate}}<span class="times">{{this.dispatchTimeHours}}</span></el-button>
          </el-form-item>
          <el-form-item label="接单时间">
            <el-button type="text">{{this.receiveTimeDate}}<span class="times">{{this.receiveTimeHours}}</span></el-button>
          </el-form-item>
          <el-form-item label="办结时间">
            <el-button type="text">{{this.finishTimeDate}}<span class="times">{{this.finishTimeHours}}</span></el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Corner from "../../cornerLine"; //引入四角高亮模块
import topStyle from "@/common/topStyle/topStyle";
import request from "@/utils/request";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
export default {
  components: {
    Corner,
    topStyle
  },
  data() {
    return {
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
      btnStstus: false,
    };
  },
  computed: {
    ...mapState(["controls", "keyer"])
  },
  created() {
    this.faultWorkInfo();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async faultWorkInfo() {
      let devId = this.controls.stakeId;
      const { data: res } = await request(
        `/operation/workSheet/getDetailByDevId/${devId}`
      );
      this.numberID = res.workSheet.id;
      //工单状态是否显示
      this.btnStstus = true
      if (res.workSheet.sheetType == 2) {
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
      
      this.workMan = res.workSheetProcs[0].handleManName ;
      //故障时间
      this.alarmTime = res.workSheet.alarmTime.split("T") ;
      this.alarmTimeData = this.alarmTime[0] ;
      this.alarmTimeHours = this.alarmTime[1].split(".")[0] ;
      //派单时间
      this.dispatchTime = res.workSheet.dispatchTime.split("T") ;
      this.dispatchTimeDate = this.dispatchTime[0] ;
      this.dispatchTimeHours = this.dispatchTime[1].split(".")[0] ;
      //接单时间
      this.receiveTime = res.workSheet.receiveTime.split("T") ;
      this.receiveTimeDate = this.receiveTime[0] ;
      this.receiveTimeHours = this.receiveTime[1].split(".")[0] ;
      //办结时间
      this.finishTime = res.workSheetProcs[0].handleTime.split("T") ;
      this.finishTimeDate = this.finishTime[0] ;
      this.finishTimeHours = this.finishTime[1].split(".")[0] ;
    },
    deRefesh() {
      if (this.keyer.Sec == "45") {
        this.faultWorkInfo();
      }
    }
  }
};
</script>

<style lang="less">
.order {
  position: relative;
  height: 870px;
  border: 1px solid #122c56;;
  background-color: rgba(5, 56, 107, 0.5);
  padding: 54px 0 0 66px;
  box-sizing: border-box;
  .order_main {
    display: flex;
    width: 1170px;
    height: 670px;
    margin: 60px 0 0 33px;
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
          .el-button {
            font-family: 'HYQiHei-60S';
            margin-top: 14px;
            font-size: 39px;
            color: #fff;
            letter-spacing: 1px;
            
          }
          .btn_style {
            padding: 14px 50px;
            border-radius: 35px;
          }
        }
      }
      .el-form-item__label {
        //编号 等
        font-family: 'HYQiHei-40S';
        font-size: 36px;
        color: #acb9cb;
        letter-spacing: 1px;
        font-weight: 300;
      }
    }
    // 处理时间线
    .timeLine {
      flex: 1;
      padding-left: 50px;
      border-left: 1px solid #c9c9c9;
      box-sizing: border-box;
      .timeLine_all {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .el-form-item {
          flex: 1;
          .el-button {
            font-family: 'HYQiHei-60S';
            margin-top: 14px;
            font-size: 39px;
            color: #fff;
            letter-spacing: 1px;
            .times {
                margin-left: 30px;
            }
          }
        }
      }
      .el-form-item__label {
        //编号 等
        font-family: 'HYQiHei-40S';
        font-size: 36px;
        color: #acb9cb;
        letter-spacing: 3px;
        font-weight: 300;
      }
    }
  }
}
</style>