<template>
  <div class="timeDate">
    <div>
      {{this.toDay}}
      <span class="week">{{this.week}}</span>
    </div>
    <div class="de_time">{{this.houersTimes}}</div>
  </div>
</template>

<script>
import {  mapMutations } from "vuex"; //引入vuex数据
export default {
  
  data() {
    return {
      toDay: "",
      houersTimes: "",
      week: ""
    };
  },
  mounted() {
    this.time();
  },
  methods: {
    ...mapMutations(['setPunctuality',"setHour","setMin","setSec"]),
    time() {
      //计时
      setInterval(this.getDate, 1000);
    },
    //时间函数
    getDate() {
      
      let time = new Date();  //获得总时间戳
      let year = time.getFullYear(); //得到年份
      let month = time.getMonth(); //得到月份
      let date = time.getDate(); //得到日期
      let day = time.getDay(); //得到周几
      let hour = time.getHours(); //得到小时
      let minu = time.getMinutes(); //得到分钟
      let sec = time.getSeconds(); //得到秒
      //时间晋级
      month = month + 1;
      if (month < 10) month = "0" + month;
      if (date < 10) date = "0" + date;
      if (hour < 10) hour = "0" + hour;
      if (minu < 10) minu = "0" + minu;
      if (sec < 10) sec = "0" + sec;
      //定义周末
      const arr_week = new Array(
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      );
      //获得今年日期
      let thatDay = year + "年" + month + "月" + date + "日"; //年月日初始化
      this.toDay = thatDay;
      //获得今天是星期几
      let week = arr_week[day];
      this.week = week; //星期初始化
      //获得具体时间
      let thatTime = hour + ":" + minu + ":" + sec + " ";
      this.houersTimes = thatTime; //当天初始化 

      this.setPunctuality(this.houersTimes.trim()) //设置准点
      //设置一小时
      let ahoursIndax = thatTime.indexOf(":") + 1
      let ahours = thatTime.slice(ahoursIndax)
      this.setHour(ahours.trim()) 
      //设置分钟
      let MinIndax = thatTime.indexOf(":") + 2
      let Min = thatTime.slice(MinIndax)
      this.setMin(Min.trim())   
      //设置秒 
      let SecIndax = thatTime.lastIndexOf(":")+1
      let Sec = thatTime.slice(SecIndax)      
      this.setSec(Sec.trim()) 
    }
  }
};
</script>

<style lang="less" scoped>
.timeDate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  font-family: "HYQiHei-40S";
  font-size: 53px;
  text-align: center;
  color: #fff;
  letter-spacing: 3px;
  .week {
    margin-right: 30px;
  }
  .de_time {
    margin-top: 10px;
    font-family: "HYQiHei-85S";
    font-size: 75px;
  }
}
</style>