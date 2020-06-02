/*
 * @Author: Fone丶峰
 * @Date: 2020-05-29 11:17:47
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-01 15:01:38
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import store from "@/store";

export default {
    getToken() {
        return store.state.token;
    },
    getUserInfo() {
        return store.state.userInfo;
    },
    getWindow() {
        return window;
    },
    logout() {
        store.dispatch('logout');
    }
};