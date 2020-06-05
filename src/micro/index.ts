/*
 * @Author: Fone丶峰
 * @Date: 2020-05-28 14:03:53
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-05 14:19:39
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import {
    registerMicroApps,
    addGlobalUncaughtErrorHandler,
    start,
} from "qiankun";
import NProgress from "nprogress";
import { Message } from 'element-ui';
import 'nprogress/nprogress.css';

NProgress.configure({ parent: '.scrollbar.scroll' });

export default function (apps: []) {
    registerMicroApps(apps, {
        beforeLoad: () => {
            // 加载微应用前，加载进度条
            NProgress.start();
            return Promise.resolve();
        },
        afterMount: () => {
            NProgress.done();
            return Promise.resolve();
        },
    });

    addGlobalUncaughtErrorHandler((event: any) => {
        const { msg } = event as any;
        NProgress.done();
        // 加载失败时提示
        if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
            Message.error('微应用加载失败，请检查应用是否可运行');
        }
    });

    start();
}
