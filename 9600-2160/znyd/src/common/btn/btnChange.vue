<template>
  <div>
    <el-button
      :class="{'el_bgc':item.current,'scatter': true}"
      v-for="item in btnDates"
      :key="item.id"
      @click="checkDate(item)"
    >{{item.text}}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    btnDates: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
      checkDate(data) {
          this.$emit('checkDate',data)
      }
  }
};
</script>


<style lang="less" scoped>
  .scatter {
    font-family: "HYQiHei-50S";
    font-size: 34px;
    letter-spacing: 5px;
    padding: 18px 35px;
    color: #fff;
    border-radius: 50px;
    border: 2px solid #2d5394;
    background-color: #0b1c45;
    margin-left: 30px;
  }
  .el_bgc {
    background: #043c6d;
    border-color: #043c6d;
  }

</style>