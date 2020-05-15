import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as filters from "./utils/filters";

//reset
import "./assets/css/reset.css";
import "./assets/css/common.css";

//vant UI
import { Button } from "vant";

Vue.use(Button);

import "amfe-flexible";

Vue.config.productionTip = false;

//注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

//fastClick
import "./assets/js/fastClick.js";

//调试工具
// import vConsole from "vconsole";
// let vconsole = new vConsole();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
