import Vue from "vue";
import App from "./App.vue";
import store from "./Store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "../src/assets/resume.css";
import "jquery/dist/jquery.min.js";
import "jquery.easing/jquery.easing.min.js";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
