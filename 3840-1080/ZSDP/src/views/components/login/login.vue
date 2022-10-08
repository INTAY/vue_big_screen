<template>
  <div class="basePage">
    <el-button type="text" class="corporateName">电动汽车服务系统</el-button>
    <!-- 登录主页模块 -->
    <div class="login">
      <div class="login_title">用户登录</div>
      <div class="login_main">
        <el-form
          label-width="110px"
          status-icon
          class="login_form"
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
        >
          <!-- 用户名 -->
          <el-form-item prop="userName" class="item-from" label="用户名:" placeholder="请输入用户名">
            <el-input
              type="text"
              v-model="ruleForm.userName"
              minlength="5"
              maxlength="16"
              autocomplete="off"
              placeholder
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item
            prop="password"
            class="item-from"
            label="密码:"
            placeholder="请输入密码"
            style="font-size:34px; color:'#fff'"
          >
            <el-input
              type="password"
              minlength="6"
              maxlength="12"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <!-- 验证码 -->
          <el-form-item prop="captcha" class="item-from" label="验证码:" placeholder="请输入验证码">
            <el-row :gutter="15">
              <el-col :span="13">
                <el-input v-model="ruleForm.captcha"></el-input>
              </el-col>
              <el-col :span="8" class="captcha">
                <img :src="captchaPath" alt />
                <el-button type="text" size="medium" @click="getCaptcha()">换一张</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login('ruleForm')" class="login-btn block">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 时间天气模块 -->
    <div class="login_WD">
      <Date />
    </div>
  </div>
</template>

<script>
import {
  stripscript,
  validatePass,
  validateUsers,
  validateVCode,
} from "@/utils/validate"; //引入验证规则

import Date from "@/common/times/times"; //引入时间插件
import JSEncrypt from "jsencrypt"; //引入加密插件
import { isNil } from "lodash";
import request from "@/utils/request";
import { userInfo } from "@/utils/user";
import { mapState, mapMutations } from "vuex"; //引入vuex数据
import axios from "axios";
import BUS from "@/utils/bus"


export default {
  name: "login",
  components: {
    Date,
  },
  data() {
    // 验证用户名
    let validateUsername = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入用户名"));
      } else if (validateUsers(value)) {
        callback(new Error("用户名格式有误"));
      } else {
        callback(); //true
      }
    };
    // 验证密码
    let validatePassword = (rule, value, callback) => {
      // 过滤后的数据
      this.ruleForm.password = stripscript(value);
      value = this.ruleForm.password;
      if (value == "") {
        callback(new Error("请输入密码"));
      } else if (validatePass(value)) {
        callback(new Error("密码为6至20位数字+字母"));
      } else {
        callback();
      }
    };
    // 验证验证码
    let validateCode = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入验证码"));
      } else if (validateVCode(value)) {
        return callback(new Error("验证码格式有误"));
      } else {
        callback();
      }
    };
    return {
      uuid: null,
      captchaPath: "",
      ruleForm: {
        userName: "largeScreenAdmin", //largeScreenAdmin
        password: "user123",//user123
        captcha: "",
      },
      rules: {
        userName: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        captcha: [{ validator: validateCode, trigger: "blur" }],
      },
    };
  },
  created() {
    // 绑定enter事件
    this.enterKeyup();
  },
  destroyed() {
    // 销毁enter事件
    this.enterKeyupDestroyed();
  },
  mounted() {
    this.getCaptcha();
  },
  methods: {
    ...mapMutations([
      "setProve",
      "setCity",
      "setFullName",
      "setRegId",
      "setCityName",
      "setLevel"
    ]),
    getPublicKey() {
      return axios({
        url: request.adornUrl(`/authentication/auth/publickey`),
        method: "GET",
      });
    },

    login(formName) {
      sessionStorage.setItem("isLogin", 1);
      var that = this;
      this.$refs["ruleForm"].validate(async (valid) => {
        if (valid) {
          const { data: res } = await that.getPublicKey();
          if (res.code == "000000") {
            // 密码加密
            var publickey = res.data;
            const formData = new FormData();
            formData.append("username", that.ruleForm.userName);
            const encrypt = new JSEncrypt();
            encrypt.setPublicKey(publickey);
            var enpassword = encrypt.encrypt(that.ruleForm.password); // 加密后的字符串

            formData.append("password", enpassword);

            axios({
              url: request.adornUrl(
                `/authorization/oauth/token?scope=read&grant_type=password&userType=1&verifiCode=` +
                  that.ruleForm.captcha +
                  "&uuid=" +
                  that.uuid
              ),
              method: "POST",
              data: formData,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic dGVzdF9jbGllbnQ6dGVzdF9zZWNyZXQ=",
              },
            })
              .then((res2) => {
                if ("200" == res2.status) {
                  if (isNil(res2.data.code)) {
                    //登录成功，保存token等信息，跳转到主页
                    that.$cookie.set("token", res2.data.access_token);
                    // 保存token
                    sessionStorage.setItem("token", res2.data.access_token);
                    sessionStorage.setItem("refreshtoken", res2.data.refresh_token);
                    //传orgID,请求regid地址保存到本地
                    let id = res2.data.orgId;
                    request(`/system/group/${id}`)
                      .then((res) => {
                        //保存regId
                        this.setRegId(res.data.regionId);
                        sessionStorage.setItem("IDHeader", res.data.regionId);
                        //获取用户等级
                        let id = res.data.regionId;
                         
                        request(`/system/region/getRegionByRegId/${id}`).then(
                          (res) => {
                            //获取当前省名称
                            this.setFullName(res.data.fullName);
                            this.setLevel(res.data.level)
                            //判断是哪一级
                            if (res.data.level == 1) {
                              //省一级页面显示
                              this.setProve(true);
                              this.setCity(false);
                            } else if (res.data.level == 2) {
                              //市一级页面显示
                              this.setCityName(res.data.name);
                              this.setProve(false);
                              this.setCity(true);
                            } else {
                              //区一级页面显示
                            }
                            BUS.$emit("initialize",res.data.fullName)
                          }
                        );
                      })
                      .catch((error) => {});
                      //锚点解决刷新问题
                      
                    // 跳转到省级页
                    that.$router.push("/");
                    
                  } else {
                    that.getCaptcha();
                  }
                } else {
                  that.getCaptcha();
                }
              })
              .catch(function (error) {
                that.getCaptcha();
              });
          }
        } else {
          that.getCaptcha();
        }
      });
    },
    // 获取验证码
    getCaptcha() {
      this.uuid = this.getUUID();
      this.captchaPath = request.captchaPath(this.uuid);
    },
    getUUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        return (c === "x"
          ? (Math.random() * 16) | 0
          : "r&0x3" | "0x8"
        ).toString(16);
      });
    },
    getUserInfo(userId) {
      return new Promise((resolve, reject) => {
        userInfo(userId).then((res) => {
          if ("000000" == res.code) {
            resolve();
          } else {
          }
        });
      });
    },
    // 键盘事件 start
    enterKey(event) {
      if (event.code === "Enter") {
        this.login();
      }
    },
    enterKeyupDestroyed() {
      document.removeEventListener("keyup", this.enterKey);
    },
    enterKeyup() {
      document.addEventListener("keyup", this.enterKey);
    },
    // 键盘事件 end
  },
};
</script>

