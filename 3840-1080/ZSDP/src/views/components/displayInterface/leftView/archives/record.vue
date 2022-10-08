<template>
  <div class="record">
    <el-button class="title">充电桩档案</el-button>
    <div class="content">
      <!-- 编号 类型 -->
      <div class="form_root">
        <el-form class="form_all">
          <el-form-item label="编号" prop="number" class="NOSUB">
            <el-button type="text" class="numberText">{{this.NO}}</el-button>
            <div class="DisShow">
              <el-button class="bocl" plain>{{this.NO}}</el-button>
              <div class="triangle"></div>
            </div>
          </el-form-item>
          <el-form-item label="类型" prop="types">
            <el-button type="text" class="PlieType">{{this.PlieType}}</el-button>
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-button round class="btn_style success_color" v-show="controls.isStatus == '工作'">工作</el-button>
            <el-button round class="btn_style err_color" v-show="controls.isStatus == '故障'">故障</el-button>
            <el-button round class="btn_style free_color" v-show="controls.isStatus == '空闲'">空闲</el-button>
            <el-button round class="btn_style onOffline_color" v-show="controls.isStatus == '离线'">离线</el-button>
          </el-form-item>
          <el-form-item label="额定功率" prop="capacity">
            <el-button type="text">{{this.powerInf}}</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 额定电压、额定电流 -->
      <form-options :postsCustom="Voltage" />
      <!-- 公司信息 -->
      <div class="form_root">
        <el-form class="form_all">
          <el-form-item label="注册时间" prop="number">
            <el-button type="text">{{this.registTime}}</el-button>
          </el-form-item>
          <el-form-item label="注册单位" prop="types">
            <el-button type="text">{{this.registCompany}}</el-button>
          </el-form-item>
          <el-form-item label="注册厂家" prop="capacity">
            <el-button type="text">{{this.registAddress}}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import formOptions from "@/common/tableList/formOptions";
import { mapState } from "vuex"; //引入vuex数据
import request from "@/utils/request";
import BUS from "@/utils/bus";

export default {
  components: {
    formOptions,
  },
  data() {
    return {
      plieID: "", //监听标记
      NO: "", //编号
      PlieType: "", //枪类型
      powerInf: "",
      registTime: "",
      registCompany: "",
      registAddress: "",
      Voltage: [
        { name: "额定电压", number: "" },
        { name: "额定电流", number: "" },
      ],
    };
  },
  computed: {
    ...mapState(["controls"]),
  },
  mounted() {
    this.equipmentInfo();
    BUS.$on("skip", (val) => {
      this.plieID = val;
    });
  },
  methods: {
    async equipmentInfo() {
      let id = this.controls.stakeId;
      const { data: res } = await request(`/property/connector/${id}`);

      this.NO = res.assetNo; //充电枪编号
      this.PlieType = res.devType; // 枪类型
      this.powerInf = res.powerInf; //额定功率
      //额定电压、额定电流
      for (let i = 0; i < this.Voltage.length; i++) {
        if (this.Voltage[i].name == "额定电压") {
          this.Voltage[i].number = res.voltUpper;
        }
        if (this.Voltage[i].name == "额定电流") {
          this.Voltage[i].number = res.curtInf;
        }
      }
      //注册时间 、注册地址 、 注册公司
      if (res.OptTime) {
        this.registTime = res.OptTime.split("T")[0];
      }

      this.registCompany = res.OrgName;
      this.registAddress = res.factName;
    },
  },
  watch: {
    plieID() {
      this.equipmentInfo();
    },
  },
};
</script>

<style lang="less">
.record {
  width: 100%;
  height: 652px;
  border: 1px solid #122c56;
  background-color: rgba(11, 32, 66, 0.5);
  .title {
    width: 100%;
    height: 65px;
    font-size: 23px;
    color: #fff;
    border: none;
    text-align: start;
    padding-left: 30px;
    border-radius: 0;
    font-family: "HYQiHei-60S";
    box-sizing: border-box;
    background: linear-gradient(to right, #6130de, #3789e4);
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 325px;
    height: 525px;
    margin: 30px 0 0 30px;
    // form表单的基础样式
    .form_root {
      height: 170px;
      .form_all {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        .NOSUB {
          position: relative;
          .triangle {
            position: absolute;
            bottom: -14px;
            left: 10%;
            width: 0;
            height: 0;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-top: 15px solid #fff;
          }
          .DisShow {
            position: absolute;
            top: -44px;
            left: -98px;
            color: #111213;
            visibility: hidden;
            opacity: 0;
            transition: all 0.5s ease-in-out;

            .bocl {
              font-size: 20px;
              border: none;
            }
          }
          :hover .DisShow {
            visibility: visible;
            opacity: 1;
          }
        }
        .el-form-item {
          flex: 1;
          display: flex;
          align-items: center;
          margin: 0px;
          box-sizing: border-box;

          .el-button {
            margin-left: 15px;
            font-family: "HYQiHei-60S";
          }
          .numberText {
            width: 230px;
            font-size: 18px;
            color: #fff;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .el-form-item__label {
            font-family: "HYQiHei-40S";
            font-size: 20px;
            color: #acb9cb;
          }
        }
        //  编号 类型
        .btn_style {
          padding: 7px 14px;
          color: #fff;
          border: none;
          border-radius: 35px;
        }
        .PlieType {
          color: #fff;
        }
        .Tnumber {
          font-size: 12px;
        }
      }
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
</style>