<template>
    <div class="forge">
      <h2>找回密码</h2>
      <div class="main">
        <p class="info cl">
            <span class="code fl">
              <select id="code">
                <option value="1">+86</option>
                <option value="2">+886</option>
                <option value="3">+852</option>
                <option value="4">+853</option>
                <option value="5">+976</option>
              </select>
            </span>
          <input type="text" placeholder="请输入注册手机号" class="mob fl">
          <input type="button" value="获取验证码" class="authcode fl">
        </p>
        <p class="info">
          <span class="detail fl">验证码</span>
          <input type="text" placeholder="请输入验证码" class="txt fl">
        </p>
        <p class="info">
            <span class="cl detail fl">
              <em class="fl">密</em>
              <em class="fr">码</em>
            </span>
          <input type="text" placeholder="6-16位字符，必须有字母" class="txt fl">
        </p>
        <a href="javascript:;" class="btn">立即登录</a>
      </div>
    </div>
</template>

<script>
	export default {
		name: 'forge'
	}
</script>

<style scoped lang="stylus">
  .forge
    height 100%
    h2
      height 4.5rem
      background #244278
      color #fff
      font-size 1.8rem
      text-align center
      line-height 4.5rem
    .main
      margin-top 5rem
      padding 0 3.5rem
      .info
        height 4.5rem
        line-height 4.5rem
        border-bottom  1px solid #d8d8d8
        .code
          width 6.5rem
          margin-right 1.6rem
          select
            width 6.4rem
            font-size 1.4rem
            border none
            outline none
        input
          font-size 1.4rem
          color #323232
          border none
          outline none
          margin-top 1rem
        .mob
          width 15rem
          line-height 2.5rem
        .authcode
          width 7rem
          height 2.2rem
          background #244278
          color #fff
          font-size 1.2rem
          line-height 2.2rem
          border-radius 0.2rem
        .detail
          display inline-block
          width 6.5rem
          margin-right 1.5rem
          font-size 1.4rem
          letter-spacing 0.8rem
          overflow hidden
          white-space nowrap
        .txt
          width 22rem
          line-height 2rem
          font-size 1.4rem
          color #323232
      .btn
        display block
        height 4rem
        background #ffcc33
        color #fff
        line-height 4rem
        text-align center
        font-size 1.6rem
        border-radius 0.3rem
        margin 2.5rem 0 1rem 0
</style>
