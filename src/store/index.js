import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";//导入持久化的工具

//指定本地存储配置
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        cartList:[]//储存购物车的基本信息
    },
    mutations: {
        addCart(state,payload){
            //追加信息
            state.cartList = payload;
        }
    },
    actions: {

    },
    plugins: [vuexLocal.plugin]
});