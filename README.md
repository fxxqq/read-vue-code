
## 文章目录

1.[学习源码的好处![](http://cdn.ru23.com/common/link.svg)](/vue-code-analysis/1.Benefits of learning source code.md)
2[学习源码的好处![](http://cdn.ru23.com/common/link.svg)](/vue-code-analysis/1.Benefits of learning source code.md)


<!-- https://www.cnblogs.com/hao123456/p/10616356.html -->
## 准备工作
js本身是弱类型语言，java是强类型语言，尽管js不强制我们严格类型使用，但是开发大项目时，变量的不确定性会让我们很头疼，出现不易排查的问题，因此静态类型检查对于发现和排查这些问题很有用。Vue.js 的源码利用了 [`Flow`](https://flow.org/en/docs/getting-started/) 做了静态类型检查,flow可以按我们的规定检查我们使用的这些类型的代码是否可靠。

Vue.js 的源码都在 src 目录下，其目录结构如下

![1.vue 源码目录](http://cdn.ru23.com/vue-analysis/1.1vue%E6%BA%90%E7%A0%81%E7%9B%AE%E5%BD%95.jpg)

[了解更多...![](http://cdn.ru23.com/common/link.svg)](/vue-code-analysis/2.vue%E6%BA%90%E7%A0%81%E7%9B%AE%E5%BD%95%E8%AE%BE%E8%AE%A1.md)

2.入口源码分析
我们之前提到过 Vue.js 构建过程，在 web 应用下，我们来分析 `Runtime + Compiler` 构建出来的 Vue.js，它的入口是 [`src/platforms/web/entry-runtime-with-compiler.js` ![](http://cdn.ru23.com/common/link.svg)](/src/platforms/web/entry-runtime-with-compiler.js)：

## 数据驱动

##### 1.从入口代码开始分析，new Vue发生了什么？

new 关键字在 Javascript 语言中代表实例化是一个对象，而 Vue 实际上是一个类，类在 Javascript 中是用 Function 来实现的，来看一下源码，在[`src/core/instance/index.js`![](http://cdn.ru23.com/common/link.svg)](https://github.com/ru23/vue-source-code-analysis/blob/dev/src/core/instance/init.js) 中。
Vue 初始化主要就干了几件事情，合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 `data、props、computed、watcher` 等等。

Vue 的初始化逻辑写的非常清楚，把不同的功能逻辑拆成一些单独的函数执行，让主线逻辑一目了然，这样的编程思想是非常值得借鉴和学习的。
 
参考：