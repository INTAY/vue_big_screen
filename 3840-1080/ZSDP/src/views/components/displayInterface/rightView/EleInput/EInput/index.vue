<template>
    <div class="battery">
        <!-- 四角高亮模块 -->
        <Corner />
        <!-- 三竖标记模块 -->
        <Sign />
        <!-- 模块标题 -->
        <el-button type="text" class="M_title">充电电力</el-button>
        <!-- 功率和充电电力模块 -->
        <Summary />
        <!-- 环形图模块 -->
        <Annular />
    </div>
</template>

<script>

import Corner from "../../../cornerLine"; //引入四角高亮模块
import Sign from '../../../sign'; //引入三竖标记模块
import Summary from './summary';//引入总汇模块
import Annular from './annular';  //引入环形图模块

export default {
    components: { //注册引用的模块
        Corner,
        Sign,
        Summary,
        Annular
    }
}
</script>

<style lang="less" scoped>
.battery {
    position: relative;
    width: 100%;
    height: 511px;
    padding: 25px 30px 0px 25px;
    border: 1px solid #122c56;
    background-color: rgba(11,32,66,.5);
    box-sizing: border-box;
}
</style>