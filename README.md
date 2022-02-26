# VUE2 电商项目

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

````
npm run lint


# VUE电商实战笔记



## 1. 项目构建

![image-20220201153218909](https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201153218909.png)

1. node_module：项目依赖文件夹
2. public：一般防静态资源，webpack打包时会原封不动的转移到dist文件中
3. src：
   *    asset：多组件共用的静态资源文件夹，在webpack打包时会作为模块放置于js文件中。

   *    component：放置一般组件/全局组件

   *    APP.vue：唯一根组件

   *    main.js：项目入口文件，首先执行。

4. babel.config.js：babel配置文件

5. packag.json：记录项目各种信息

---------

  其他配置：

  1. 浏览器自动运行：

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201153446482.png" alt="image-20220201155228593" style="zoom:50%;" />

 2. eslint关闭

    创建vue.config.js文件。

![image-20220201155228593](https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201155228593.png)

 3. src文件夹简写

    使用@代表src文件夹下路径。

    <img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201153852439.png" alt="image-20220201153852439" style="zoom:50%;" />

-----

## 2. 路由分析

页面路主要是在页面中间部分变化。因此将头部和尾部作为一般组件，路由组件为中间发生变化的界面（首页/搜索/登录）。



## 3. 头部与尾部编写

此次用到less开发，首先需要安装less,less-loader:

`cnpm install --save less less-loader@5`

> lesslodaer 最新版本会报错，因此采用5版本。同时想让vue识别less，需要在style中指定less。
>
> 此外可以利用清除默认样式的reset.css放置于public文件夹，在index.html中引入css。

在构建好组件结构后，便可将组件利用起来：

* 编写好组件模板/样式
* 引入,注册组件
* 添加到父组件



----

## 4. 路由页面编写

首先需要为项目安装router:

`npm install vue-router --save   `

>  路由界面一般放置于pages文件夹中，一般组件放置于components中。
>
>  路由组件只需要在router文件夹中注册，一般组件在父组件中注册并使用标间引入。

1. **配置路由**

   1. 配置的路由一般放在router文件夹中

      ![image-20220201170134284](https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201170134284.png)

   2. 引入vue与插件

      <img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201170329092.png" alt="image-20220201170329092" style="zoom:67%;" />

   3. 配置路由

      <img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201170712457.png" alt="image-20220201170712457" style="zoom: 50%;" />

   4. 在入口文件（main.js）注册（引入）

      在此处为组件赋上$route或者$router属性。但是只有路由组件有内容。

      > route用于获取路由信息，路径，query,paarams等。
      >
      > router用于编程式导航的路由跳转【replace|push】

      <img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201170945371.png" alt="image-20220201170945371" style="zoom:67%;" />

   5. 准备路由入口

      <img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201170901619.png" alt="image-20220201170901619" style="zoom:67%;" />

   6. 设置重定向

      重定向是主要用于

      <img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201171707439.png" alt="image-20220201171707439" style="zoom:67%;" />



2. **路由的跳转**

   主要有两种形式：router-link|编程式导航

   > 后者能包括前者所有功能，同时可以设置其他业务逻辑。

   Route-link类似a标签，需要设置to属性来指向路径。

   <img src="C:\Users\wxb\AppData\Roaming\Typora\typora-user-images\image-20220201172224581.png" alt="image-20220201172224581" style="zoom:67%;" />

   编程式导航通过调用$router中的push方法压入路由的path

   <img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201210806969.png" alt="image-20220201210806969" style="zoom:67%;" />



-----

## 5. 路由属性（元信息）的使用

每一个路由组件都可以通过$route中的属性访问路由相关信息。

此处需要控制Footer部分的显示隐藏。

> 控制显示隐藏可以通过 v-if 或者V-show操作：
>
> ​	V-if 是对dom结点的真实操作，效率相对较低
>
> ​	v-show 是通过样式来控制dispaly的显示隐藏，效率相对较高。

**路由元信息**

​	路由元信息通过meta属性来设置，获取自定义属性。因此可以用过获取元信息为不同路由设置不同属性，实现一些操作，例如显示隐藏。

