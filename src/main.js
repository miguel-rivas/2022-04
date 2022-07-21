import Vue from "vue";
import app from "./app.vue";
import router from "./modules/router";
import { store } from "./modules/store";
import "./stylesheets/application.scss";
import "./modules/commons";
import VueKonva from "vue-konva";
import 'nano-grid/components';
import { getZapp } from "./modules/helpers";
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader';

//-- db

import { user } from "./db/user";
import i18n from "./i18n";

// ---- global functions

const globalManager = {
  install(Vue) {
    Vue.prototype.getZapp = getZapp
  },
}
Vue.use(globalManager);

Vue.use(VueKonva);
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/ion-\w*/];

defineIonPhaser(window);

new Vue({
  router,
  store,
  i18n,
  data: () => ({
    user: user,
  }),
  render: h => h(app)
}).$mount('#app');
