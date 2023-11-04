import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/login", meta: {} },

  {
    path: "/home",
    component: () => import("@/views/home.vue"),
    redirect() {
      return { path: "/home/homePage" };
    },

    children: [
      {
        path: "homePage",
        component: () => import("@/views/Compoennt/homePage.vue"),
        meta: {
          title: "商品列表",
          isShow: true,
        },
      },
      {
        path: "user",
        component: () => import("@/views/user.vue"),
        meta: {
          title: "人员列表",
          isShow: true,
        },
      },
    ],
  },

  {
    path: "/login",
    component: () => import("@/views/login.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from) => {
  document.title = (to.meta.name as string) || "";
  // console.log(document);
});
export default router;
