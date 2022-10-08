<template>
  <div class="station" :data="information">
    <el-button class="title control">
      {{information.text}}
      <div class="Subtitle">
        <div class="triangle"></div>
        <el-button>{{information.text}}</el-button>
      </div>
    </el-button>

    <div class="content">
      <div class="info">
        <div
          class="info_style"
          v-for="(item,index) in (information.detailedinformation)"
          :key="item.id"
        >
          <i
            :class="{'iconfont icon-ditu':index == 0,'iconfont icon-riqi': index == 1,'iconfont icon-dianhua':index == 2}"
          ></i>
          <span class="other">{{item.title}}</span>
          <div :class="{'textK':true, 'time':index != 0}">{{item.detailed}}</div>
        </div>
      </div>
      <!-- 站桩状态 -->
      <form-options :postsCustom="custom" style="marginTop: 20px" />
      <!-- 充电桩数量 -->
      <div class="electricity">
        <ul>
          <li
            v-for="(item,index) in recharging"
            :key="index"
            :class="{'color_o':index == 0,'color_t':index == 1,'color_r':index == 2}"
          >
            <div
              :class="{'cir':true, 'one_bf':index == 0,'two_bf':index == 1,'three_bf':index == 2}"
            ></div>
            {{item.name}}
            <span>{{item.number}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import formOptions from "@/common/tableList/formOptions";
import request from "@/utils/request";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import { reSiteInfo } from "@/common/Mixins/launchSite";

export default {
  mixins: [reSiteInfo],
  components: {
    formOptions,
  },
  data() {
    return {
      custom: [
        { name: "工作桩", number: "-" },
        { name: "空闲桩", number: "-" },
        { name: "故障桩", number: "-" },
        { name: "离线桩", number: "-" },
      ],
      recharging: [
        { name: "充电桩数", number: "" },
        { name: "直流桩数", number: "" },
        { name: "交流桩数", number: "" },
      ],
      information: {
        text: "",
        detailedinformation: [
          { title: "", detailed: "" },
          { title: "投运日期", detailed: "" },
          { title: "联系方式", detailed: "" },
        ],
      },
    };
  },
  computed: {
    ...mapState(["maps", "controls", "keyer"]),
  },
  created() {
    this.siteInfo();
  },
  mounted() {
    
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async siteInfo() {
      let id = this.maps.StaId;
      const { data: res } = await request(`/property/station/getDetails/${id}`);
      //地址、时间、电话信息
      
      this.information.text = res.staName;
      this.information.detailedinformation[0].detailed = res.addr;
      this.information.detailedinformation[1].detailed = res.optTime.split(
        "T"
      )[0];
      this.information.detailedinformation[2].detailed = res.tel;
      this.PlieStatus();
    },
    async PlieStatus() {
      //桩状态
      let staId = this.maps.StaId;
      let staIds = [];
      staIds.push(staId);

      const { data: res } = await request({
        url: "/property/assetStatus/getStatusBySta",
        method: "post",
        data: staIds,
      });
      for (let i = 0; i < this.custom.length; i++) {
        
        if (this.custom[i].name == "工作桩") {
          this.custom[i].number = res.statusWorking + "个";
        }
        if (this.custom[i].name == "空闲桩") {
          this.custom[i].number = res.statusFree + "个";
        }
        if (this.custom[i].name == "故障桩") {
          this.custom[i].number = res.statusFault + "个";
        }
        if (this.custom[i].name == "离线桩") {
          this.custom[i].number = res.statusOffline + "个";
        }
      }
      //充电桩总汇
      for (let j = 0; j < this.recharging.length; j++) {
        if (this.recharging[j].name == "充电桩数") {
          this.recharging[j].number = res.stakeSum + "个";
        }
        if (this.recharging[j].name == "直流桩数") {
          this.recharging[j].number = res.acStakeSum + "个";
        }
        if (this.recharging[j].name == "交流桩数") {
          this.recharging[j].number = res.dcStakeSum + "个";
        }
      }
    },
    //实时刷新 30s刷新一次
    deRefesh() {
      if (this.keyer.Sec == "59") {
        this.siteInfo();
      }
    },
  },
  watch: {
    //站点传送
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
  //标题
  .title {
    width: 100%;
    height: 65px;
    font-family: "HYQiHei-60S";
    font-size: 23px;
    color: #fff;
    border: none;
    border-radius: 0;
    text-align: start;
    padding: 0 17px 0 17px;
    background: linear-gradient(to right, #6130de, #3789e4);
    box-sizing: border-box;
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
    top: 67px;
    left: 15px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 331px;
    height: 416px;
    margin: 21px 0 0 25px;
    // --------------------联系方式
    .info {
      display: flex;
      flex-direction: column;
      height: 150px;
      .info_style {
        display: flex;
        align-items: center;
        flex: 1;
        .iconfont {
          width: 23px;
          font-size: 20px;
          color: #acb9cb;
        }
        .textK {
          flex: 1;
          font-family: "HYQiHei-40S";
          font-size: 20px;
          font-weight: 300;
          white-space: pre-wrap;
          overflow-wrap: break-word;
          color: #acb9cb;
        }
        .time {
          color: #fff;
        }
        .other {
          font-size: 20px;
          color: #acb9cb;
          margin-right: 20px;
        }
      }
    }
    .electricity {
      position: relative;
      height: 131px;
      ul {
        display: flex;
        height: 100%;
        flex-direction: column;
        border-radius: 5px;
        border: 1px solid #2d53a0;
        box-sizing: border-box;
        li {
          position: relative;
          display: flex;
          flex: 1;
          font-family: "HYQiHei-45S";
          font-size: 23px;
          align-items: center;
          padding-left: 50px;
          span {
            font-family: "HYQiHei-70S";
            margin-left: 20px;
            font-size: 20px;
          }
          // 圆圈  start
          .cir {
            position: absolute;
            top: 16px;
            left: 30px;
            width: 9px;
            height: 9px;
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
          border-radius: 5px 5px 0 0;
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