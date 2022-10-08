<template>
  <div class="histogram">
    <Histogram
      id="CitSites"
      :bar="barData"
      :value="valueData"
      :dataZoom="zoomData"
      style="width:479;height:310px"
    />
  </div>
</template>

<script>
import Histogram from "@/common/histogram/histogram"; //柱状图
import request from "@/utils/request";
import { mapState } from "vuex"; //引入vuex数据
import {refurbish} from "@/common/Mixins/refurbishMixins"


export default {
  mixins:[refurbish],
  components: {
    Histogram
  },
  data() {
    return {
      zoomData: 92,
      barData: [],
      valueData: [800, 1600, 2400, 750]
    };
  },
  computed: {
    ...mapState(["login", "keyer"])
  },
  created() {
    this.distribution();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async distribution() {
      let regId = this.login.cityRegId || this.login.regId;
      const { data: res } = await request(
        `/largeScreen/assetInfo/getCountByReg/${regId}`
      );
      //地名
      let nameStr = res
        .map((obj, index) => {
          return obj.name;
        })


      //数量
      let countStr = res
        .map((obj, index) => {
          return obj.count;
        })
      //先清空
      this.barData = [];
      this.valueData = [];
      //赋值
      this.barData = nameStr;
      this.valueData = countStr;
    },
    //定时刷新
    deRefesh() {
      if (this.keyer.punctuality == "07:01:00") {
        this.distribution();
      }
    }
  },
   watch: {
    initialize() {
      this.distribution();
    },
  },
};
</script>

<style lang="less" scoped>
.histogram {
  position: relative;
  width: 492px;
  height: 300px;
  margin-top: 15px;
}
</style>