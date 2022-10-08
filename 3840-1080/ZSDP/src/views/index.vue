<template>
  <div class="bgc">
    <!-- 主题内容展示区 -->
      <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.bgc {
  width: 3840px;
  height: 1080px;
  background: url("../assets/picture/bg.png") no-repeat; //引入背景图片
  background-size: 100% 100%;
}
</style>