/*
 * @Author: Fone丶峰
 * @Date: 2020-05-28 11:06:27
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-01 15:49:52
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from "@/store";
import { getToken } from "@/utils/auth";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

const whiteList = ['login'];
router.beforeEach((to: any, from, next) => {
  const token = getToken('token');
  if (token) {
    if (to.name === 'login') {
      return next({ path: '/' });
    }
    if (!store.state.hasInited) {
      store.dispatch('addRouters').then((res) => {
        router.addRoutes(res);
        store.state.hasInited = true;
        next({ ...to, replace: true });
      })
      return;
    }
    next();
  } else if (whiteList.includes(to.name)) {
    next();
  } else {
    next({ path: '/login', query: { redirect: to.path } });
  }
});

export default router;
