<template>
  <div class="histogram">
    <div class="btn">
      <btnChange :btnDates="dateBtns" @checkDate="Change" />
    </div>
    <!-- 充电桩数（个） -->
    <div class="graphical">
      <Histogram id="ProSites" :bar="barData" :value="valueData" :dataZoom="zoomData" style="width:1180px;height:470px" />
    </div>
    
  </div>
</template>

<script>
import btnChange from "@/common/btn/btnChange"; //地区分布和建设场分布
import Histogram from "@/common/histogram/histogram"; //柱状图
import request from "@/utils/request";
import { mapState } from "vuex";

export default {
  components: {
    btnChange,
    Histogram
  },
  data() {
    return {
      dateBtns: [
        { text: "地区分布", current: true },
        { text: "建设场所分布", current: false }
      ],
      barData: [],
      valueData: [],
      zoomData:45,
    };
  },

  computed: {
    ...mapState(["login", "keyer"])
  },
  created() {
    this.distribution(); //地区分布
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    Change(data) {
      //把所有的current 属性全部改为false
      this.dateBtns.forEach((ele, index) => {
        ele.current = false;
      });
      data.current = true;
      if (data.text == "地区分布") {
        this.distribution();
      } else if (data.text == "建设场所分布") {
        this.dietzconstruction();
      }
    },
    // 地区分布
    async distribution() {
      let regId = this.login.regId;
      const { data: res } = await request(
        `/largeScreen/assetInfo/getCountByReg/${regId}`
      );

      //地名
      let nameStr = res
        .map((obj, index) => {
          return obj.name;
        })
      let name = nameStr;
      //数量
      let countStr = res
        .map((obj, index) => {
          return obj.count;
        })
      let count = countStr;
      //先清空
      this.barData = [];
      this.valueData = [];
      //赋值
      this.barData = name;
      this.valueData = count;
    },
    // 建设场地分布
    async dietzconstruction() {
      let regId = this.login.regId;
      const { data: res } = await request(
        `/property/stake/getDevByBuildType/${regId}`
      );
      //地名
      let nameStr = res
        .map((obj, index) => {
          return obj.build_type;
        })

      let name = nameStr;

      //数量
      let countStr = res
        .map((obj, index) => {
          return obj.count;
        })
      let count = countStr;
      //先清空
      this.barData = [];
      this.valueData = [];
      //赋值
      this.barData = name;
      this.dictionaryConversion(this.barData);

      this.valueData = countStr;
    },
    //字典查询
    dictionaryConversion(val) {
      const dictionary = [
        { number: "1", name: "居民小区" },
        { number: "2", name: "公共机构" },
        { number: "3", name: "企事业单位" },
        { number: "4", name: "写字楼" },
        { number: "5", name: "工业园区" },
        { number: "6", name: "交通枢纽" },
        { number: "7", name: "大型文体设施" },
        { number: "8", name: "城市绿地" },
        { number: "9", name: "大型建筑配建停车场" },
        { number: "10", name: "路边停车位" },
        { number: "11", name: "城际高速服务区" },
        { number: "12", name: "其他" },
      ];
      this.barData = [];
      for (let i = 0; i < val.length; i++) {
        for (let j = 0; j < dictionary.length; j++) {
          if (val[i] == dictionary[j].number) {
            this.barData.push(dictionary[j].name);
          }
        }
      }
    },
    //定时刷新
    deRefesh() {
      if (this.keyer.punctuality == "07:01:00") {
        this.distribution();
        this.dietzconstruction();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.histogram {
  position: relative;
  width: 1180px;
  height: 470px;
  margin-top: 25px;
  .graphical {
    width: 100%;
    height: 100%;
  }
  .btn {
    position: absolute;
    top: 15px;
    right: 0;
    z-index: 12;
  }
}
</style>