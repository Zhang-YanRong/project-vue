import Vue from "vue";
import App from "./App.vue";
import router from "./route";
import ElementUI from "element-ui";
import './assets/css/icon.css';
import "./plugins/element.js";

Vue.config.productionTip = false;
Vue.use(ElementUI, {
  size: "small",
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
