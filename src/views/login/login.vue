<template>
  <div class="box">
    <div class="login">
      <p class="login-heade">用户登录</p>
      <input type="text" class="inp" placeholder="请输入用户名" v-model="mobile" />
      <input type="password" class="inp" placeholder="请输入密码" v-model="pwd" />
      <van-button type="danger" block class="btn" @click="doLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      mobile: "",
      pwd: ""
    };
  },
  computed: {},
  methods: {
    //执行登录的操作
    doLogin() {
      if (this.mobile == "" || this.pwd == "") {
        this.$toast.fail("用户名或密码不能为空");
        return false;
      }
      //手机号正则表达式
      let rep = /^1[34578]\d{9}$/;
      if (rep.test(this.mobile) == false) {
        this.$toast.fail("手机号或密码错误");
        return false;
      }

      let formdata = new FormData();

      formdata.append("mobile", this.mobile);
      formdata.append("pwd", this.pwd);

      this.$axios
        .post("https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey", formdata)
        .then((res) => {
          if (res.code != 0) {
            this.$toast.fail(res.msg);
            return false;
          }
          console.log(res);
          res.data.mobile = this.mobile;
          localStorage.setItem("09c_user", JSON.stringify(res.data));
          this.$router.go(-1);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 0.2rem;

  .login {
    width: 90%;
    padding: 0.2rem;
    box-sizing: border-box;
    margin: 0.3rem auto;
    border: black 1px solid;
    border-radius: 0.2rem;

    .login-head {
      line-height: 0.8rem;
      font-size: 0.4rem;
      font-weight: bold;
      text-indent: 0.2rem;
      border-bottom: black 1px solid;
    }
    .inp {
      width: 100%;
      margin-bottom: 0.2rem;
      height: 0.8rem;
      line-height: 0.8rem;
      border: black 1px solid;
      border-radius: 0.15rem;
      text-indent: 0.15rem;
    }
    .btn {
      margin-top: 0.3rem;
    }
  }
}
</style>