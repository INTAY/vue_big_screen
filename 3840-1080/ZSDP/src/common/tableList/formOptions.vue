<template>
  <div>
    <div class="pile">
      <div class="pile_header">
        <el-button type="text" v-for="(item,index) in postsCustom" :key="index">{{item.name}}</el-button>
      </div>
      <div class="pile_main">
        <el-button type="text" v-for="(items,index) in postsCustom" :key="index">{{items.number}}</el-button>
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
  display: flex;
  flex-direction: column;
  border: 1px solid #2d5394;
  height: 95px;
  border-radius: 6px;
  div {
    flex: 1;
  }
  .pile_header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #193383;
    border-radius: 6px 6px 0 0;
    .el-button {
      font-family: "HYQiHei-50S";
      font-size: 20px;
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
      font-size: 22px;
      text-align: center;
      color: #fff;
    }
  }
}
</style>