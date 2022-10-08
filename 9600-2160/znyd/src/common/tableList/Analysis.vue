<template>
  <div>
    <ul class="count">
      <li v-for="(item,index) in accumulative" :key="item.id">
        <div :class="{'cir':true,'cilcTop':index === 0,'cilcMiddle':index === 1,'cilcBottom':index === 2}"></div>
        <el-button type="text" :class="{'textN':true,'colorTop':index === 0,'colorMiddle':index === 1,'colorBottom':index === 2}">{{item.text}}</el-button>
        <el-button type="text" class="digit">
          {{item.amount}}
          <span>万元</span>
        </el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        accumulative:{
            type: Array,
            default: () => {
                return []
            }
        }
    },
};
</script>

<style lang="less" scoped>
.count {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 347px;
    li {
      position: relative;
      flex: 1;
      display: flex;
      justify-content: flex-start;
      .el-button {
        flex: 1;
      }
      .cir {
        position: absolute;
        top: 45px;
        left: 59px;
        width: 21px;
        height: 21px;
        border-radius: 50%;
      }
      .textN {
        font-family: 'HYQiHei-40S';
        font-size: 34.5px;
        font-weight: 300;
        letter-spacing: 5px;
      }
      .digit {
        font-family: 'HYQiHei-80w';
        font-size: 48px;
        color: #f5b325;
        span {
          font-family: 'HYQiHei-40S';
          font-size: 28px;
          font-weight: 300;
        }
      }
    }
    li:nth-child(odd) {
      background-color: rgba(24, 48, 103, 0.5);
    }
    //圆圈
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
</style>