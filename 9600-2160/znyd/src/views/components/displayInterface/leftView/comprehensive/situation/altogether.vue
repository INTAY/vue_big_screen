<template>
  <div class="census">
    <div class="online">
      <div class="online_r">
        <div>
          {{this.onlines}}
          <span class="online_M">人</span>
        </div>
        <div class="online_W">在线人员数</div>
      </div>
      <div class="online_l">
        <div>
          {{this.onWorks}}
          <span class="online_M">人</span>
        </div>
        <div class="online_W">正在处理工单人员数</div>
      </div>
    </div>
    <div class="num">
      <div class="staffs">
        <div class="staffs_r form">人员总数</div>
        <div class="staffs_l form">
          {{this.allPersons}}
          <span class="pl">人</span>
        </div>
      </div>
      <div class="grades">
        <div class="grades_r form">运维班组数</div>
        <div class="grades_l form">
          {{this.commands}}
          <span class="pl">组</span>
        </div>
      </div>
    </div>
    <!-- 竖线 -->
    <div class="line"></div>
  </div>
</template>

<script>
import request from "@/utils/request";
import { mapState } from "vuex";
import { LoginID,refreshData } from "@/common/Mixins/launchPro";

export default {
  mixins: [LoginID,refreshData],
  data() {
    return {
      onlines: 77,
      onWorks: 66,
      allPersons: 173,
      commands: 173
    };
  },
  computed: {
    ...mapState(["login", "keyer"])
  },
  created() {
    this.staffData();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async staffData() {
      if (this.login.isProve) {
        let regId = this.login.regId;
        const { data: res } = await request(
          `/largeScreen/index/operationMaintenancePer/${regId}`
        );
        this.onlines = res.zxrs || "0";
        this.onWorks = res.ryzs || "0";
        this.allPersons = res.gdrs || "0" ;
        this.commands = res.ywbzrs || "0" ;
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/largeScreen/index/operationMaintenancePer/${regId}`
        );
        this.onlines = res.zxrs || "0";
        this.onWorks = res.ryzs || "0";
        this.allPersons = res.gdrs || "0";
        this.commands = res.ywbzrs || "0";
      }
    },
    deRefesh() {
      if (
        this.keyer.Min == "0:20" ||
        this.keyer.Min == "2:20" ||
        this.keyer.Min == "4:20" ||
        this.keyer.Min == "6:20" ||
        this.keyer.Min == "8:20"
      ) {
        this.staffData();
      }
    }
  },
    watch: {
    SendRegId() {
      this.staffData();
    },
    refreshData() {
      this.staffData();
    },
  },
};
</script>

<style lang="less" scoped>
.census {
  width: 1200px;
  height: 460px;
  .online {
    //在线人员处理处理模块样式
    display: flex;
    position: relative;
    width: 100%;
    height: 344px;
    font-family: "HYQiHei-70S";
    font-size: 70px;
    color: #fff;
    // letter-spacing: 8px;
    .online_r {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 4.5;
    }
    .online_l {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 5;
    }
    .online_M {
      font-family: "HYQiHei-40S";
      font-size: 30px;
    }
    .online_W {
      font-family: "HYQiHei-40S";
      font-size: 36px;
      color: #c6cbd1;
      margin-top: 25px;
      letter-spacing: 5px;
    }
  }
  .num {
    //人员总数和运维班组数
    display: flex;
    width: 100%;
    height: 116px;

    .staffs {
      //人员总数
      display: flex;
      width: 564px;
      border-radius: 15px;
      margin-right: 30px;
      background: url("../../../../../../assets/picture/content_bg5.png");
      .staffs_r {
        flex: 5;
        font-family: "HYQiHei-40S";
        font-size: 36px;
        color: #fff;
        letter-spacing: 5px;
      }
      .staffs_l {
        flex: 3;
        font-family: "HYQiHei-70S";
        font-size: 49px;
        color: #002742;
        .pl {
          font-family: "HYQiHei-50S";
          font-size: 27px;
        }
      }
    }
    .grades {
      //运维班总数
      display: flex;
      width: 564px;
      border-radius: 15px;
      margin-left: 30px;
      background: url("../../../../../../assets/picture/content_bg6.png");
      .grades_r {
        flex: 6;
        font-family: "HYQiHei-40S";
        font-size: 36px;
        color: #fff;
        letter-spacing: 5px;
      }
      .grades_l {
        flex: 3;
        font-family: "HYQiHei-70S";
        font-size: 49px;
        color: #002742;
        .pl {
          font-family: "HYQiHei-50S";
          font-size: 27px;
        }
      }
    }
    .form {
      text-align: center;
      line-height: 116px;
    }
  }
  .line {
    //竖线
    position: absolute;
    top: 100px;
    left: 600px;
    width: 3px;
    height: 307px;
    background: url("../../../../../../assets/picture/tile_line1.png");
  }
}
</style>