![image-20220201213909926](https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201213909926.png)

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201213935057.png" alt="image-20220201213935057" style="zoom:67%;" />



-----

## 6. 路由传参

1. 路由的跳转
   * 声明式导航：通过<router-link>来实现跳转。
   * 编程式导航：通过$router下的 push|replace方法实现路由跳转。可以实现一些业务逻辑。
2. 参数传递
   * params：属于路径一部分，配置时候需要占位
   * query： 在路径后添加？的一系列键值对，不需要占位

**路由传参**

**目标**：在搜索时候需要将搜索内容带入到搜索路由中。

首先为输入框绑定数据，同时设置点击事件的路由跳转。

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201214855182.png" alt="image-20220201214855182" style="zoom:67%;" />

一、字符串形式

​	params传递在push的时候传递参数：

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201215739113.png" alt="image-20220201215739113" style="zoom:67%;" />

​	在配置中需要设置占位符：

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201215726145.png" alt="image-20220201215726145" style="zoom:67%;" />

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201220157048.png" alt="image-20220201220157048" style="zoom:67%;" />

两种模式结合

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201220251081.png" alt="image-20220201220251081" style="zoom:67%;" />

效果：

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201220408285.png" alt="image-20220201220408285" style="zoom:67%;" />

在目标的路由组件中通过$route中的属性来获取参数：

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201220735988.png" alt="image-20220201220735988" style="zoom:67%;" />

二、模板字符串形式

模板字符串用两个<kbd>``</kbd>来控制字符串，可以利用${}来插入变量。

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201221208613.png" alt="image-20220201221208613" style="zoom:67%;" />



**三、对象形式**（最常用）

对象的传参要求路由附带有name属性。直接在路由配置中附加name属性。随后直接在push中传入对象与参数

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201221616694.png" alt="image-20220201221616694" style="zoom:67%;" />



**一些问题：**

* 路由传递参数（对象写法）path是否可以结合params参数一起使用?

  * 不可以，对象写法可以使用path或者name，但是path不可以和params一起使用.

    `this.$router.push({path:'/search',params:{keyword:this.keywords}})`将会报错

* 如何指定params参数可传可不传? （占位但是不传）

  * 占位后不传会使路径产生问题（缺失一段路径）
  * 通过配置占位符后边的？来指定可传可不传
  * <img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201222903974.png" alt="image-20220201222903974" style="zoom:67%;" />

* params参数可以传递也可以不传递，但是如果传递是空串，如何解决？

  * 直接传递空字符串会导致路径产生问题（缺失一段路径）
  * 通过undifined代替空字符串便可解决

* 路由组件能不能传递props数据?

  * 可以，通过props方式将params数据传入路由组件，路由组件中需要在props中声明。比较少用。其中函数形式较为常用。
  * <img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201224916100.png" alt="image-20220201224916100" style="zoom: 50%;" />



-----

## 7. 编程式路由传递报错处理

在使用编程式路由跳转时，短时间多次触发跳转事件会出现报错：

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220202133333863.png" alt="image-20220202133333863" style="zoom:80%;" />

声明式路由在底层已经解决该问题，因此只需要关注编程式路由跳转问题。

1. 为什么会有错误？

   * `$router.push()`方法会返回一个Promise对象，需要处理成功或失败的回调。
   * 可以再为push传递两个回调函数： `push(config,func,func)`，但是**治标不治本**，在别的组件中失效。

2. 解决：

   * push方法声明于VueRouter的原型对象中，函数上下文为VueRouter实例，因此选择在路由配置文件/router/index.js中重写push方法；

   * ```javascript
     //先把初始push存一份,repalce也同理
     let originPush = VueRouter.prototype.push;
     //重写方法
     /**
      *
      * @param {Object} location 路由配置
      * @param {Function} resolve
      * @param {Function} reject
      */
     VueRouter.prototype.push = function (location, resolve, reject) {
         //使用.call()方法调用保存的push；当前this就指向VueRouter实例；
         //call与apply：
         //  相同：都可以调用函数，改变上下文
         //  不同：call用逗号隔开参数，apply传递数组；
         if (resolve && reject) {
             originPush.call(this, location, reject);
         } else {
             // 没有传递则使用自定义
             originPush.call(this, () => { }, () => { });
         }
     }
     ```



