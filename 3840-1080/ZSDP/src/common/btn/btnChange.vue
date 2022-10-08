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
    font-size: 18px;
    padding: 7px 10px;
    color: #fff;
    border-radius: 20px;
    border: 1px solid #2d5394;
    background-color: #0b1c45;
    margin-left: 8px;
  }
  .el_bgc {
    background: linear-gradient(to right, #6130de, #3789e4);
    border:1px transparent solid;
    border-image: linear-gradient( #6130de, #3789e4) 0;
    border-radius: 20px;
    
  }

</style>