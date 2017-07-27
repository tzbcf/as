<template>
  <div class="login">
      <h1 class="avatar">
        <img src="../../static/img/img_03.png" alt="">
      </h1>
      <h4 class="title">
        您还未登录
      </h4>
      <div class="register">
        <p>
          <span class="reg_id"></span>
          <input type="text" placeholder="请输入手机号">
        </p>
        <p>
          <span class="reg_pass"></span>
          <input type="text" placeholder="请输入登录密码">
        </p>
      </div>
      <div class="btn">
        <input type="button" value="登录" class="btn_reg">
        <input type="button" value="手机动态验证码登录" class="btn_mob">
        <a href="javascript:;" class="forget">忘记密码？</a>
      </div>
      <div class="plug">
        <h4>第三方账号登录</h4>
        <a href="javascript:;" class="wx"></a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .login
    background #fff
    padding 0 3.5rem
    height 100%
    .avatar
      padding-top 10rem;
      img
        display block
        margin 0 auto
    .title
      text-align center
      font-size 1.6rem
      color #244278
      margin-top 1rem
    .register
      margin-top 3rem
      p
        height 4.4rem
        border-bottom  1px solid #d8d8d8
        line-height 4.4rem
        span
          display inline-block
          width 26%
          height 100%
          float left
        .reg_id
          background url(../../static/img/via_03.png)no-repeat center center
        .reg_pass
          background url(../../static/img/via_07.png)no-repeat center center
        input
          width 74%
          height 4rem
          float left
          border none
          outline none
          font-size 1.4rem
          color #8f8f8f
    .btn
      margin 3rem 0 6rem 0
      input
        width 100%
        height 4rem
        text-align center
        line-height 4rem
        border none
        background #fff
        outline none
        border-radius 0.2rem
      .btn_reg
        background #ffcc33
        color #fff
        font-size 1.6rem
        margin-bottom 1.5rem
      .btn_mob
        font-size 1.4rem
        color #244278
        border 1px solid #c6cedc
        margin-bottom 2rem
      .forget
        display block
        text-align center
        font-size  1.4rem
        color #244278

    .plug
      border-top 1px solid #d8d8d8
      h4
        width 11rem
        margin -1.1rem auto
        font-size 1.4rem
        color #d8d8d8
        background #fff
        text-align center
      .wx
        display block
        width 4.8rem
        height 4.8rem
        background url(../../static/img/via_11.png)no-repeat center center
        margin-top 3.5rem
</style>
