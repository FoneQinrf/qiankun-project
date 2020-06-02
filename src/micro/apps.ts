/*
 * @Author: Fone丶峰
 * @Date: 2020-05-28 14:02:07
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-01 17:22:04
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import app from "./shared";

const apps = [
    {
        name: "vue-project",
        entry: "//localhost:10200",
        container: "#app-qiankun",
        activeRule: "/vue",
        props: { app }
    },
    {
        name: "react-project",
        entry: "//localhost:10100",
        container: "#app-qiankun",
        activeRule: "/react",
        props: { app }
    }
];

export default apps;