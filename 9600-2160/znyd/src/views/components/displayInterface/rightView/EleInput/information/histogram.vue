<template>
  <div class="histograms">
    <div class="btns">
      <btnChange :btnDates="btnInfos" @checkDate="checkInfo" />
    </div>
    <div class="graphical">
      <Histogram
        id="Sites"
        :bar="barData"
        :value="valueData"
        :dataZoom="zoomData"
        style="width:1200px;height:557px"
      />
    </div>
  </div>
</template>

<script>
import btnChange from "@/common/btn/textBTN";
import Histogram from "@/common/histogram/histogram"; //柱状图
import request from "@/utils/request";
import { mapState } from "vuex";
import { reSiteInfo } from "@/common/Mixins/launchSite";

export default {
  mixins: [reSiteInfo],
  components: {
    btnChange,
    Histogram,
  },
  data() {
    return {
      //时间分布 和设备分布
      btnInfos: [
        { text: "工单信息时间分布", current: true },
        { text: "工单设备分布", current: false },
      ],
      zoomData: 30,
      barData: [],
      valueData: [],
    };
  },
  computed: {
    ...mapState(["maps", "keyer"]),
  },
  created() {
    this.InfoEpochTime(); //工单信息时间分布
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    // 工单时间分布 和 工单设备分布
    checkInfo(data) {
      //把所有的current 属性全部改为false
      this.btnInfos.forEach((ele, index) => {
        ele.current = false;
      });
      //再把当前的current改为true
      data.current = true;
      if (data.text == "工单信息时间分布") {
        this.InfoEpochTime();
      } else {
        this.InfoEquipment();
      }
    },
    async InfoEpochTime() {
      let staId = this.maps.StaId;
      const { data: res } = await request(
        `/operation/workSheetDev/queryWorkSheetByDevId/${staId}`
      );
      let timeworkSheetDev = [];
      let workSheetDevNumber = [];
      for (let i = 0; i < res.length; i++) {
        timeworkSheetDev.push(res[i].code);
        workSheetDevNumber.push(res[i].value);
      }
      this.barData = timeworkSheetDev;
      this.valueData = workSheetDevNumber;
    },
    async InfoEquipment() {
      let staId = this.maps.StaId;
      const { data: res } = await request(
        `/operation/workSheetDev/queryWorkSheetCountByDevId/${staId}`
      );
      let failWorkSheetType = [];
      let failWorkSheetNumber = [];
      for (let i = 0; i < res.length; i++) {
        failWorkSheetType.push(res[i].code);
        failWorkSheetNumber.push(res[i].value);
      }
      this.barData = failWorkSheetType;
      this.valueData = failWorkSheetNumber;
    },
    deRefesh() {
      if (this.keyer.punctuality == "07:04:30") {
        this.InfoEpochTime();
        this.InfoEquipment();
      }
    },
  },
  watch: {
    //站点传送
    launchId() {
      this.InfoEpochTime();
    },
  },
};
</script>

<style lang="less" scoped>
.histograms {
  width: 100%;
  .graphical {
    width: 1180px;
    height: 556px;
    margin-top: 68px;
  }
  .btns {
    position: absolute;
    top: 4%;
    right: 125px;
  }
}
</style>