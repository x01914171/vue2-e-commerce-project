<template>
  <div id="app">
    <Header></Header>
    <!-- 路由的入口 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //只获取依次
    //挂载完毕获取数据存于仓库
    this.$store.dispatch("categoryList");
    this.$store.dispatch("bannerList");
    this.$store.dispatch("floorList");
  },
};
</script>

<style>
</style>
