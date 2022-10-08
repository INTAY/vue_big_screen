<template>
    <div class="breakdown">
        <!-- 故障信息模块 -->
        <Fault />
        <!-- 工单信息模块 -->
        <Order />
    </div>
</template>

<script>
import Fault from './fault'  //故障信息模块
import Order from './order'   //工单信息模块
export default {
    components: {
        Fault,
        Order
    }
}
</script>

<style lang="less" scoped>
.breakdown {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 535px;
    height: 100%;
}
</style>