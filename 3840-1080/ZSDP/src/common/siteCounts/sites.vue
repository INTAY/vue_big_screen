<template>
  <div class="station">
    <div class="station_counts" v-for="(item,index) in counts" :key="index">
      <div :class="{'colorTop':index === 0,'colorMiddle':index === 1,'colorBottom':index === 2}">
        <div :class="{'cilc':true,'cilcTop':index === 0,'cilcMiddle':index === 1,'cilcBottom':index === 2}"></div>
        <div class="shop_w">{{item.name}}</div>
      </div>
      <ul class="shop_n">
        <!-- 遍历数量,通过split分割组成数组进行遍历 -->
        <li class="num" v-for="number in ((item.amount + '').split(''))" :key="number.id">{{number}}</li>
      </ul>
      <li class="WT">{{item.unit}}</li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    counts:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
};
</script>

<style lang="less" scoped>
.station {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 262px;
  .station_counts {
    position: relative;
    display: flex;
    height: 65px;
    .shop_w {
      width: 132px;
      margin-left: 20px;
      line-height: 68px;
      font-size: 17px;
      font-family: "HYQiHei-40S";
    }
    .shop_n {
      display: flex;
      color: #fff;
      .num {
        width: 32px;
        height: 65px;
        margin-right: 5px;
        text-align: center;
        line-height: 65px;
        border-radius: 5px;
        font-size: 40px;
        font-family: "HYQiHei-70S";
        background: linear-gradient(#1f3a9e, #145eb9, #1f3a9e);
      }
    }
    //单位坐标
    .WT {
      color: #fff;
      font-size: 20px;
      margin-top: 35px;
      font-family: "HYQiHei-40S";
    }
    .cilc {
      position: absolute;
      top: 30px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
    }
    .cilcTop {
      background-color: #e1bf48;
    }
    .cilcMiddle {
      background-color: #61bfff;
    }
    .cilcBottom {
      background-color: #ea9636;
    }
    .colorTop {
      color: #e1bf48;
    }
    .colorMiddle {
      color: #61bfff;
    }
    .colorBottom {
      color: #ea9636;
    }
  }
}
</style>