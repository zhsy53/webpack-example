import Vue from "vue";
import App from "./App.vue";
import router from "./router";

new Vue({
  router,
  // eslint-disable-next-line id-length
  render: h => h(App)
}).$mount("#app");
