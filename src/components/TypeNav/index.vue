<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex()">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item"
              v-for="(k1, v1) in categoryList"
              :key="k1.categoryId"
              :class="{ cur: currentIndex - 1 == v1 }"
            >
              <h3 @mouseenter="changeIndex(k1.categoryId)">
                <a
                  :data-categoryName="k1.categoryName"
                  :data-category1Id="k1.categoryId"
                  >{{ k1.categoryName }}</a
                >
              </h3>
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == v1 ? 'block' : 'none' }"
              >
                <div
                  class="subitem"
                  v-for="k2 in k1.categoryChild"
                  :key="k2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="k2.categoryName"
                        :data-category2Id="k2.categoryId"
                        >{{ k2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em v-for="k3 in k2.categoryChild" :key="k3.categoryId">
                        <a
                          :data-categoryName="k3.categoryName"
                          :data-category3Id="k3.categoryId"
                          >{{ k3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      //三级联动用户当前鼠标对象下标
      currentIndex: -1,
    };
  },
  methods: {
    changeIndex: throttle(function (index) {
      index && (this.currentIndex = index);
    }, 50),
    leaveIndex() {
      this.currentIndex = -1;
    },
    goSearch(event) {
      debugger
      let element = event.target; //获取触发事件结点
      let { categoryname, category1id, category2id, category3id } =
        element.dataset; //获取自定义属性

      if (categoryname) {
        let query = { categoryname };
        if (category1id) query.category1Id = category1id;
        else if (category2id) query.category2Id = category2id;
        else if (category3id) query.category3Id = category3id;
        this.$router.push({
          name: "search",
          query,
        });
      }
    },
  },
  mounted() {
    //挂载完毕获取数据存于仓库
    this.$store.dispatch("categoryList");
  },
  computed: {
    ...mapState({
      //对象写法右侧需要函数，在使用计算属性的时候执行，state为仓库中数据
      categoryList: (state) => state.home.categoryList,
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          // .item-list {
          // display: block;
          // }
          // }
        }
        .cur {
          background-color: burlywood;
        }
      }
    }
  }
}
</style>