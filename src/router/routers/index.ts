import { homeRoutes } from "@/router/routers/home";
import { RouteRecordRaw } from "vue-router";
import notFound from "@/router/routers/common/404";
import { loginRoutes } from "@/router/routers/common/login";
/**
 * 路由表集合
 */
export const routes: Array<RouteRecordRaw> = [
  ...homeRoutes,
  ...notFound,
  ...loginRoutes,
];
