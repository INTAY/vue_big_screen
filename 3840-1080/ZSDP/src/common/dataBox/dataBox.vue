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
  width: 474px;
  height: 71px;
  margin-top: 19px;
  border: 1px solid #1e3260;
  background-color: #091a40;
  border-radius: 4px;
  .amount {
    flex: 1;
    font-family: "HYQiHei-40S";
    font-size: 18px;
    padding-top: 10px;
    color: #acb9cb;
    text-align: center;
    .num {
      font-family: "HYQiHei-70S";
      font-size: 20px;
      color: #4188e1;
      .unit {
        font-family: "HYQiHei-40S";
        font-size: 18px;
        color: #acb9cb;
      }
    }
  }
  .bg {
    position: absolute;
    top: 10px;
    width: 1px;
    height: 53px;
    background: url("../../assets/picture/tile_line.png");
  }
}
</style>