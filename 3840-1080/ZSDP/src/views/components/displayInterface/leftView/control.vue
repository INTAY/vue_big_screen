<template>
  <div class="control">
    <happy-scroll color="rgba(31,62,120,0.5)" size="10">
      <ul>
        <li
          class="station"
          v-for="(item,index) in items"
          :key="index"
          @click="examine(index,$event,item)"
          :class="{'bgc': index==current}"
        >
          <i class="iconfont icon-jiayouzhan" :class="{FColor: index == current,iconStyle:true}"></i>
          <el-button type="text">{{item.number}}</el-button>
          <el-button
            class="title"
            :class="{work_bgc:item.name == '工作',free_bgc:item.name == '空闲',breakdown_bgc:item.name == '故障',offline_bgc:item.name == '离线',}"
          >{{item.name}}</el-button>
        </li>
      </ul>
    </happy-scroll>
  </div>
</template>


<script>
import request from "@/utils/request";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import BUS from "@/utils/bus";
import { reSiteInfo } from "@/common/Mixins/launchSite";

export default {
  mixins: [reSiteInfo],
  data() {
    return {
      current: 0,
      items: [],
    };
  },
  computed: {
    ...mapState(["login", "maps", "controls", "keyer"]),
  },
  created() {
    this.mapPiles();
  },
  mounted() {
    //初始化传值

    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    ...mapMutations([
      "setCheckStyle",
      "setStatus",
      "setIsWork",
      "setIsFault",
      "setPliId",
      "setStakeId"
    ]),
    async mapPiles() {
      //获取站点ID
      let staId = this.maps.StaId;
      let staIds = [];
      staIds.push(staId);

      const { data: res } = await request({
        url: "/property/assetStatus/getStatusBySta",
        method: "post",
        data: staIds,
      });
      //充电枪状态
      let PlieStation = [];
      let PlisValue = [];
      let PlisName = [];

      for (let i = 0; i < res.statusList.length; i++) {
        PlieStation.push(res.statusList[i].key);
        PlisValue.push(res.statusList[i].status);
        PlisName.push(res.statusList[i].devName);
      }

      this.items = [];
      let newPlieStation = [];
      //循环添加到items对象中
      for (let i = 0; i < PlieStation.length; i++) {
        newPlieStation.push(PlieStation[i].split(":"));
        console.log(newPlieStation,"newPlieStation");
        this.items.push({
          id: newPlieStation[i][0],
          number: PlisName[i],
          stakeId: newPlieStation[i][2],
          name: PlisValue[i],
        });
      }
      this.checkInit();
    },
    //点击事件
    examine(index, event, item) {
      //传入充电站ID
      this.setStakeId(item.stakeId)
      //传入充电枪ID
      this.setPliId(item.id);
      this.current = index; //样式跳转
      if (item.name == "工作") {
        this.setCheckStyle(false);
        this.setStatus("工作");
        this.setIsWork(true);
        this.setIsFault(false);
        //切换工作模块的传值
      } else if (item.name == "故障") {
        this.setCheckStyle(false);
        this.setStatus("故障");
        this.setIsWork(false);
        this.setIsFault(true);
        //切换故障模块的传值
      } else if (item.name == "空闲") {
        this.setCheckStyle(true);
        this.setStatus("空闲");
        this.setIsWork(true);
      } else {
        this.setCheckStyle(true);
        this.setStatus("离线");
        this.setIsWork(true);
      }
      BUS.$emit("skip", item.id);
    },
    // 初始化状态
    checkInit() {
      //判断是否有数据
      if (this.items.length != 0) {
        //传入充电枪ID
        this.setPliId(this.items[0].id);
        if (this.items[0].name == "工作") {
          this.setStatus("工作");
          this.setCheckStyle(false);
          this.setIsWork(true);
          this.setIsFault(false);
        } else if (this.items[0].name == "故障") {
          this.setStatus("故障");
          this.setCheckStyle(false);
          this.setIsWork(false);
          this.setIsFault(true);
        } else if (this.items[0].name == "空闲") {
          this.setStatus("空闲");
          this.setIsWork(true);
          this.setCheckStyle(true);
        } else if (this.items[0].name == "离线") {
          this.setStatus("离线");
          this.setIsWork(true);
          this.setCheckStyle(true);
        }
        BUS.$emit("skip", this.items[0].id);
      }
    },
    deRefesh() {
      if (this.keyer.Sec == "59") {
        this.mapPiles();
      }
    },
  },
  watch: {
    //站点传送
    launchId() {
      this.mapPiles();
    },
  },
};
</script>


<style lang="less">
.control {
  width: 152px;
  padding: 22px 0 0 13px;
  border: 1px solid #122c56;
  background-color: rgba(11, 32, 66, 0.5);
  box-sizing: border-box;
  .happy-scroll-strip--vertical .happy-scroll-bar {
    margin-right: 5px;
    border-radius: 23px;
    cursor: pointer;
  }

  ul {
    width: 100%;
    .station {
      position: relative;
      width: 114px;
      height: 161px;
      text-align: center;
      .iconStyle {
        font-family: "HYQiHei-70S";
        font-size: 110px;
        color: #0c4394;
        margin-left: 4px;
      }
      .FColor {
        font-family: "HYQiHei-70S";
        font-size: 110px;
        color: #0994d3;
        margin-left: 4px;
      }
      .el-button {
        width: 104px;
        font-family: "HYQiHei-70S";
        font-size: 20px;
        padding: 0px;
        border: none;
        color: #fff;
      }
      .title {
        position: absolute;
        top: 17px;
        left: 15px;
        width: 40px;
        height: 86px;
        line-height: 44px;
        font-size: 22px;
        font-weight: 400;
        white-space: pre-wrap;
      }
      .work_bgc {
        //工作
        background-color: #00ce35;
      }
      .free_bgc {
        //空闲
        background-color: #3584fb;
      }
      .breakdown_bgc {
        //故障
        background-color: #df1818;
      }
      .offline_bgc {
        //离线
        background-color: #474747;
      }
    }
    .bgc {
      background-color: rgba(34, 40, 116, 0.5);
    }
  }
}
</style>