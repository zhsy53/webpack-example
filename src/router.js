import Vue from "vue";
import VueRouter from "vue-router";

import One from "./components/One.Vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/about",
      name: "about",
      component: One
    }
  ]
});
