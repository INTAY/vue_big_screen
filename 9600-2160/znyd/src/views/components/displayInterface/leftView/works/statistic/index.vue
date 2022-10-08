<template>
    <div class="statistic">
        <!-- 统计总汇模块 -->
        <Census />
        <!-- 折线图模块 -->
        <Charts />
    </div>
</template>

<script>
import Census from "./census"; //引入统计总汇模块
import Charts from './charts/charts';  //引入折线图模块
export default {
    components: {
        Census,
        Charts
    }
}
</script>

<style lang="less" scoped>
.statistic {
    display: flex;
    flex-direction: column;
    width: 1235px;
    height: 1620px;
    margin-top: 60px;
}
</style>