------

## 8. 全局组件编写

​	一些组件在各个地方都需要使用，可以注册为全局组件，在其他组件中无需引入注册便可直接使用。

本次的三级联动在Home组件中的各个子组件都有用到，因此在入口文件中**声明全局组件**方便复用：

```javascript
//全局组件注册：
import TypeNav from "@/pages/Home/TypeNav"
//name、component
Vue.component(TypeNav.name,TypeNav)
````

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220202201119456.png" alt="image-20220202201119456" style="zoom:67%;" />

---

## 9. POSTMAN 测试接口

通过 PSTMAN 测试服务器接口是否有成功数据返回。

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220202212511593.png" alt="image-20220202212511593" style="zoom:33%;" />

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220202212537668.png" alt="image-20220202212537668" style="zoom: 33%;" />

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220202212648476.png" alt="image-20220202212648476" style="zoom: 33%;" />

---

## 10. AXIOS 二次封装

为什么需要二次封装？

    *  请求拦截器：再发送请求之前处理一些业务
    *  响应拦截器：在数据返回后处理一些业务

安装 AXOIS：`npm install axios --save`

> 项目中常在 src 下新建 api 文件夹，创建 request.js，对 axios 二次封装。

```javascript
//二次封装AXIOS
import axios from "axios";

//利用axios的create方法创建实例
const requests = axios.create({
  baseURL: "/api", //使得发送请求时在路径后自动加上/api再发送
  timeout: 5000,
});
//请求拦截器：再请求发送之前活动
request.interceptors.request.use((config) => {
  //config为配置对象，包含请求头headers
  return config;
});
// 相应拦截
request.interceptors.response.use(
  (res) => {
    //成功回调
    return res.data;
  },
  (err) => {
    //失败回调
    return Promise.reject(new Error("faile"));
  }
);
export default requests;
```

---

## 11. API 接口统一管理

- 当项目很小：可以直接再组件中发送请求
- 当项目很大：再 api 文件夹下统一管理

### 跨域问题

协议、域名、端口有所不同都为跨域，通过 JSONP、CORS、代理解决。

可以通过 webpack 来帮助设置代理：

再 vue.config.js 中：

```javascript
module.exports = {
  //关闭eslint
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        //在请求路径中附带'api'时，代理服务器工作
        target: "http://39.98.123.211", //目标服务器地址
      },
    },
  },
};
```

---

## 11. nprogress 进度条设置

nprogress 是用于浏览器顶部的进度条展示，可以用于发送请求的进度

安装`npm install nprogress --save`

```javascript
//引入进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";
// start:开始  done:结束
```

```javascript
//请求拦截器：再请求发送之前活动
request.interceptors.request.use((config) => {
  //config为配置对象，包含请求头headers
  //进度条
  nprogress.start();
  return config;
});
// 响应拦截
request.interceptors.response.use(
  (res) => {
    //成功回调
    nprogress.done();
    return res.data;
  },
  (err) => {
    //失败回调
    return Promise.reject(new Error("faile"));
  }
);
```

---

## 12. VueX 模块式开发

集中式管理组件间共有数据。

1. 基本使用

   ```javascript
   import Vue from "vue";
   import Vuex from "vuex";
   Vue.use(Vuex);

   //state 存储数据
   const state = {};
   //mutations 修改state唯一手段
   const Mutations = {};
   //actions 处理action，响应dispatch，通过commit让mustation来修改state，可以书写自己业务逻辑
   const actions = {};
   //getters 类似计算属性，简化获取数据
   const getters = {};
   export default new Vuex.Store({
     state,
     Mutations,
     actions,
     getters,
   });
   ```

2. 模块式开发

   让一个大量数据的仓库分为多个模块分别存储。

   ```javascript
   const state = {};
   const Mutations = {}
   const actions = {};
   const getters = {}
   export default {
       state, Mutations, actions, getters

   }

   ····
   //模块化引入
   export default new Vuex.Store({
       modules: { home, search }

   })
   ```

---

## 13. 三级联动展示数据

1. 获取服务器数据存于 Vuex

在三级联动组件在挂在的时候开始获取数据：

```javascript
  mounted() {
    //挂载完毕获取数据存于仓库
    this.$store.dispatch("categoryList");
  },
