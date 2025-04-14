import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: HelloWorld,
  },
  {
    path: "/",
    component: () => import("../components/Home.vue"), // Tạo component Home.vue
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;