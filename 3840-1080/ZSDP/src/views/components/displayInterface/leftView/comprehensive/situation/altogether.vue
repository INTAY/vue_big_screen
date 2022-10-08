<template>
  <div class="census">
    <div class="online">
      <div class="online_r commLine">
        <div>
          {{this.onlines}}
          <span class="onlineFonts">人</span>
        </div>
        <div class="online_W onlineFonts">在线人员数</div>
      </div>
      <div class="online_l commLine">
        <div>
          {{this.onWorks}}
          <span class="onlineFonts">人</span>
        </div>
        <div class="online_W onlineFonts">正在处理工单人员数</div>
      </div>
    </div>
    <div class="num">
      <div class="staffs commStyle">
        <div class="commTitle form">人员总数</div>
        <div class="commCounts form">
          {{this.allPersons}}
          <span class="pl">人</span>
        </div>
      </div>
      <div class="grades commStyle">
        <div class="commTitle form">运维班组数</div>
        <div class="commCounts form">
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
import { refurbish,refreshData } from "@/common/Mixins/refurbishMixins";
export default {
  mixins: [refurbish,refreshData],
  data() {
    return {
      onlines: 7,
      onWorks: 6,
      allPersons: 1,
      commands: 1,
    };
  },
  computed: {
    ...mapState(["login", "keyer"]),
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
        this.onlines = res.zxrs;
        this.onWorks = res.ryzs;
        this.allPersons = res.gdrs;
        this.commands = res.ywbzrs;
      } else if (this.login.isCity) {
        let regId = this.login.cityRegId || this.login.regId;
        const { data: res } = await request(
          `/largeScreen/index/operationMaintenancePer/${regId}`
        );
        this.onlines = res.zxrs;
        this.onWorks = res.ryzs;
        this.allPersons = res.gdrs;
        this.commands = res.ywbzrs;
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
    },
  },
  watch: {
    initialize() {
      this.staffData();
    },
    refreshData() {
      this.staffData()
    }
  },
};
</script>

<style lang="less" scoped>
.census {
  width: 480px;
  height: 224px;
  .online {
    //在线人员处理处理模块样式
    display: flex;
    position: relative;
    width: 100%;
    height: 150px;
    font-family: "HYQiHei-70S";
    font-size: 50px;
    color: #fff;
    .online_r {
      flex: 4.5;
    }
    .online_l {
      flex: 5;
    }
    .commLine {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .online_W {
      color: #c6cbd1;
      margin-top: 25px;
    }
    .onlineFonts {
      font-family: "HYQiHei-40S";
      font-size: 20px;
    }
  }
  .num {
    //人员总数和运维班组数
    display: flex;
    width: 100%;
    height: 58px;
    //人员总数
    .staffs {
      margin-right: 12px;
      background: url("../../../../../../assets/picture/content_bg5.png");
    }
    //运维班总数
    .grades {
      margin-left: 12px;
      background: url("../../../../../../assets/picture/content_bg6.png");
    }
    .commStyle {
      display: flex;
      width: 226px;
      border-radius: 5px;
    }
    .commTitle {
      flex: 5;
      font-family: "HYQiHei-40S";
      font-size: 20px;
      color: #fff;
    }
    .commCounts {
      flex: 3;
      font-family: "HYQiHei-70S";
      font-size: 24px;
      color: #002742;
      .pl {
        font-family: "HYQiHei-50S";
        font-size: 18px;
      }
    }
    .form {
      text-align: center;
      line-height: 58px;
    }
  }
  .line {
    //竖线
    position: absolute;
    top: 50px;
    left: 245px;
    width: 2px;
    height: 135px;
    background: url("../../../../../../assets/picture/tile_line1.png");
  }
}
</style>