```

```javascript
const mutations = {
  CATEGORYLIST(state, category) {
    state.categoryList = category;
  },
};
const actions = {
  async categoryList({ commit }) {
    //获取数据,使用包装好的请求拦截器
    let res = await reqCategoryList();
    if (res.code == 200) {
      commit("CATEGORYLIST", res.data);
    }
  },
};
```

2. 动态展示数据

```html
<div class="item" v-for="(k1,v1) in categoryList" :key="k1.categoryId">
  <h3>
    <a href="">{{k1.categoryName}}</a>
  </h3>
  <div class="item-list clearfix">
    <div
      class="subitem"
      v-for="(k2,v2) in k1.categoryChild"
      :key="k2.categoryId"
    >
      <dl class="fore">
        <dt>
          <a href="">{{k2.categoryName}}</a>
        </dt>
        <dd>
          <em v-for="(k3,v3) in k2.categoryChild" :key="k3.categoryId">
            <a href="">{{k3.categoryName}}</a>
          </em>
        </dd>
      </dl>
    </div>
  </div>
</div>
```

3. 通过 js 方式实现动态改变 CSS 效果

```javascript
Vue鼠标事件
@click="click"     ////单击
@mousedown="down"       ////按下
@mouseup="up"          ////抬起
@dblclick="dblclick"      ////双击
@mousemove="move"     ////移动
@mouseleave="out"        ////离开
@mouseout ="out"         ////移出
@mouseenter="enter"     ////进入
@mouseover="enter"        ////在
```

```javascript
  data() {
    return {
      //三级联动用户当前鼠标对象下标
      currentIndex: -1,
    };
  },
  methods: {
    //修改
    changeIndex(index) {
      index && (this.currentIndex = index);
    },
    leaveIndex() {
      this.currentIndex = -1;
    },
  },
```

```html
<div class="item" v-for="(k1, v1) in categoryList" :key="k1.categoryId"
:class="{ cur: currentIndex - 1 == v1 }" //满足条件加上cur样式 >
<h3 @mouseenter="changeIndex(k1.categoryId)" @mouseleave="leaveIndex()">
  <a href="">{{ k1.categoryName }}</a>
</h3>
```

```html
<div
  class="item-list clearfix"
  :style="{display:currentIndex==v1?'block':'none'}"
>
  //动态加style样式
</div>
```

---

## 14. 防抖与节流

卡顿现象：事件短时间内触发频繁，每次事件都要出发回调函数，计算造成卡顿。

解决：**函数的防抖与节流**（lodash.js）

- 节流（throttle）：在规定时间内不重复触发回调，大于该时间才触发（少量触发）

  - ```javascript
    import _ from "lodash";
    //返回一个函数对象（相当于对执行函数进行包装）
    // func:执行函数 | wait：延迟时间,在这时间之后才能触发下一次
    _.throttle(func, wait, config);
    ```

- 防抖（debounce）：连续快速触发只会执行最后一次。

  - ```javascript
    import _ from "lodash";
    //返回一个函数对象（相当于对执行函数进行包装）
    // func:执行函数 | wait： 延迟时间
    _.debounce(func, wait, config);
    ```

在三级联动中加入节流：

- 按需引入节流：` import throttle from "lodash/throttle";`

- ```javascript
      changeIndex: throttle(function (index) {
        index && (this.currentIndex = index);
      },50),
      leaveIndex() {
        this.currentIndex = -1;
      },
  ```

- ！！！**注意别用箭头函数**

---

## 15. 三级联动路由跳转与参数传递（事件委派+编程式导航）

再点击三级联动时候路由跳转，并传递商品信息参数。

利用自定义属性来标识各个鼠标点击是否为`<a>`标签，并且判断层级。通过绑定`data-xxx`属性可以在结点的 dataset 属性中获取到 xxx 属性和属性值。

```html
<a :data-categoryName="k2.categoryName" :data-category2Id="k2.categoryId"
  >{{ k2.categoryName }}</a
