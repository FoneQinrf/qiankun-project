<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-28 13:23:39
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-01 17:50:49
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
--> 
<template>
  <div id="main-app">
    <el-container class="select-prant">
      <el-header>
        <div class="logo">logo</div>
      </el-header>
      <el-container class="el-container-main">
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-main>
          <router-view />
          <div id="app-qiankun"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "./components/menu.vue";

export default {
  components: { Menu }
};
</script>

<style lang="less" scoped>
#app-qiankun {
  position: relative;
  overflow-y: auto;
}
.el-header{
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
.el-container-main{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 60px;
}
.el-main {
  &::-webkit-scrollbar {
    width: 3px;
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.1);
  }
}
.select-prant {
  width: 100%;
  height: 100%;
}
.el-header {
  padding: 0;
  border-bottom: solid 1px #e6e6e6;
}
.logo {
  width: 200px;
  height: 100%;
}
</style>