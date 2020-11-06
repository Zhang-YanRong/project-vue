import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home"
import DashBoard from "@/views/DashBoard"
import Classify from "@/views/Shop/Classify/index"

Vue.use(Router)

export const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: Home,
    onlyChild: true,
    children: [
      {
        path: "dashboard",
        component: DashBoard,
        meta: {
          icon: `icontubiao-2`,
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/shop",
    component: Home,
    redirect: "/shop/classify",
    meta: {
      icon: `icontubiao-9`,
      title: "商品",
    },
    children: [
      {
        path: "classify",
        component: Classify,
        meta: {
          title: "商品分类",
        },
      },
    ],
  },
  {
    path: "/login",
    notShow: true,
    component: () => import("../views/Login"),
  },
]

export default new Router({
  routes,
})
