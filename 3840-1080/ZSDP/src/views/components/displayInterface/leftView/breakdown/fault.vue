<template>
  <div class="fault">
    <!-- 四角高亮模块 -->
    <Corner />
    <!-- 三竖标记模块 -->
    <Sign />
    <!-- title 模块 -->
    <el-button type="text" class="M_title">故障信息</el-button>
    <div class="fault_main">
      <happy-scroll color="rgba(31,62,120,0.5)" size="0">
        <el-card class="fault_card" v-for="item in items" :key="item.index">
          <div slot="header" class="fault_slot">
            <div class="cir"></div>
            <span class="name">{{item.name}}</span>
          </div>
          <div v-for="title in item.titles" :key="title.index" class="content">
            <div class="title">{{title.name}}</div>
            <div class="time">{{title.data}}&emsp;{{title.time}}</div>
            <div></div>
          </div>
        </el-card>
      </happy-scroll>
    </div>
  </div>
</template>

<script>
import Corner from "../../cornerLine"; //引入四角高亮模块
import Sign from "../../sign"; //引入三竖标记模块
import request from "@/utils/request";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import BUS from "@/utils/bus";

export default {
  components: {
    Corner,
    Sign,
  },
  data() {
    return {
      items: [
        {
          name: "元器件故障",
          titles: [],
        },
      ],
      plieID: "", //监听标记
    };
  },
  computed: {
    ...mapState(["controls", "keyer"]),
  },
  created() {
    this.faultInfo();
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
    async faultInfo() {
      let devId = this.controls.stakeId;
      const { data: res } = await request({
        url: "/operation/alarmRec/queryPage",
        method: "post",
        data: {
          devId: devId,
          size: "10",
        },
      });
      let alarmInfo = res.records.map((ele, index) => {
        return ele.alarmInfo;
      });
      let alarmTimeData = res.records.map((ele, index) => {
        return ele.alarmTime.split("T")[0];
      });
      let alarmTime = res.records.map((ele, index) => {
        return ele.alarmTime.split("T")[1].split(".")[0];
      });
      for (let i = 0; i < alarmInfo.length; i++) {
        this.items[0].titles.push({
          name: alarmInfo[i],
          data: alarmTimeData[i],
          time: alarmTime[i],
        });
      }
    },
    deRefesh() {
      if (this.keyer.Sec == "35") {
        this.faultInfo();
      }
    },
  },
  watch: {
    plieID() {
      this.faultInfo();
    },
  },
};
</script>

<style lang="less">
.fault {
  position: relative;
  height: 471px;
  border: 1px solid #122c56;
  padding: 25px 0 0 25px;
  background-color: rgba(11, 32, 66, 0.5);
  .fault_main {
    width: 455px;
    height: 375px;
    margin: 22px 0 0 25px;
    .happy-scroll {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      .happy-scroll-container {
        .happy-scroll-content {
          width: 100%;
        }
        .fault_card {
          border: none;
          margin-bottom: 18px;
          .fault_slot {
            padding: 5px 0 0 17px;
            .cir {
              display: inline-block;
              width: 9px;
              height: 9px;
              border-radius: 50%;
              margin-right: 8px;
              background-color: #a38c95;
            }
            .name {
              font-family: "HYQiHei-50S";
              font-size: 23px;
              color: #fff;
            }
          }
          .content {
            display: flex;
            align-items: center;
            font-family: "HYQiHei-40S";
            font-size: 20px;
            color: #bccde5;
            padding: 0 0 0 33px;
            height: 48px;
            background-color: #122452;
            box-sizing: border-box;
            div {
              font-family: "HYQiHei-40S";
              font-size: 23px;
              color: #bccde5;
            }
            .title {
              flex: 2;
              font-size: 20px;
            }
            .time {
              flex: 4;
            }
          }
        }
      }
    }

    .el-card__header {
      width: 100%;
      padding: 0px;
      height: 42px;
      border: none;
      background-color: #46192a;
    }
    .el-card__body {
      padding: 0px;
      border: none;
    }
  }
}
</style>