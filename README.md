# VUE2电商项目

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
```
npm run lint
```

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
  * <img src="https://cdn.jsdelivr.net/gh/x01914171/my-image@main/image-20220201224916100.png" alt="image-20220201224916100" style="zoom:67%;" />

  

