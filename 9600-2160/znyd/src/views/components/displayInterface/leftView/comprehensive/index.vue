<template>
    <div class="comprehensive">
        <!-- 引入指标模块 -->
        <Target />
        <!-- 充电桩监视 -->
        <Monitor />
        <!-- 运维人员情况 -->
        <Situation />
    </div>
</template>

<script>


import Target from './target' //引入指标模块
import Monitor from './monitor' //引入充电桩监视
import Situation from './situation' //引入运维人员情况


export default {

    components: { //注册引入组件
        Target,
        Monitor,
        Situation
    }
}
</script>

<style lang="less" scoped>
.comprehensive {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1335px;
    height: 100%;
}
</style>