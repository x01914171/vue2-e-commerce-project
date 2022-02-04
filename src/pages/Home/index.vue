<template>
  <div>
    <!-- 已经注册为全局组件，无需引用 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommand></Recommand>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="v in floorList" :key="v.id" :list="v"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListContainer from "./ListContainer/index.vue";
import Recommand from "./Recommand/index.vue";
import Rank from "./Rank/index.vue";
import Like from "./Like/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";
export default {
  name: "home",
  components: { ListContainer, Recommand, Rank, Like, Floor, Brand },
  computed: {
    ...mapState({ floorList: (state) => state.home.floorList }),
  },
};
</script>

<style lang="less" scoped>
</style>