import Vue from "vue";
import Vuex from "vuex";

import VuexPersist from "vuex-persist";//导入持久化的工具

Vue.use(Vuex);

const vuexLocal = new VuexPersist({
    storage: window.localStorage
});

//定义一个对象
const store = new Vuex.Store({
    //数据池
    state:{
        count:100,
        isLoading:false, //控制正在加载
        cartList:[],//购物车列表
        nums: 0,//总数量
        orderList:[],//存储订单商品列表
        orderInfo:[],
    },
    //操作state的内容
    mutations:{
        changeLoading(state,bool){
            state.isLoading=bool
        },
        addCart(state,payload){
            state.cartList = payload;
        },
        countCarts(state){
            console.log("test");
            let tmp = 0;
            //遍历购物车的数量
            console.log(state.cartList);
            state.cartList.forEach(item=>{
                tmp += item.nums;
            })
            //计算总数量
            state.nums = tmp;
        },
        setOrderList(state){
            state.orderList = state.cartList.filter(item=>{
                return item.checked == true;
            });
        },
        setOrder(state,payload){
            state.orderInfo = payload;
        },

        clear(state){
            state.cartList = [];
            state.nums = 0;
            state.orderInfo = [];
        }
    },
    getters:{
        totalAmounts(state){
            let amount = 0;
            state.orderList.forEach(item=>{
                amount += item.price*item.nums;
            });

            return amount;
        }
    },
    actions:{

    },
    modules:{

    },
    plugins: [vuexLocal.plugin]
});

//导出对象
export default store;