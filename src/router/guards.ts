import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/core/services/JwtService";

/**
 * 应用导航守卫
 *
 * @param router VueRouter实例
 */
export function applyGuards(router) {
  router.beforeEach((to, from) => {
    // reset config to initial state
    store.commit(Mutations.RESET_LAYOUT_CONFIG);
    if (Boolean(to.meta.requiresAuth) == true) {
      console.log("womeil ");
      store.dispatch(Actions.VERIFY_AUTH, { api_token: JwtService.getToken() });
    }
  });

  router.beforeEach(() => {
    // Scroll page to top on every route change
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  });
}
