<template>
  <div class="confluence">
    <div class="amount" v-for="(item,index) in countData" :key="item.id">
      {{item.text}}
      <div class="num">
        {{item.number}}
        <span class="unit">{{item.unit}}</span>
        <div :class="{bg:index == 0? false:true}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    countData: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.confluence {
  display: flex;
  position: relative;
  justify-content: flex-start;
  width: 1177px;
  height: 149px;
  margin-top: 41px;
  border: 1px solid #1e3260;
  background-color: #091a40;
  border-radius: 10px;
  .amount {
    flex: 1;
    font-family: "HYQiHei-40S";
    font-size: 32px;
    padding-top: 25px;
    color: #acb9cb;
    letter-spacing: 5px;
    text-align: center;
    .num {
      margin-top: 13px;
      font-family: "HYQiHei-70S";
      font-size: 41px;
      color: #f5b325;
      letter-spacing: 1px;
      .unit {
        font-family: "HYQiHei-40S";
        font-size: 25px;
        color: #acb9cb;
      }
    }
  }
  .bg {
    position: absolute;
    top: 10px;
    width: 2px;
    height: 121px;
    background: url("../../assets/picture/tile_line.png");
  }
}
</style>