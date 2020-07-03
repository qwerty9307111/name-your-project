<template>
  <div id="app">
    <nav class="nav">
      <logo class="playbox"></logo>
    </nav>
    <router-view class="router-view" />
  </div>
</template>
<script>
import logo from '@/components/logo'
export default {
  components: { logo },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss">
$nav_height: 60px;
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .nav {
    position: relative;
    height: $nav_height;
    background-color: #282c34;
    box-shadow: -3px -17px 5px 18px #17191d;
    .playbox {
      line-height: $nav_height;
    }
  }
}
.router-view {
  height: calc(100vh - #{$nav_height});
}
</style>
