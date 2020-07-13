<!--
 * @Author: Fone丶峰
 * @Date: 2020-06-30 10:49:00
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-07-02 13:58:06
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
--> 
<template>
  <el-header class="header">
    <div @click="logout" class="logo">logo</div>
  </el-header>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Emit()
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
</script>

<style lang="less" scoped>
.logo {
  width: 200px;
  height: 100%;
}
.el-header.header {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  border: none;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.1);
  z-index: 100;
}
</style>