>
```

```javascript
    goSearch(event) {
      let element = event.target; //获取触发事件结点
      let { categoryname, category1id, category2id, category3id } =
        element.dataset; //获取自定义属性

      if (categoryname) {
        let query = { categoryname };
        if (category1id) query.category1Id = category1id;
        else if (category2id) query.category2Id = category2id;
        else if (category3id) query.category3Id = category3id;
        this.$router.push({			//编程式路由跳转
          name: "search",
          query,
        });
      }
    },
```

---

## 16. 过渡动画

使用`<transition>`标签将需要动画的部分包括起来，在样式部分编写动画效果.

在 transition 带有 name 属性后，需要在动画样式之前加上 name-

```html
<transition name="sort">
  <div class="sort" v-show="show"></div>
</transition>
```

```less
.sort {
}
.sort-enter {
  // 动画进入
  height: 0px;
}
.sort-end-to {
  height: 461px;
}
.sort-enter-active {
  transition: all 0.5s linear !important;
}
```

---

## 17. 合并参数

在搜索时既要保留搜索框输入的关键字的 params 参数，也要保留三级联动跳转的 query 参数。

```javascript
goSearch(event) {
  let element = event.target; //获取触发事件结点
  let { categoryname, category1id, category2id, category3id } =
    element.dataset; //获取自定义属性

  if (categoryname) {
    let params = {};
    let query = { categoryname };
    if (category1id) query.category1Id = category1id;
    else if (category2id) query.category2Id = category2id;
    else if (category3id) query.category3Id = category3id;

    this.$route.params && (params = this.$route.params);	//如果当前搜索页面已经有params参数，说明当前页面为关键词跳转，在三级联动跳转时也要带上params参数。

    this.$router.push({
      name: "search",
      query,
      params,
    });
  }
},
```

同样的在搜索时候也要查看是否带有 query 参数

```javascript
 goSearch() {
      let query = {};
      this.$route.query && (query = this.$route.query);
      this.$router.push({
        name: "search",
        params: {
          keyword: this.keyword || undefined,
        },
        query,
      });
    },
```

---

## 18. MOCK 数据（模拟数据）（mockJS 插件）

1. mockJS：生成随机树，拦截 ajax 请求(不发送请求)。

   - `npm install mockjs #安装`

2. 创建 mock 文件夹，创建 json 数据。

3. mock 中所需要的资源放置到 pubulic 文件夹（打包后 public 资源会原封不动打包到 dist 文件夹）

4. 创建 mockServer.js 文件来模拟数据

   - ```javascript
     import Mock from "mockjs";
     // 引入json
     //wenpack默认对外暴露：图片、json等不需要对外暴露直接引用
     import banner from "./banner.json";
     import floor from "./floor.json";

     //数据
     //Mock.mock(模拟地址,模拟数据);
     Mock.mock("/mock/banner", { code: 200, data: banner });
     Mock.mock("/mock/floor", { code: 200, data: floor });
     ```

5. 在 main.js 中引入 mockServer.js

   - `import '@/mock/mockServer.js'`

6. 在项目中配置 mock 拦截、响应请求器后，直接请求模拟地址获取模拟信息：

---

## 19. 使用 SWiper 构建轮播图(获取服务器数据后再更新页面，nextTick)

安装 ` npm i swiper@5 --save`

swiper 需要获取到 dom，因此放置于 nexttick 函数中，等到 dom 渲染好再执行 swiper 加载函数。同时监听轮播图数据，一旦从服务器尚获取到数据便可以开始创建轮播。

```html
<!--banner轮播-->
<div class="swiper-container" ref="mySwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="carousal in bannerList" :key="carousal.id">
      <img :src="carousal.imgUrl" />
    </div>
  </div>
  <!-- 如果需要分页器 -->
  <div class="swiper-pagination"></div>

  <!-- 如果需要导航按钮 -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
```

```javascript
  watch: {
    //监听bannerList
    bannerList: {
      handler() {
        this.$nextTick(() => {
          let mySwiper = new Swiper(
            this.$refs.mySwiper,
            {
              loop: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            }
          );
        });
      },
    },
  },
```

