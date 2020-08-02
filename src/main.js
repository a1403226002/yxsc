// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store  from "@/store/index";
import Loading from '@/components/Loading'


//全局使用
Vue.component("Loading",Loading)
//设置axios对象
//import axios from "axios";
import axios from "@/utils/request";//引入axios封装的拦截器对象
Vue.prototype.$axios = axios;//this.$axios

//引入vant组件信息
import vant from "vant";
import "vant/lib/index.css";
Vue.use(vant);

//重置一些css样式，html- 50px
import  "@/assets/style/reset.css";


Vue.config.productionTip = false

//全局路由守卫,进入组件之前触发
router.beforeEach((to,from, next)=>{
  
  //判断路由是否设置title值，给组件添加标题内容
  if(to.hasOwnProperty("meta")){
    document.title = to.meta.title;
  }

  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
