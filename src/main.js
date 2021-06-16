import Vue from 'vue';
import 'normalize.css';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/plugins/component';
import '@/filters';

import '@/assets/css/global.scss';
import { importAllSvg } from '@/components/IconSvg';
importAllSvg();

Vue.config.productionTip = false;

import ElementUI from '@/plugins/element';
Vue.use(ElementUI);

// 主题换肤
import { initThemeColor } from '@/utils/themeColorClient';

initThemeColor();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
