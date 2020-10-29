import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/",
      component: () => import("../page/Home"),
      children: [
        {
          path: "/dashboard",
          component: () => import("../page/DashBoard"),
        },
      ],
    },
    {
      path: "/login",
      component: () => import("../page/Login"),
    },
  ],
});
