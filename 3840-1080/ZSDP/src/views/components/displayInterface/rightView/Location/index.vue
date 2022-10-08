<template>
    <div class="wesite">
        <!-- 引入充电站模块 -->
        <Specific />
        <!-- 引入损益模块 -->
        <Analysis />
    </div>
</template>

<script>

import Specific from './specific' //引入充电站信息模块
import Analysis from './Analysis' //引入损益模块

export default {
    components: {
        Specific,
        Analysis,
    }
}
</script>

<style lang="less" scoped>
.wesite {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 394px;
    height: 100%;
}

</style>