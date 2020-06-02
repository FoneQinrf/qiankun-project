/*
 * @Author: Fone丶峰
 * @Date: 2020-05-28 11:06:27
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-02 14:45:35
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import Vue from 'vue';
import Vuex from 'vuex';
import router from "@/router";
import { routerList } from "@/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    userInfo: "",
    routes: [
      {
        path: "/vue",
        icon: "",
        type: "micro",
        key: "vue",
        label: "vue",
        children: [
          {
            path: "/vue",
            icon: "",
            type: "micro",
            key: "vue-project",
            label: "vue-project"
          },
          {
            path: "/vue/about",
            icon: "",
            type: "micro",
            key: "vue-about",
            label: "vue-project-about"
          }
        ]
      },
      {
        path: "/react",
        icon: "",
        type: "micro",
        key: "react",
        label: "react-project",
        children: [
          {
            path: "/react",
            icon: "",
            type: "micro",
            key: "react-project",
            label: "react-project"
          }
        ]
      },
      {
        path: "/static",
        icon: "",
        type: "micro",
        key: "static",
        label: "static-project",
        children: [
          {
            path: "/static",
            icon: "",
            type: "micro",
            key: "static-project",
            label: "static-project"
          }
        ]
      }
    ],
    hasInited: false
  },
  mutations: {
    logout(state) {
      state.token = "";
      state.userInfo = "";
    },
    login(state) {
      state.token = 'token';
    }
  },
  actions: {
    logout({ commit }) {
      commit('logout');
    },
    login({ commit }) {
      commit('login');
      router.push('/');
    },
    addRouters({ state }) {
      return new Promise((resolve) => {
        const { routes } = state;
        const list = routerList(routes);
        resolve(list);
      })
    }
  },
  modules: {
  }
});
