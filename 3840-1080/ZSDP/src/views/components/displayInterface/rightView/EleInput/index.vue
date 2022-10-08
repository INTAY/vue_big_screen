<template>
    <div class="rank">
        <!-- 充电电力模块模块 -->
        <Einput />
        <!-- 工单信息模块 -->
        <Information />
    </div>
</template>

<script>

import Einput from './EInput' //充电电力模块
import Information from './information'  //工单信息模块


export default {
    components: {
        Einput,
        Information
    }
}
</script>


<style lang="less" scoped>
.rank {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 540px;
    height: 100%;
}

</style>