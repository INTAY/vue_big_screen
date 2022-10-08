<template>
  <div>
    <el-button
      type="text"
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
      },
    },
  },
  methods: {
    checkDate(data) {
      this.$emit("checkDate", data);
    },
  },
};
</script>


<style lang="less" scoped>
.scatter {
  font-family: "HYQiHei-50S";
  font-size: 34px;
  letter-spacing: 5px;
  padding: 2px 35px;
  color: #fff;
  margin-left: 30px;
}
.el_bgc {
  color: #ffae00;
  border: none;
}
.el-button:nth-child(1) {
    border-right: 3px solid #496886;
}
</style>