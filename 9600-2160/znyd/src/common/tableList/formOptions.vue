<template>
  <div>
    <div class="pile">
      <div class="pile_header">
        <el-button type="text" v-for="(item,index) in postsCustom" :key="index">{{item.name}}</el-button>
      </div>
      <div class="pile_main">
        <el-button type="text" v-for="(item,index) in postsCustom" :key="index">{{item.number}}</el-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    postsCustom: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
};
</script>

<style lang="less" scoped>
.pile {
  height: 188px;
  display: flex;
  flex-direction: column;
  border: 2px solid #2d5394;
  border-radius: 15px;
  div {
    flex: 1;
  }
  .pile_header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #193383;
    border-radius: 15px 15px 0 0;
    .el-button {
      font-family: "HYQiHei-50S";
      font-size: 34.5px;
      letter-spacing: 3px;
      text-align: center;
      color: #acb9cb;
    }
  }
  .pile_main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .el-button {
      font-family: "HYQiHei-40S";
      font-size: 34.5px;
      text-align: center;
      letter-spacing: 1.5px;
      color: #f5b325;
    }
  }
}
</style>