---

## 20. 构建 search 模块（模块开发流程）

1. 静态页面拆分

2. 发送请求（API 创建）

   - 发送带参请求：

     - ```javascript
       export const reqSearchInfo = (params) => {
         //至少设置一个空对象作为参数传递
         return requests({
           url: "/list",
           method: "POST",
           data: params,
         });
       };
       ```

3. VUEX 构建

   - ```javascript
     import { reqSearchInfo } from "../../api";

     const state = {
       seachList: {},
     };
     const mutations = {
       GETSEARCHINFO(state, seachList) {
         state.seachList = seachList;
       },
     };
     const actions = {
       async getSearchInfo({ commit }, params = {}) {
         let res = await reqSearchInfo(params);
         if (res.code == 200) {
           commit("GETSEARCHINFO", res.data);
         }
       },
     };
     const getters = {
       //类似于计算属性，简化仓库中数据
       goodsList(state) {
         //网络不好goodsList会成undifine，改用[]防止再遍历的时候报错
         return state.seachList.goodsList || [];
       },
       trademarkList(state) {
         return state.seachList.trademarkList || [];
       },
       attrsList(state) {
         return state.seachList.attrsList || [];
       },
     };
     export default {
       state,
       mutations,
       actions,
       getters,
     };
     ```

4. 获取 VUEX 数据，动态展示数据

---

## 21. 动态发送请求 &更新当前路由参数

通过绑定事件来实现每次点击标签都可以向服务器发送一次请求。在初次发送请求的时候（跳转进入 HOME 组件）时需要将当前路由所附带的 params 参数与 query 参数都作为请求的参数。

```javascript
  beforeMount() {
    //合并对象,发送请求。获取当前路由上的参数。
    Object.assign(this.searchInfo, this.$route.query, this.$route.params);
  },
  mounted() {
    this.getSearchData(this.searchInfo);
  },
```

> ` Object.assign(target, ...sources)`将第二个及之后的对象的所有属性覆盖带第一个对象。

在点击标签使得路径变化时，需要再次发送新的请求。通过直接 watch 组建的$route 属性来监控路由参数的变化。

```javascript
watch: {
  //监听路由变化
  $route(newvalue, oldvalue) {
    Object.assign(this.searchInfo, this.$route.query, this.$route.params);
    this.getSearchData(this.searchInfo);
      // 使用undefined使得再发送请求的时候不会附带上这个参数，减少一部分带宽
    this.searchInfo.category1Id = undefined;
    this.searchInfo.category2Id = undefined;
    this.searchInfo.category3Id = undefined;
  },
},
```

在删除面包屑时，需要改变当前路由路径的参数同时也需要发送新的请求。在修改时候需要注意保存没有删去的参数和清空删去的参数。

```javascript
    deleteName() {
      //更新请求参数后重新发送请求
      // 使用undefined 更加节省带宽
      this.searchInfo.categoryname = undefined;
      this.searchInfo.category1Id = undefined;
      this.searchInfo.category2Id = undefined;
      this.searchInfo.category3Id = undefined;
      this.getSearchData(this.searchInfo);
      //修改地址栏：路由跳转
      //若当前有params参数，需要保留
      if (this.$route.params) {
        this.$router.push({
          name: "search",
          params: this.$route.params,
        });
      }
    },
    deleteKeyword() {
      this.searchInfo.keyword = "";
      this.getSearchData(this.searchInfo);
      //修改地址栏：路由跳转
      if (this.$route.query) {
        this.$router.push({
          name: "search",
          query: this.$route.query,
        });
      }
```

---

## 22. 分页器编写

分页器需要：

1. 分页器组件需要知道我一共展示多少条数据 ----total【100 条数据】

2. 每一个需要展示几条数据------pageSize【每一页 3 条数据】

3. 需要知道当前在第几页-------pageNo[当前在第几页]

4. 需要知道连续页码数【起始数字、结束数字：连续页码数市场当中一般 5、7、9】奇数，对称好看 continues

