/*
 * @Author: Fone丶峰
 * @Date: 2020-05-28 15:15:34
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-28 15:13:05
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import './registerServiceWorker';
import routes from './router';
import store from './store';
import './public-path'

Vue.use(VueRouter)
Vue.config.productionTip = false;

let instance = null;
let router = null;


function render(props) {
  router = new VueRouter({
    // 运行在主应用中时，基础路由地址配置为 /vue
    base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/",
    mode: "history",
    routes,
  });
  Vue.prototype.$app = props.app;
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}

/**
 * 不存在主应用时可直接单独运行
 */
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {

}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log(props);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}