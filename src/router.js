import Vue from "vue";
import VueRouter from "vue-router";

import One from "./components/One.vue";
import Two from "./components/Two.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "one",
      component: One
    },
    {
      path: "/one",
      name: "one",
      component: One
    },
    {
      path: "/two",
      name: "two",
      component: Two
    }
  ]
});
