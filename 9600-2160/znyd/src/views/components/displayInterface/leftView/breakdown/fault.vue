<template>
  <div class="fault">
    <!-- 四角高亮模块 -->
    <Corner />
    <!-- title 模块 -->
    <top-style nameTitle="故障信息" />
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
import topStyle from "@/common/topStyle/topStyle";
import request from "@/utils/request";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
export default {
  components: {
    Corner,
    topStyle,
  },
  data() {
    return {
      items: [
        {
          name: "元器件故障",
          titles: [],
        },
      ],
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
};
</script>

<style lang="less">
.fault {
  position: relative;
  height: 966px;
 border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);
  padding: 43px 0 0 68px;
  .fault_main {
    width: 1090px;
    height: 750px;
    margin: 39px 0 0 60px;
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
          margin-bottom: 31px;
          .fault_slot {
            padding: 20px 0 0 46px;
            .cir {
              display: inline-block;
              width: 18px;
              height: 18px;
              border-radius: 50%;
              margin-right: 33px;
              background-color: #a38c95;
            }
            .name {
              font-family: "HYQiHei-50S";
              font-size: 34.5px;
              letter-spacing: 3px;
              color: #fff;
            }
          }
          .content {
            display: flex;
            align-items: center;
            font-family: "HYQiHei-40S";
            font-size: 33px;
            color: #bccde5;
            padding: 0 0 0 100px;
            height: 95px;
            letter-spacing: 3px;
            background-color: #122452;
            box-sizing: border-box;
            div {
              font-family: "HYQiHei-40S";
              font-size: 33px;
              color: #bccde5;
              letter-spacing: 3px;
            }
            .title {
              flex: 1;
            }
            .time {
              flex: 1;
            }
          }
        }
      }
    }

    .el-card__header {
      width: 100%;
      padding: 0px;
      height: 87px;
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