import { createRouter, createWebHashHistory } from "vue-router";
import RegisterAddressView from "../views/RegisterAddressView.vue";
import WatchAdressView from "../views/WatchAdressView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "RegisterAddressView",
      component: RegisterAddressView,
    },
    {
      path: "/view",
      component: WatchAdressView,
    },
  ],
});

export default router;
