<template>
  <div class="record">
    <el-button class="title">充电枪档案</el-button>
    <div class="content">
      <!-- 编号 类型 -->
      <div class="form_root">
        <el-form class="form_all">
          <el-form-item label="编号" prop="number">
            <el-button type="text">{{ this.NO }}</el-button>
          </el-form-item>
          <el-form-item label="类型" prop="types">
            <el-button type="text">{{ this.PlieType }}</el-button>
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-button
              round
              :class="{
                btn_style: true,
                onOffline_color: isStatus == '离线',
                success_color: isStatus == '工作',
                err_color: isStatus == '故障',
                free_color: isStatus == '空闲',
              }"
              >{{ isStatus }}</el-button
            >
          </el-form-item>
          <el-form-item label="电机容量" prop="capacity">
            <el-button type="text">{{ this.powerInf }}</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 额定电压、额定电流 -->
      <form-options :postsCustom="Voltage" />
      <!-- 公司信息 -->
      <div class="form_root">
        <el-form class="form_all">
          <el-form-item label="注册时间" prop="number">
            <el-button type="text">{{ this.registTime }}</el-button>
          </el-form-item>
          <el-form-item label="注册单位" prop="types">
            <el-button type="text">{{ this.registCompany }}</el-button>
          </el-form-item>
          <el-form-item label="注册厂家" prop="capacity">
            <el-button type="text">{{ this.registAddress }}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import formOptions from "@/common/tableList/formOptions";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import request from "@/utils/request";
import { rePlieInfo } from "@/common/Mixins/launchPile";

export default {
  mixins: [rePlieInfo],
  components: { formOptions },
  data() {
    return {
      NO: "", //编号
      PlieType: "", //枪类型
      powerInf: "",
      registTime: "",
      registCompany: "",
      registAddress: "",
      Voltage: [],
      isStatus: null,
    };
  },
  computed: {
    ...mapState(["controls"]),
  },
  mounted() {
    this.equipmentInfo();
  },
  methods: {
    ...mapMutations(["setCheckStyle", "setStatus", "setIsWork", "setIsFault"]),
    async equipmentInfo() {
      let id = this.controls.stakeId;
      //枪具体信息
      const { data: res } = await request(`/property/connector/${id}`);
      //枪状态
      const { data: resStatus } = await request({
        url: `/operate/pileMonitoring/getRealTimeInformationt/${id}`,
      });
      //判断充电枪状态
      if (resStatus.STATUS == 1) {
        this.isStatus = "工作";
        this.setCheckStyle(false);
        this.setStatus("工作");
        this.setIsWork(true);
        this.setIsFault(false);
      } else if (resStatus.STATUS == 2) {
        this.isStatus = "空闲";
        this.setCheckStyle(true);
        this.setStatus("空闲");
        this.setIsWork(true);
      } else if (resStatus.STATUS == 3) {
        this.isStatus = "故障";
        this.setCheckStyle(false);
        this.setStatus("故障");
        this.setIsWork(false);
        this.setIsFault(true);
      } else if (resStatus.STATUS == 4) {
        this.isStatus = "离线";
        this.setCheckStyle(true);
        this.setStatus("离线");
        this.setIsWork(true);
      } else {
        console.log("asdasdasd");
        this.isStatus = "无状态";
        console.log(this.isStatus);
      }
      this.NO = res.assetNo; //充电枪编号
      this.PlieType = res.devType; // 枪类型
      this.powerInf = res.powerInf; //额定功率
      //额定电压、额定电流
      this.Voltage = [
        { name: "额定电压", number: res.voltUpper },
        { name: "额定电流", number: res.curtInf },
      ];

      //注册时间 、注册地址 、 注册公司
      if (res.OptTime != null) {
        this.registTime = res.OptTime.split("T")[0];
      }

      this.registCompany = res.OrgName;
      this.registAddress = res.factName;
      console.log(res, "充电枪信息");
    },
  },
  watch: {
    //枪传送
    acceptId() {
      this.equipmentInfo();
    },
  },
};
</script>

<style lang="less">
.record {
  height: 1300px;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);

  .title {
    width: 100%;
    height: 130px;
    font-size: 43.5px;
    color: #fff;
    border: none;
    text-align: start;
    padding-left: 77px;
    border-radius: 0;
    letter-spacing: 5px;
    font-family: "HYQiHei-60S";
    background: linear-gradient(to right, #6130de, #3789e4);
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 820px;
    height: 1050px;
    margin: 60px 0 0 78px;
    // form表单的基础样式
    .form_root {
      height: 370px;
      .form_all {
        display: flex;
        flex-direction: column;
        height: 100%;
        .el-form-item {
          flex: 1;
          display: flex;
          align-items: center;
          .el-button {
            margin-left: 10px;
            font-family: "HYQiHei-60S";
            font-size: 39px;
            color: #fff;
          }
          .el-form-item__label {
            font-family: "HYQiHei-40S";
            font-size: 36px;
            color: #acb9cb;
            letter-spacing: 8px;
          }
        }
        //  编号 类型
        .btn_style {
          width: 155px;
          height: 68px;
          border: none;
          border-radius: 35px;
          background-color: rgb(198, 211, 23);
        }
        // 状态钮的颜色
        .success_color {
          //工作按钮颜色
          background-color: #00ce35;
        }
        .err_color {
          //故障按钮颜色
          background-color: #df1818;
        }
        .free_color {
          //空闲按钮颜色
          background-color: #3584fb;
        }
        .onOffline_color {
          // 离线按钮颜色
          background-color: #474747;
        }
      }
    }
  }
}
</style>