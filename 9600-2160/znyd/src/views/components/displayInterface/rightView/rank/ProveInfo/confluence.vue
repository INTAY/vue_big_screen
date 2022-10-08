<template>
  <div class="DAP">
    <data-box :countData="countDA" class="DA"></data-box>
    <data-box :countData="countP" class="DP"></data-box>
  </div>
</template>

<script>
import dataBox from "@/common/dataBox/dataBox";
import request from "@/utils/request";
import { mapState } from "vuex";
export default {
  components: {
    dataBox
  },
  data() {
    return {
      countDA: [],
      countP: [],
    };
  },

  computed: {
    ...mapState(["login", "keyer"])
  },
  created() {
    this.chargeInfo();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async chargeInfo() {
      //专用和公用
      let regId = this.login.regId;

      const { data: res } = await request(
        `/largeScreen/assetInfo/getCountbyType/${regId}`
      );

      //直流和交流
      const { data: res1 } = await request(
        `/largeScreen/assetInfo/getCountbyEngSupType/${regId}`
      );
      this.countDA = [
        { text: "直流设施数", number: res1.sumZL, unit: "个" },
        { text: "交流设施数", number: res1.sumJL, unit: "个" },
      ];
      this.countP =  [
        { text: "公用桩数", number: res.countGY, unit: "个" },
        { text: "专用桩数", number: res.countZY, unit: "个" }
      ]
      // for (let i = 0; i < this.countP.length; i++) {
      //   //专用与公用
      //   if (this.countP[i].text == "公用桩数") {
      //     this.countP[i].number = res.countGY;
      //   }
      //   if (this.countP[i].text == "专用桩数") {
      //     this.countP[i].number = res.countZY;
      //   }
      // }
      // for (let i = 0; i < this.countDA.length; i++) {
      //   //直流 交流
      //   if (this.countDA[i].text == "直流设施数") {
      //     this.countDA[i].number = res1.sumZL;
      //   }
      //   if (this.countDA[i].text == "交流设施数") {
      //     this.countDA[i].number = res1.sumJL;
      //   }
      // }
    },
    //实时刷新 30s刷新一次
    deRefesh() {
      if (this.keyer.punctuality == "07:01:00") {
        this.chargeInfo();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.DAP {
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
  .DA {
    margin-right: 30px;
  }
  .DP {
    margin-left: 30px;
  }
}
</style>