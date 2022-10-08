<template>
    <div class="charge">
        <!-- 今日充电模块 -->
        <Today />
        <!-- 历史充电模块 -->
        <Yesterday />
    </div>
</template>

<script>

import Today from './today' //引入今日充电模块
import Yesterday from './yesterday' //引入历史充电模块
export default {
    components: {
        Today,
        Yesterday
    }
}
</script>

<style lang="less" scoped>
.charge {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 532px;
    height: 100%;
}

</style>