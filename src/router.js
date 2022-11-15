import { createRouter, createWebHistory } from "vue-router";

// components
import FoodStuff from "./pages/FoodStuff.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/foodstuff" },
    { path: "/foodstuff", component: FoodStuff },
  ],
});

export default router;
