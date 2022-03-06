import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "@/router/routers/index";
// -------- 导航守卫 ---------------------------------------------
import { applyGuards } from "@/router/guards";

// const routes: Array<RouteRecordRaw> = [

//   ...notFound,
// ];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

applyGuards(router);

export default router;
