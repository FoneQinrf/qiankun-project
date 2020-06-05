<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-28 13:23:39
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-05 14:15:27
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
--> 
<template>
  <div id="main-app">
    <el-container class="select-prant">
      <el-header>
        <div @click="logout" class="logo">logo</div>
      </el-header>
      <el-container class="el-container-main">
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <Scrollbar class="scroll">
          <el-main>
            <router-view />
            <div id="app-qiankun"></div>
          </el-main>
        </Scrollbar>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { restRouter } from "@/router";
import Menu from "./components/menu.vue";
import Scrollbar from "./scrollbar.vue";

export default {
  components: { Menu, Scrollbar },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$store.state.hasInited = false;
        this.$router.push({
          path: "/login",
          query: { redirect: this.$route.path }
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
#app-qiankun {
  position: relative;
}
.el-header {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
.el-container-main {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 60px;
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