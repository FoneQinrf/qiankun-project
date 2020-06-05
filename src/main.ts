/*
 * @Author: Fone丶峰
 * @Date: 2020-05-28 11:06:27
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-03 17:33:37
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import Vue from 'vue';
import {
  Container,
  Aside,
  MenuItem,
  Main,
  Menu,
  Header,
  Submenu,
  MenuItemGroup
} from "element-ui";
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Container);
Vue.use(Aside);
Vue.use(MenuItem);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Header);
Vue.use(Submenu);
Vue.use(MenuItemGroup);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#main-app');
