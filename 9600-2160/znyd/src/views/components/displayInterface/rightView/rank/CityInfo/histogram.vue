<template>
  <div class="histogram">
    <Histogram id="CitSites" :bar="barData" :value="valueData" style="width:1200px;height:614px" />
  </div>
</template>

<script>
import Histogram from "@/common/histogram/histogram"; //柱状图
import request from "@/utils/request";
import { mapState } from "vuex"; //引入vuex数据
export default {
  components: {
    Histogram
  },
  data() {
    return {
      barData: ["公共场所", "政府机关", "居民小区", "其他"],
      valueData: [800, 1600, 2400, 750]
    };
  },
  computed: {
    ...mapState(["login", "keyer"])
  },
  created() {
    this.distribution();
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
        .join(",");
      let name = nameStr.split(",");

      //数量
      let countStr = res
        .map((obj, index) => {
          return obj.count;
        })
        .join(",");
      let count = countStr.split(",");
      //先清空
      this.barData = [];
      this.valueData = [];
      //赋值
      this.barData = name;
      this.valueData = count;
    },
    //定时刷新
    deRefesh() {
      if (this.keyer.punctuality == "07:01:00") {
        this.distribution();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.histogram {
  position: relative;
  width: 1200px;
  height: 615px;
  margin-top: 44px;
}
</style>