<template>
  <div class="capacityY">
    <div class="btn">
      <btnChange :btnDates="btnLocationS" @checkDate="Change" />
    </div>
    <HotLocation v-if="isShow" />
    <HotSite v-if="!isShow" />
  </div>
</template>

<script>
import btnChange from "@/common/btn/btnChange"; //热门地区和热门站点
import HotLocation from "./HotLocation";
import HotSite from "@/common/hotPile/hotSite"


export default {
  components: {
    HotLocation,
    HotSite,
    btnChange
  },
  data() {
    return {
      //充电地区
      btnLocationS: [
        { text: "热门地区", current: true },
        { text: "热门站点", current: false }
      ],
      isShow: true
    };
  },
  methods: {
    // 充电地区切换按钮
    Change(data) {
      //把所有的current 属性全部改为false
      this.btnLocationS.forEach((ele,index) => {
        ele.current = false
      });
      //再把当前的current改为true
      data.current = true;
      //省市排行榜切换
      this.isShow = !this.isShow
    },
  }
};
</script>

<style lang="less" scoped>
.capacityY {
  width: 100%;
  height: 490px;
  box-sizing: border-box;
  .btn {
    position: absolute;
    top: 26px;
    right: 10px;
  }
}
</style>