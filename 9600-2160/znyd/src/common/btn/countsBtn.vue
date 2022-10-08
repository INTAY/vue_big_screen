<template>
  <div class="textBtn">
    <el-button
      type="text"
      :class="{'fnC':item.current,'textF': true,'border':index !== 2}"
      v-for="(item,index) in btnCounts"
      :key="item.id"
      @click="checkCount(item)"
    >{{item.text}}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    btnCounts: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
      checkCount(data) {
          this.$emit("checkCount",data)
      }
  }
};
</script>

<style lang="less" scoped>
.textBtn {
  position: absolute;
  top: 190px;
  right: 51px;
  z-index: 1000;
  .textF {
    font-family: "HYQiHei-70S";
    font-size: 36px;
    font-weight: 300;
    padding: 0 46px;
    color: #ccc;
  }
  .fnC {
    color: #08cfdb;
  }
  .border {
      border-right:3px solid rgba(51, 71, 108, 0.5);
  }
}
</style>