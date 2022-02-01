<template>
  <div id="app">
    <Header></Header>
    <!-- 路由的入口 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
