<template>
  <div class="Ranking">
    <div class="installation" v-for="item in ranks" :key="item.id">
      <div>{{item.text}}</div>
      <div class="fRink">
        第
        <span class="fsiz">{{item.number}}</span>名
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import { mapState } from "vuex";

export default {
  data() {
    return {
      ranks: [
        { text: "充电设施全国排名", number: 1 },
        { text: "充电量全国排名", number: 1 }
      ]
    };
  },

  computed: {
    ...mapState(["login","keyer"])
  },
  created() {
    this.CityRank();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async CityRank() {
      let regId = this.login.cityRegId || this.login.regId;
      //充电排名、充电量排名
      this.ranks[0].text = this.login.cityName + "充电设施全国排名";
      this.ranks[1].text = this.login.cityName + "充电量全国排名";
      const { data: res } = await request(
        `/largeScreen/chargingRanking/queryDeviceRanking/${regId}`
      );
      
      //排名
      let countStr = res
        .map((obj, index) => {
          return obj.ranking;
        })
        .join(",");
      let count = countStr.split(",");
      this.ranks[0].number = count[0];
      this.ranks[1].number = count[1];
    },
    //实时刷新 30s刷新一次
    deRefesh() {
      if (this.keyer.punctuality == "07:00:00") {
        this.CityRank();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.Ranking {
  display: flex;
  justify-content: space-between;
  width: 1221px;
  height: 152px;
  font-family: "HYQiHei-40S";
  font-size: 31.5px;
  margin-top: 30px;
  letter-spacing: 7px;
  color: #fff;
  text-align: center;
  .installation {
    flex: 1;
    padding-top: 26px;
    margin-right: 14px;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: #043c6d;
  }
  .fRink {
    letter-spacing: 0px;
    .fsiz {
      font-family: "HYQiHei-85s";
      font-size: 45px;
      color: #ffde00;
    }
  }
}
</style>