import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/crafted/tools/crypto",
    name: "crypto",
    component: () => import("@/components/tools-layouts/Crypto.vue"),
    children: [
      {
        path: "cryptoMd5",
        name: "crypto-md5",
        component: () => import("@/views/crafted/tools/crypto/CryptoMd5.vue"),
      },
      {
        path: "cryptoSha256",
        name: "crypto-sha256",
        component: () =>
          import("@/views/crafted/tools/crypto/CryptoSha256.vue"),
      },
      {
        path: "hash",
        name: "crypto-hash",
        component: () => import("@/views/crafted/tools/crypto/CryptoHash.vue"),
      },
      {
        path: "qys",
        name: "crypto-qys",
        component: () => import("@/views/crafted/tools/crypto/CryptoQys.vue"),
      },
    ],
  },
];

routes.forEach((r) => {
  r.meta = {
    requiresAuth: false,
  };
});

export default routes;
