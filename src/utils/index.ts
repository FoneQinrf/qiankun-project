/*
 * @Author: Fone丶峰
 * @Date: 2020-05-29 15:07:43
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-07-10 15:46:05
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { Message, Notification } from "element-ui";

const Layout = () => import('@/views/Layout/index.vue');

let routerMap: any = [];
/**
 * 
 * @param route 
 * @param options 
 */
export function fnc(route: any, options: any = {}) {
    route.forEach((element: { children: any; path: any; key: any; type: any }, index: string | number) => {
        if (element.children) {
            fnc(element.children, routerMap[index]);
            return;
        }
        options.children.push({
            path: element.path,
            name: element.key,
            component: { render: (h: (arg0: string) => any) => h('span') },
            meta: {
                type: element.type
            }
        });
    })
}

/**
 * 
 * @param route 
 */
export function routerList(route: any) {
    routerMap = [];
    route.forEach((element: { children: any; path: any; key: any; type: any }) => {
        routerMap.push({
            path: element.path,
            name: element.key,
            component: Layout,
            meta: {
                type: element.type
            },
            children: []
        })
    });
    fnc(route);
    return routerMap;
}

/**
 * 
 * @param options 
 */
export function messageFnc(options: any) {
    return Message(options);
}

/**
 * 
 * @param options 
 */
export function notification(options: any) {
    return Notification(options);
}
