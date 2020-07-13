/*
 * @Author: Fone丶峰
 * @Date: 2020-05-29 11:17:47
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-07-10 14:16:33
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import store from "@/store";
import { messageFnc, notification } from "@/utils/index";
import Notification from "@/utils/notification";

interface Options {
    message: string;
    type: string;
    dangerouslyUseHTMLString?: boolean;
    customClass?: string;
    duration?: number;
    showClose?: boolean;
    center?: boolean;
    onClose?: Function;
    offset?: number;
}

interface NotificationOpt {
    message: string;
    type: string;
    dangerouslyUseHTMLString?: boolean;
    title?: string;
    customClass?: string;
    duration?: number;
    position?: string;
    showClose?: boolean;
    onClose?: Function;
    onClick?: Function;
    offset?: number;
}

const model = {
    /**
     * 获取token
     */
    getToken: () => store.state.token,
    /**
     * 获取用户数据
     */
    getUserInfo: () => store.state.userInfo,
    /**
     * 获取浏览器window
     */
    getWindow: () => window,
    /**
     * 登出
     */
    logout() {
        store.dispatch('logout');
    },
    /**
     * Message提示
     * @param opt
     */
    Message: (opt: Options) => messageFnc(opt),
    /**
     * Notification通知
     * @param opt 
     */
    Notification: (opt: NotificationOpt) => notification(opt)
};

/**
 * 桌面通知
 */
//@ts-ignore: Unreachable code error
model.Notification.desktop = new Notification();

export default model;