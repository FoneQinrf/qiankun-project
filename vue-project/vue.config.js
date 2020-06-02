/*
 * @Author: Fone丶峰
 * @Date: 2020-05-28 15:22:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-28 17:52:22
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
const path = require("path");

module.exports = {
    publicPath: 'http://localhost:10200',
    lintOnSave: false,
    devServer: {
        // 监听端口
        port: 10200,
        overlay: {
            warnings: false,
            errors: false
        },
        // 关闭主机检查，使微应用可以被 fetch
        disableHostCheck: true,
        // 配置跨域请求头，解决开发环境的跨域问题
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
        output: {
            // 微应用的包名，这里与主应用中注册的微应用名称一致
            library: "vue-project",
            // 将你的 library 暴露为所有的模块定义下都可运行的方式
            libraryTarget: "umd",
            // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
            jsonpFunction: `webpackJsonp_vue-project`,
        },
    },
};