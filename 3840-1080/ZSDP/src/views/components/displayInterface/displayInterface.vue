<template>
  <div class="interface">
    <div class="header">
      <Header />
    </div>
    <div class="main_under">
      <Right />
      <Map />
      <Left />
    </div>
  </div>
</template>

<script>
import Left from "./leftView"; //引入右侧组件
import Right from "./rightView"; //引入左侧组件
import Map from "./map"; //引入地图模块
import Header from "./header/index";



export default {
  //注册引入的组件
  components: {
    Left,
    Right,
    Map,
    Header,
  },
};
</script>

<style lang="less" scoped>
.interface {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1080px;
  box-sizing: border-box;
  .main_under {
    display: flex;
    height: 935px;
    margin-top: 20px;
    padding: 0px 9px;
    box-sizing: border-box;
  }
  .header {
    flex: 1;
  }
}
</style>