//自定义新路由文件
import Home from "@/views/home";
import Index from "@/views/home/index";
import Category from "@/views/home/category";
import Cart from "@/views/home/cart";
import Me from "@/views/home/me";

import Search from '@/components/search/search';
import Detail from '@/views/home/detail';

import Login from '@/views/login/login';
import article from '@/views/article/article';
import articleDetail from '@/views/article/detail';


export default [
    {
        path: "/",
        name: "/",
        component: Home,
        redirect: "/index",
        children: [
            {
                path: "/category",
                name: "category",
                component: Category,
                meta: {
                    title: "严选商城-分类"
                }
            }, {
                path: "/index",
                name: "index",
                component: Index,
                meta: {
                    title: "严选商城-首页"
                }
            }, {
                path: "/cart",
                name: "cart",
                component: Cart,
                meta: {
                    title: "严选商城-购物车"
                }
            }, {
                path: "/me",
                name: "me",
                component: Me,
                meta: {
                    title: "严选商城-个人中心"
                }
            }
        ]
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
        meta: {
            title: "严选商城-搜索"
        }
    },
    {
        path: "/detail/:id",
        name: "detail",
        component: Detail,
        meta: {
            title: "严选商城-商品详情"
        }
    },
    {
        path: "/login/",
        name: "login",
        component: Login,
        meta: {
            title: "用户登录"
        }
    },
    {
        path: "/article/",
        name: "aticle",
        component:article,
        meta: {
            title: "严选商城-严选专栏"
        }
    },
    {
        path: "/article/detail",
        name: "aticle/detail",
        component:articleDetail,
        meta: {
            title: "严选商城-文章详情"
        }
    },
];