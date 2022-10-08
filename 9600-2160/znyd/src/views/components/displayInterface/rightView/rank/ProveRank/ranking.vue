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
import { mapState } from "vuex"; //引入vuex数据
export default {
  data() {
    return {
      ranks: [
        { text: "北京市充电设施全国排名", number: 1 },
        { text: "北京市充电量全国排名", number: 1 }
      ]
    };
  },
  computed: {
    ...mapState(["login", "keyer"])
  },
  created() {
    this.ProveRank();
  },
  mounted() {
    this.$nextTick(() => {
      clearInterval(timer);
      var timer = setInterval(this.deRefesh, 1000);
    });
  },
  methods: {
    async ProveRank() {
      let regId = this.login.regId;
      const { data: res } = await request(
        `/largeScreen/chargingRanking/queryDeviceRanking/${regId}`
      );
      //排名
      let countStr = res
        .map((obj, index) => {
          return obj.ranking;
        })
      this.ranks[0].number = countStr[0];
      this.ranks[1].number = countStr[1];
    },
    //定时刷新
    deRefesh() {
      if (this.keyer.punctuality == "07:00:00") {
        this.ProveRank();
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
  font-size: 38px;
  margin-top: 30px;
  letter-spacing: 3px;
  color: #fff;
  text-align: center;
  .consumption {
    flex: 1;
    padding-top: 26px;
    margin-left: 14px;
    border-radius: 15px;
    box-sizing: border-box;
    background: #043c6d;
  }
  .fRink {
    letter-spacing: 0px;
    .fsiz {
      font-family: "HYQiHei-85s";
      font-size: 45px;
      color: #f5b325;
    }
  }
}
</style>