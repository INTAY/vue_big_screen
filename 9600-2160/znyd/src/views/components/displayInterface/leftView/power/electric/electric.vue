<template>
    <div class="electric">
        <!-- 引入负荷充电模块 -->
        <Load />
        <!-- 引入有序充电模块 -->
        <Order />
        <!-- 引入华北调峰充电模块 -->
        <Peaking />
    </div>
</template>

<script>
import Load from './load';//引入负荷充电模块
import Order from './order';//引入有序充电模块
import Peaking from './peaking'; //引入华北调峰充电模块

export default {
    components: {
        Load,
        Order,
        Peaking
    }
}
</script>

<style lang="less" scoped>
.electric {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1235px;
    height:1500px;
    margin-top: 48px;
}

</style>