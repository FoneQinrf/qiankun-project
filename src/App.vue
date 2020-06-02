<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-28 11:06:26
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-01 11:17:52
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div id="main-app">
    <router-view />
  </div>
</template>

<style lang="less">
#main-app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
}
</style>
