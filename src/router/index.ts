/*
 * @Author: Fone丶峰
 * @Date: 2020-05-28 11:06:27
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-07-10 10:13:29
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from "@/store";
import { getToken } from "@/utils/auth";
import startQiankun from "@/micro";
import apps from "@/micro/apps";

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
        component: () => import('@/views/home/index.vue')
      }
    ]
  }
];

const createRouter: any = () => new VueRouter({
  mode: "history",
  routes,
});

const router: any = createRouter()

/**
 * 重置路由
 */
export function restRouter() {
  router.matcher = createRouter().matcher;
}

const whiteList = ['login'];
router.beforeEach((to: any, from: any, next: any) => {
  const token = getToken('token');
  if (token) {   //token存在
    if (to.name === 'login') {     //如果login直接跳转首页
      return next({ path: '/' });
    }
    if (!store.state.hasInited) {   //防止反复addRoutes预设的值
      store.dispatch('addRouters').then((res) => {
        router.addRoutes(res);
        startQiankun(apps);
        store.state.hasInited = true;
        next({ ...to, replace: true });
      })
      return;
    }
    next();
  } else if (whiteList.includes(to.name)) {   //白名单直接放行
    next();
  } else {     //token不存在
    next({ path: '/login', query: { redirect: to.fullPath } });
  }
});

export default router;
