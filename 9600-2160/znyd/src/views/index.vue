<template>
  <div class="bgc">
    <!-- 头部模块 -->
    <Header />
    <!-- 主题内容展示区 -->
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/header";//引入头部组件模块

export default {
  components: { //注册引入的组件
    Header,
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.bgc {
  width: 9600px;
  height: 2160px;
  background-color: #0c1937;
  background-size: 100% 100%;
}
</style>