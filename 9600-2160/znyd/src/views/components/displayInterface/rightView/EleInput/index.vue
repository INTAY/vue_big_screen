<template>
    <div class="rank">
        <!-- 充电量排名模块 -->
        <Einput />
        <!-- 资产信息模块 -->
        <Information />
    </div>
</template>

<script>

import Einput from './EInput' //引入充电电力
import Information from './information'  //引入资产信息模块


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
    width: 1345px;
    height: 100%;
}

</style>