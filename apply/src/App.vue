<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
//  import './assets/style.styl'
  export default {
    name: 'app'
  }
</script>

<style lang="stylus">
  *
    margin 0 auto
    padding 0 auto
  body
    font-family "Microsoft YaHei","Helvetica Neue",Helvetica,STHeiTi,sans-serif
  a
    text-decoration none
  li,em,strong,i
    list-style none
  html,body,#app
    width 100%
    height 100%
    background #fff
  em,i,strong
    font-style normal
  h1,h2,h3,h4,h5,h6
    font-weight normal
  .fl
    float left
  .fr
    float right
  .cl:after
    content ''
    display block
    height 0
    clear both
    visibility hidden
</style>
