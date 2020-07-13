/*
 * @Author: Fone丶峰
 * @Date: 2020-07-10 11:19:13
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-07-13 11:43:48
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

interface Options {
    dir?: any;
    body: string;
    tag?: string;
    icon?: string;
    image?: string;
    vibrate?: any;
}

export default class Notifications {
    private status?: boolean;

    constructor() {
        this.status = !!window.Notification;
        if (!this.status) {
            console.warn('不支持 Web Notifications API');
        }
    }

    public message(options: Options, title: string = '标题', isClick?: boolean, callback?: Function) {
        if (Notification && Notification.permission !== "denied") {
            Notification.requestPermission((res: string) => {
                if (res === 'granted') {
                    const m = new Notification(title, options);
                    if (isClick && callback) {
                        m.onclick = callback();
                    }
                }
            })
        }
    }
}