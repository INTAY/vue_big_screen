<template>
  <div class="interface">
    <Right />
    <Map />
    <Left />
  </div>
</template>

<script>
import Left from "./leftView"; //引入右侧组件
import Right from "./rightView"; //引入左侧组件
import Map from "./map"; //引入地图模块

export default {
  components: {
    //注册引入的组件
    Left,
    Right,
    Map
  }
};
</script>

<style lang="less" scoped>
.interface {
  display: flex;
  width: 100%;
  height: 1868px;
  margin-top: 39px;
  padding: 0px 24px;
  box-sizing: border-box;
}
</style>