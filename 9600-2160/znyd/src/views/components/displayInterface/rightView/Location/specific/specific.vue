<template>
  <div class="station" :data="information">
    <el-button class="title control">
      {{ information.text }}
      <div class="Subtitle">
        <div class="triangle"></div>
        <el-button>{{ information.text }}</el-button>
      </div>
    </el-button>
    <div class="content">
      <div class="info">
        <div
          class="info_style"
          v-for="(item, index) in information.detailedinformation"
          :key="item.id"
        >
          <i
            :class="{
              'iconfont icon-ditu': index == 0,
              'iconfont icon-riqi': index == 1,
              'iconfont icon-dianhua': index == 2,
            }"
          ></i>
          <span class="other">{{ item.title }}</span>
          <div :class="{ textK: true, time: index != 0 }">
            {{ item.detailed }}
          </div>
        </div>
      </div>
      <!-- 站桩状态 -->
      <form-options :postsCustom="custom" style="margintop: 30px" />
      <!-- 充电桩数量 -->
      <div class="electricity">
        <ul>
          <li
            v-for="(item, index) in recharging"
            :key="index"
            :class="{
              color_o: index == 0,
              color_t: index == 1,
              color_r: index == 2,
            }"
          >
            <div
              :class="{
                cir: true,
                one_bf: index == 0,
                two_bf: index == 1,
                three_bf: index == 2,
              }"
            ></div>
            {{ item.name }}
            <span>{{ item.number }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import formOptions from "@/common/tableList/formOptions";
import request from "@/utils/request";
import { mapState } from "vuex"; //引入vuex数据
import { reSiteInfo } from "@/common/Mixins/launchSite";

export default {
  mixins: [reSiteInfo],
  components: {
    formOptions,
  },
  data() {
    return {
      custom: [],
      recharging: [],
      information: {
        text: "金桐西路东大桥东里充电站",
        detailedinformation: [
          { title: "", detailed: "北京市朝阳区金梧桐西路" },
          { title: "投运日期", detailed: "2020-09-30" },
          { title: "联系方式", detailed: "010-88888888" },
        ],
      },
    };
  },
  computed: {
    ...mapState(["maps", "controls", "keyer"]),
  },
  created() {
    this.siteInfo();
    this.PlieStatus();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    //地址信息
    async siteInfo() {
      let id = this.maps.StaId;
      const { data: res } = await request(`/property/station/getDetails/${id}`);
      //地址、时间、电话信息
      this.information.text = res.staName;
      this.information.detailedinformation[0].detailed = res.addr;
      this.information.detailedinformation[2].detailed = res.tel;
      this.information.detailedinformation[1].detailed = res.optTime.split(
        "T"
      )[0];

      
    },
    //桩信息总汇
    async PlieStatus() {
      let staId = this.maps.StaId;
      let staIds = [];
      staIds.push(staId);

      const { data: res } = await request({
        url: "/property/assetStatus/getStatusBySta",
        method: "post",
        data: staIds,
      });
      //桩状态
      this.custom = [
        { name: "工作桩", number: res.statusWorking + "个" },
        { name: "空闲桩", number: res.statusFree + "个" },
        { name: "故障桩", number: res.statusFault + "个" },
        { name: "离线桩", number: res.statusOffline + "个" },
      ];

      //充电桩总汇
      this.recharging = [
        { name: "充电桩数", number: res.stakeSum + "个" },
        { name: "直流桩数", number: res.acStakeSum + "个" },
        { name: "交流桩数", number: res.dcStakeSum + "个" },
      ];
    },
    //实时刷新 30s刷新一次
    deRefesh() {
      if (this.keyer.Sec == "59") {
        this.siteInfo();
      }
    },
  },
  watch: {
    launchId() {
      this.siteInfo();
      this.PlieStatus();
    },
  },
};
</script>

<style lang="less" scoped>
.station {
  position: relative;
  width: 100%;
  .title {
    //标题
    width: 100%;
    height: 130px;
    font-family: "HYQiHei-60S";
    font-size: 43.5px;
    color: #fff;
    letter-spacing: 5px;
    border: none;
    border-radius: 0;
    text-align: start;
    padding-left: 40px;
    padding-top: 10px;
    background: linear-gradient(to right, #6130de, #3789e4);
  }
  .control {
    white-space: nowrap; /*不允许换行*/
    overflow: hidden; /*超出隐藏*/
    text-overflow: ellipsis; /*文本超出三点代替*/
  }
  .triangle {
    position: absolute;
    top: -12px;
    left: 12px;
    width: 0;
    height: 0;
    border-top: 0px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #fff;
    border-left: 15px solid transparent;
  }
  .el-button .Subtitle {
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  .el-button:hover .Subtitle {
    visibility: visible;
    opacity: 1;
  }
  .Subtitle {
    position: absolute;
    top: 127px;
    left: 15px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 820px;
    height: 830px;
    margin: 50px 0 0 77px;

    // --------------------联系方式
    .info {
      display: flex;
      flex-direction: column;
      height: 283px;
      .info_style {
        display: flex;
        flex: 1;
        .iconfont {
          width: 64px;
          font-size: 36px;
          color: #acb9cb;
        }
        .textK {
          flex: 1;
          font-family: "HYQiHei-40S";
          font-size: 36px;
          font-weight: 300;
          letter-spacing: 5px;
          white-space: pre-wrap;
          overflow-wrap: break-word;
          color: #acb9cb;
        }
        .time {
          color: #fff;
          letter-spacing: 2px;
        }
        .other {
          font-size: 36px;
          color: #acb9cb;
          margin-right: 15px;
        }
      }
    }
    .electricity {
      position: relative;
      height: 257px;
      ul {
        display: flex;
        height: 100%;
        flex-direction: column;
        border-radius: 10px;
        border: 2px solid #2d53a0;
        box-sizing: border-box;
        li {
          position: relative;
          display: flex;
          flex: 1;
          font-family: "HYQiHei-45S";
          font-size: 35px;
          align-items: center;
          padding-left: 102px;
          letter-spacing: 5px;
          span {
            font-family: "HYQiHei-70S";
            margin-left: 45px;
          }
          // 圆圈  start
          .cir {
            position: absolute;
            top: 30px;
            left: 65px;
            width: 21px;
            height: 21px;
            border-radius: 50%;
          }
          .one_bf {
            background-color: #fff;
          }
          .two_bf {
            background-color: #61bfff;
          }
          .three_bf {
            background-color: #ea9636;
          }
          //end
        }
        .color_o {
          color: #fff;
          border-radius: 10px 10px 0 0;
          background: linear-gradient(to right, #6130de, #3789e4);
        }
        .color_t {
          color: #4589c4;
        }
        .color_r {
          color: #ea9636;
        }
      }
    }
  }
}
</style>