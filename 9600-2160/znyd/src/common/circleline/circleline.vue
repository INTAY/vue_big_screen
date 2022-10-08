<template>
  <div>
    <div class="bias"></div>
    <div class="horizontal"></div>
    <div class="bias_1"></div>
    <div class="horizontal_1"></div>
    <div class="bias_2"></div>
    <div class="horizontal_2"></div>
    <div class="bias_3"></div>
    <div class="horizontal_3"></div>
    <div class="bias_4"></div>
    <div class="horizontal_4"></div>
    <div class="circle circle_1"></div>
    <div class="circle circle_2"></div>
    <div class="circle circle_3"></div>
    <div class="circle circle_4"></div>
    <div class="circle circle_5"></div>
    <div class="circle circle_6"></div>
    <div class="circle circle_7"></div>
    <div class="circle circle_8"></div>
    <div class="circle circle_9"></div>
    <div class="circle circle_10"></div>
  </div>
</template>
<style lang="less" scoped>
// -----------------------充电次数---------------------
.circle {
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: #fff;
}
.bias {
  position: absolute;
  top: 60%;
  left: 45%;
  width: 270px;
  height: 2px;
  transform: rotate(45deg);
  background-color: #53d5ff;
}
.horizontal {
  position: absolute;
  bottom: 25%;
  right: 24%;
  width: 150px;
  height: 2px;
  background-color: #53d5ff;
}
.circle_1 {
  position: absolute;
  bottom: 24%;
  right: 23%;
}
.circle_2 {
  position: absolute;
  top: 44%;
  left: 47%;
}
// ---------------------------充电量-------------------
.bias_1 {
  position: absolute;
  top: 60%;
  left: 24%;
  width: 270px;
  height: 2px;
  transform: rotate(-45deg);
  background-color: #53d5ff;
}
.horizontal_1 {
  position: absolute;
  bottom: 25%;
  left: 15%;
  width: 151px;
  height: 2px;
  background-color: #53d5ff;
}
.circle_3 {
  position: absolute;
  bottom: 24%;
  left: 14%;
}
.circle_4 {
  position: absolute;
  top: 44%;
  left: 42%;
}
// --------------------------- 用户数 -------------------
.bias_2 {
  position: absolute;
  top: 37%;
  left: 45%;
  width: 240px;
  height: 2px;
  transform: rotate(25deg);
  background-color: #53d5ff;
}
.horizontal_2 {
  position: absolute;
  bottom: 55%;
  right: 24%;
  width: 152px;
  height: 2px;
  background-color: #53d5ff;
}
.circle_5 {
  position: absolute;
  bottom: 54%;
  right: 23%;
}
.circle_6 {
  position: absolute;
  top: 28%;
  left: 45%;
}
// --------------------------- 充电设施 -------------------
.bias_3 {
  position: absolute;
  top: 15%;
  left: 45%;
  width: 160px;
  height: 2px;
  transform: rotate(-25deg);
  background-color: #53d5ff;
}
.horizontal_3 {
  position: absolute;
  top: 10%;
  right: 29%;
  width: 168px;
  height: 2px;
  background-color: #53d5ff;
}
.circle_7 {
  position: absolute;
  top: 9%;
  right: 28%;
}
.circle_8 {
  position: absolute;
  top: 19%;
  left: 45%;
}
// --------------------------- 充电站 -------------------
.bias_4 {
  position: absolute;
  top: 15%;
  left: 33%;
  width: 64px;
  height: 2px;
  transform: rotate(-125deg);
  background-color: #53d5ff;
}
.horizontal_4 {
  position: absolute;
  top: 11%;
  left: 18%;
  width: 198px;
  height: 2px;
  background-color: #53d5ff;
}
.circle_9 {
  position: absolute;
  top: 9.5%;
  left: 17%;
}
.circle_10 {
  position: absolute;
  top: 18%;
  left: 36.5%;
}
</style>