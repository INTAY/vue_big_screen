<template>
  <div class="pile">
    <Specific />
  </div>
</template>

<script>
import Specific from './specific'

export default {
  //注册引用的模块
  components: {
    
    Specific
  }
};
</script>

<style lang="less" scoped>
.pile {
  position: relative;
  width: 100%;
  height: 526px;
  border: 1px solid #122c56;
  background-color: rgba(11,32,66,.5);
  box-sizing: border-box;
}
</style>