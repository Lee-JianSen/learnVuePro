<template>
  <div id="app">
    <MainTabBar v-show="$route.meta.keepAlive"></MainTabBar>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
import MainTabBar from "./views/MainTabBar";

  export default {
    name: 'App',
    components:{
     MainTabBar
    }
  }
</script>
<style lang="stylus">
body{
  margin 0;
  padding 0;
}
</style>
