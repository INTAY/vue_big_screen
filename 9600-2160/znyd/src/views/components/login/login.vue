<template>
  <div class="basePage">
    <!-- 登录主页模块 -->
    <div class="login">
      <div class="login_title">用户登录</div>
      <div class="login_main">
        <el-form
          label-width="200px"
          status-icon
          class="login_form"
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
        >
          <!-- 用户名 -->
          <el-form-item
            prop="userName"
            class="item-from"
            label="用户名:"
            placeholder="请输入用户名"
          >
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
            style="font-size: 34px; color: '#fff'"
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
          <el-form-item
            prop="captcha"
            class="item-from"
            label="验证码:"
            placeholder="请输入验证码"
          >
            <el-row :gutter="15">
              <el-col :span="15">
                <el-input v-model="ruleForm.captcha"></el-input>
              </el-col>
              <el-col :span="8" class="captcha">
                <img :src="captchaPath" alt />
                <el-button type="text" size="medium" @click="getCaptcha()"
                  >换一张</el-button
                >
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="login('ruleForm')"
              class="login-btn block"
              >登录</el-button
            >
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
import BUS from "@/utils/bus";

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
        userName: "",
        password: "",
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
      "setLevel",
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
                    sessionStorage.setItem("token", res2.data.access_token);
                    //跳转到主页
                    //传orgID,请求regid地址保存到本地
                    let id = res2.data.orgId;

                    request(`/system/group/${id}`)
                      .then((res) => {
                        //保存regId
                        this.setRegId(res.data.regionId);
                        //获取用户等级
                        let id = res.data.regionId;
                        request(`/system/region/getRegionByRegId/${id}`).then(
                          (res) => {
                            //获取当前省名称
                            this.setFullName(res.data.fullName);
                            this.setLevel(res.data.level);
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
                            BUS.$emit("LoginId", res.data.fullName);
                          }
                        );
                      })
                      
                    that.$router.push("/home");
                  } else {
                    that.getCaptcha();
                    //验证码错误
                    that.$message.error(res2.data.msg)
                  }
                } else {
                  that.getCaptcha();                  
                }
              })
              .catch(function (error) {
                that.getCaptcha();
                that.$message.error(error.response.data.data.error_description);
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
  width: 9600px;
  height: 2160px;
  background: url("../../../assets/picture/login_bg1.jpg");
  //登录模块
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2130px;
    height: 1345px;
    transform: translate(-50%, -40%);
    .login_title {
      width: 100%;
      height: 216px;
      text-align: center;
      line-height: 216px;
      font-size: 74.99px;
      font-family: "HYQiHei-60S";
      color: #fff;
      background: linear-gradient(to left, #0a315f, #014d83);
      border-bottom: 4px solid #009acd;
    }
    .login_main {
      position: relative;
      width: 100%;
      height: 1130px;
      background-color: rgba(16, 42, 98, 0.5);
      border-style: solid;
      border-width: 2px;
      border-top-width: 0px;
      border-color: #1b55a3;
      box-sizing: border-box;
      .login_form {
        display: flex;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%);
        flex-direction: column;
        width: 1431px;
        height: 821px;
        .item-from {
          flex: 1;
          .el-form-item__label {
            text-align: center;
            line-height: 144px;
            font-family: "HYQiHei-40S";
            font-size: 43.49px;
            color: #fff;
          }
          // 验证码
          .captcha {
            display: flex;
            height: 140px;
            img {
              flex: 6;
            }
            .el-button {
              flex: 4;
              font-size: 42px;
              font-family: "HYQiHei-40S";
            }
          }
          .el-input__inner {
            height: 144px;
            border: 2px solid #618cb7;
            font-size: 34px;
            color: #fff;
            background-color: rgba(16, 42, 98, 0.5);
          }
        }

        .login-btn {
          height: 130px;
          font-family: "HYQiHei-60S";
          font-size: 50.99px;
          letter-spacing: 43px;
          border-radius: 15px;
          background: linear-gradient(to right, #0083c7, #007ab9);
          border: 0;
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
    top: 144px;
    right: 112px;
    width: 1000px;
    height: 300px;
    border-radius: 15px;
    background: rgba(13, 41, 76, 1);
  }
}
</style>