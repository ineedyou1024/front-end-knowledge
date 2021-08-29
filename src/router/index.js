import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VantCalender from "../views/student/vant/calendar";
import Vueobservable from "../views/student/vue/observable";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/learn",
    name: "Learn",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Learn.vue"),
    children: [
      {
        path: "vancalend",
        component: VantCalender,
      },
      {
        path: "vueobservable",
        component: Vueobservable,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
