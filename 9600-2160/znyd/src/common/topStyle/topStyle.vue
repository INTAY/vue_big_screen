<template>
  <div class="topStyle">{{this.nameTitle}}</div>
</template>

<script>
export default {
  props: {
    nameTitle: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
};
</script>

<style lang="less" scoped>
.topStyle {
  padding-left: 62px;
  width: 100%;
  height: 105px;
  line-height: 105px;
  font-size: 48px;
  font-family: "HYQiHei-55S";
  letter-spacing: 5px;
  color: #fff;
  background: linear-gradient(to right, #004c83, #082b54);
  border-bottom: 4px solid #009acd;
  box-sizing: border-box;
}
</style>