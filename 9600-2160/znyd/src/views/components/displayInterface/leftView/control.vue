<template>
  <div class="control">
    <happy-scroll color="rgba(31,62,120,0.5)" size="23">
      <ul>
        <li
          class="station"
          v-for="(item, index) in items"
          :key="index"
          @click="examine(index, $event, item)"
          :class="{ bgc: index == controls.current }"
        >
          <i
            class="iconfont icon-jiayouzhan"
            :class="{ FColor: index == controls.current, iconStyle: true }"
          ></i>
          <el-button type="text">{{ item.number }}</el-button>
          <el-button
            class="title"
            :class="{
              work_bgc: item.name == '工作',
              free_bgc: item.name == '空闲',
              breakdown_bgc: item.name == '故障',
              offline_bgc: item.name == '离线',
            }"
            >{{ item.name }}</el-button
          >
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
      items: [],
    };
  },
  computed: {
    ...mapState(["login", "maps", "keyer","controls"]),
  },
  mounted() {
    //初始化传值
    this.mapPiles();
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
      "setStakeId",
      "setFirstCheck",
      "setCurrent"
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
        this.items.push({
          id: newPlieStation[i][0],
          number: PlisName[i],
          stakeId: newPlieStation[i][0],
          name: PlisValue[i],
        });
      }
      //初次进入站点后，自动选择收条数据
      if(this.controls.firstCheck) {
        this.checkInit();
      }
      
    },
    examine(index, event, item) {
    
      //传入充电站ID
      this.setStakeId(item.stakeId);
      //关闭第一次自动跳转按钮
      this.setFirstCheck(false)
      //传入充电枪ID
      this.setPliId(item.id);
      this.setCurrent(index);
      BUS.$emit("accept", item);
    },
    // 初始化状态
    checkInit() {
      //判断是否有数据
      if (this.items.length != 0) {
        //传入充电枪ID
        this.setPliId(this.items[0].id);
        this.setStakeId(this.items[0].stakeId);
      }
      BUS.$emit("accept", this.items[0]);
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
  width: 383px;
  padding: 44px 0 0 34px;
  border: 1px solid #122c56;
  background-color: rgba(5, 56, 107, 0.5);

  box-sizing: border-box;
  .happy-scroll-strip--vertical .happy-scroll-bar {
    margin-right: 23px;
    border-radius: 23px;
    cursor: pointer;
  }

  ul {
    width: 100%;
    .station {
      position: relative;
      width: 273px;
      height: 313px;
      text-align: center;
      .iconStyle {
        font-family: "HYQiHei-70S";
        font-size: 200px;
        color: #0c4394;
        margin-left: 40px;
      }
      .FColor {
        font-family: "HYQiHei-70S";
        font-size: 200px;
        color: #0994d3;
        margin-left: 40px;
      }
      .el-button {
        width: 200px;
        font-family: "HYQiHei-70S";
        font-size: 36px;
        padding: 0px;
        border: none;
        color: #fff;
        letter-spacing: 5px;
      }
      .title {
        position: absolute;
        top: 32px;
        left: 84px;
        width: 73px;
        height: 155px;
        font-size: 40px;
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