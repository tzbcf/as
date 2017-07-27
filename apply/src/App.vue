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
</style>
