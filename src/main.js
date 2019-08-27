import App from "./App.vue";
import Vue from "vue";

const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
  // eslint-disable-next-line id-length
  render: h => h(App)
}).$mount(root);