将分页器封装为一个全局组件，上述四个数据可以由父组件通过 props 传入。

首先需要获取到连续页码的一串数字。

```javascript
//连续页码数据
startNumAndEndNum() {
  let start = 0,
    end = 0;
  if (this.continues > this.totalPage) {
    //连续页码数字大于总页数,便是直接显示所有
    start = 1;
    end = this.totalPage;
  } else {
    start = this.pageNo - parseInt(this.continues / 2);
    end = this.pageNo + parseInt(this.continues / 2);
    if (start <= 1) {
        //排除小于1时候的情况
      start = 1;
      end = this.continues;
    }
    if (end >= this.totalPage) {
         //排除大于最大页面数的情况
      start = this.totalPage - this.continues + 1;
      end = this.totalPage;
    }
  }
  return { start, end };
},
```

在分页中需要根据连续页码数字和当前页面页码数来控制分页器的结构（主要是省略号的显示隐藏），同时控制上一页和下一页的禁用：

<img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220210052811184.png" alt="image-20220210052811184" style="zoom:50%;" />

```html
<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('changePage', pageNo - 1)">
      上一页
    </button>
    <button
      v-if="startNumAndEndNum.start > 1"	//限制使用条件
      @click="$emit('changePage', 1)"
      :class="{ active: pageNo == 1 }"		//控制点击的高亮效果
    >
      1
    </button>
    <button v-if="startNumAndEndNum.start > 2">···</button>

    <!-- 中间 -->
    <button
      v-for="(item, index) in startNumAndEndNum.end"
      :key="index"
      v-if="item >= startNumAndEndNum.start"
      @click="$emit('changePage', item)"
      :class="{ active: pageNo == item }"
    >
      {{ item }}
    </button>

    <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
    <button
      v-if="startNumAndEndNum.end < totalPage"
      @click="$emit('changePage', totalPage)"
      :class="{ active: pageNo == totalPage }"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('changePage', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

```

最后在点击的时候需要向父组件传递当前点击页面数，可以通过自定义事件来完成。

`@click="$emit('changePage', pageNo )"`

---

## 23. 路由滚动行为

使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。

**注意: 这个功能只在支持 history.pushState 的浏览器中可用。**

当创建一个 Router 实例，你可以提供一个 `scrollBehavior` 方法：

```javascript
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
})
```

默认顶置：

```javascript
scrollBehavior(to, from, savedPosition) {
  // 始终滚动到顶部
  return { top: 0 }
},
```

---

## 24. 放大镜操作

在商品详情页面中，放大镜用于浏览商品局部放大的图片。

```vue
<template>
  <div class="spec-preview">
    <img :src="img.imgUrl" />
    <div class="event" @mousemove="handler"></div>
    //创建一个事件容器，专门响应鼠标事件
    <div class="big">
      <img :src="img.imgUrl" ref="big" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["skuImageList"],
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    handler(event) {
      // 获取到实例对象
      let mask = this.$refs.mask;
      let big = this.$refs.big;
      let left = event.offsetX - mask.offsetWidth / 2;
      let top = event.offsetY - mask.offsetHeight / 2;

      //约束mask不超过img
      left <= 0 && (left = 0);
      top <= 0 && (top = 0);
      left >= mask.offsetWidth && (left = mask.offsetWidth);
      top >= mask.offsetHeight && (top = mask.offsetHeight);
      // 移动mask框框
      mask.style.left = left + "px";
      mask.style.top = top + "px";
      // 移动放大的图片
      big.style.left = -2 * left + "px"; // 放大两倍，left变化也为两倍
      big.style.top = -2 * top + "px";
    },
  },
  computed: {
    img() {
      return this.skuImageList[this.currentIndex] || {};
    },
  },
  mounted() {
    this.$bus.$on("changeImage", (index) => {
      this.currentIndex = index;
    });
  },
};
</script>
<style lang="less">
.big {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -1px;
  left: 100%;
  border: 1px solid #aaa;
  overflow: hidden;
  z-index: 998;
  display: none;
  background: white;

  img {
    width: 200%; // 放大两倍
    height: 200%;
    max-width: 200%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
```