<style lang="less">
.basePage {
  position: relative;
  width: 3840px;
  height: 1080px;
  background: url("../../../assets/picture/login_bg1.png");
  .corporateName {
    position: absolute;
    top: 9%;
    left: 53%;
    transform: translate(-50%);
    font-family: "jzy.TTF";
    font-weight: 650;
    font-size: 64px;
    background: linear-gradient(#e9f5ff, #c6e3fc);
    background-clip: text;
    color: transparent;
    letter-spacing: 2px;
  }
  //登录模块
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 862px;
    height: 674px;
    border: 2px solid #2263bc;
    transform: translate(-43%, -40%);
    .login_title {
      width: 100%;
      height: 104px;
      text-align: center;
      line-height: 104px;
      font-size: 50px;
      font-family: "HYQiHei-60S";
      color: #fff;
      background: linear-gradient(#122a63, #13337d);
    }
    .login_main {
      position: relative;
      width: 100%;
      height: 564px;
      background-color: rgba(16, 42, 98, 0.5);
      .login_form {
        display: flex;
        position: absolute;
        flex-direction: column;
        top: 10%;
        left: 50%;
        transform: translate(-50%);
        width: 567px;
        height: 417px;
        .item-from {
          flex: 1;
          .el-form-item__label {
            text-align: center;
            line-height: 70px;
            font-family: "HYQiHei-40S";
            font-size: 29px;
            color: #fff;
          }
          // 验证码
          .captcha {
            display: flex;
            height: 68px;
            img {
              flex: 6;
            }
            .el-button {
              flex: 4;
              font-size: 28px;
              font-family: "HYQiHei-40S";
            }
          }
          .el-input__inner {
            height: 70px;
            border: 2px solid #618cb7;
            font-size: 28px;
            color: #fff;
            background-color: rgba(16, 42, 98, 0.5);
          }
        }

        .login-btn {
          height: 70px;
          font-family: "HYQiHei-60S";
          font-size: 34px;
          letter-spacing: 16px;
          background: linear-gradient(to right, #6130de, #3789e4);
        }
      }
    }
  }
  .block {
    display: block;
    width: 100%;
  }
  //主页天气模块
  .login_WD {
    position: absolute;
    top: 72px;
    right: 45px;
    width: 482px;
    height: 171px;
    border: 2px solid #1b6b8d;
    border-radius: 7px;
    background: rgba(10, 39, 81, 0.8);
  }
}
</style>