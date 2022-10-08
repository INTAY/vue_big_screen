<template>
  <div class="Ranking">
    <div class="consumption" v-for="item in ranks" :key="item.id">
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
import {refurbish} from "@/common/Mixins/refurbishMixins"

export default {
  mixins:[refurbish],
  data() {
    return {
      ranks: [
        { text: "充电设施全国排名", number: '--' },
        { text: "充电量全国排名", number: '--' }
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
      //市区名称
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
      let count = countStr;
      this.ranks[0].number = count[0];
      this.ranks[1].number = count[1];
    },
    //定时刷新
    deRefesh() {
      if (this.keyer.punctuality == "07:00:00") {
        this.CityRank();
      }
    }
  },
  
  watch: {
    initialize() {
      this.CityRank();
    },
  },
};
</script>

<style lang="less" scoped>
.Ranking {
  display: flex;
  justify-content: space-between;
  width: 490px;
  height: 75px;
  font-family: "HYQiHei-40S";
  font-size: 18px;
  margin-top: 13px;
  color: #fff;
  text-align: center;
  .consumption {
    flex: 1;
    padding-top: 10px;
    margin-left: 11px;
    border-radius: 6px;
    box-sizing: border-box;
    background: linear-gradient(to right, #6130de, #4865e2, #3789e4);
  }
  .fRink {
    letter-spacing: 0px;
    .fsiz {
      font-family: "HYQiHei-85s";
      font-size: 30px;
      color: #ffde00;
    }
  }
}
</style>