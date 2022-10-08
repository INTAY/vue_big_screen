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
  width: 815px;
  height: 520px;
  margin-top: 30px;
  .station_counts {
    position: relative;
    display: flex;
    width: 769px;
    height: 140px;
    .shop_w {
      width: 290px;
      margin-left: 60px;
      line-height: 140px;
      font-size: 39px;
      font-family: "HYQiHei-40S";
      letter-spacing: 5px;
    }
    .shop_n {
      display: flex;
      color: #f5b325;
      .num {
        width: 85px;
        height: 140px;
        margin-right: 14px;
        text-align: center;
        line-height: 140px;
        border-radius: 10px;
        font-size: 80px;
        font-family: "HYQiHei-70S";
        background: #033e71;
      }
    }
    //单位坐标
    .WT {
      color: #fff;
      font-size: 39px;
      margin-top: 100px;
      font-family: "HYQiHei-40S";
    }
    .cilc {
      position: absolute;
      left: 20px;
      top: 60px;
      width: 18px;
      height: 18px;
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