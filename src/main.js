import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import "./assets/css/tailwind.css";

import UI from "./components/ui";

UI.forEach(c => {
  Vue.component(c.name, c);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
