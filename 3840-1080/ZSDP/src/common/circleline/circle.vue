<template>
  <div>
    <div v-for="item in circleData" :key="item.id">
      <div
        :class="{'fontS':item.name == '充电次数' ,fontS_1:item.name == '充电量','fontS_2':item.name == '用户数',fontS_3:item.name == '充电设施',fontS_4:item.name == '充电站',fontCommon:true}"
      >
        <div>{{item.name}}</div>
        <div class="fontW">{{item.value*100}}%</div>
      </div>
    </div>
    <!-- 牵引线引入 -->
    <circleline />
  </div>
</template>

<script>
import circleline from "./circleline";  //牵引线引入
export default {
  props: {
    circleData: {
        default: ()=> {
          return []
        },
        type: Array
    }
  },
  components: {
      circleline,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.fontW {
  font-family: "HYQiHei-70S";
}
.fontCommon {
  position: absolute;
  font-family: "HYQiHei-40S";
  font-size: 18px;
  text-align: center;
  color: #5d8ce9;
}
// -----------------------充电次数---------------------
.fontS {
  bottom: 19%;
  right: 8%;
}
// ---------------------------充电量-------------------
.fontS_1 {
  bottom: 19%;
  left: 2%;
}
// --------------------------- 用户数 -------------------
.fontS_2 {
  bottom: 49%;
  right: 11%;
}
// --------------------------- 充电设施 -------------------
.fontS_3 {
  top: 4%;
  right: 13%;
}
// --------------------------- 充电站 -------------------

.fontS_4 {
  top: 4%;
  left: 5%;
}
</style>