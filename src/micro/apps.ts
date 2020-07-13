/*
 * @Author: Fone丶峰
 * @Date: 2020-05-28 14:02:07
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-28 14:00:30
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import app from "./shared";
/*
 * name: 微应用名称 - 具有唯一性
 * entry: 微应用入口 - 通过该地址加载微应用
 * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
 * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
 */
const apps: any = [
    {
        name: "vue-project",
        entry: "//localhost:10300",
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
    },
    {
        name: "static-project",
        entry: "//localhost:10400",
        container: "#app-qiankun",
        activeRule: "/static",
        props: { app }
    }
];

export default apps;