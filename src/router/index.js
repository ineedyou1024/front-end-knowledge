import Vue from 'vue';
// import VueRouter from "../my-router";
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import VantCalender from '../views/student/vant/calendar';
import Vueobservable from '../views/student/vue/observable';
import TestRouter from '../views/student/vue/router';
// 注册路由组件
// Vue.use用来注册插件，如果传入是函数，直接把函数当成组件，如果是对象它会调用传入对象的install方法
Vue.use(VueRouter);

// 路由规则
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/learn',
        name: 'Learn',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Learn.vue'),
        children: [
            {
                path: 'vancalend',
                component: VantCalender,
            },
            {
                path: 'vueobservable',
                component: Vueobservable,
            },
            {
                path: 'vuerouter/:id',
                props: true,
                component: TestRouter
            },
            {
                path: 'vuex',
                component: () => import('../views/student/vue/vuex')
            },
            {
                path: 'jsarray',
                component: () => import('../views/student/js/array')
            },
            {
                path: 'echarts',
                component: () => import('../views/student/echarts')
            },
            {
                path: 'responsive',
                component: () => import('../views/student/vue/responsive')
            },
        ],
    },
    {
        path: '*',
        name: '404',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/404.vue'),
    },

];
//   props: true 会把url中的参数传递给组件 在组件中通过Props来接收参数
// 创建路由对象
// mode 用history模式，不带#的
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
