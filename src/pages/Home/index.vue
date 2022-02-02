<template>
  <div>
    <!-- 已经注册为全局组件，无需引用 -->
    <TypeNav></TypeNav>

    <ListContainer></ListContainer>
    <Recommand></Recommand>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer/index.vue";
import Recommand from "./Recommand/index.vue";
import Rank from "./Rank/index.vue";
import Like from "./Like/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";
export default {
  components: { ListContainer, Recommand, Rank, Like, Floor, Brand },
};
</script>

<style lang="less" scoped>
</style>