<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-29 13:39:41
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-01 13:48:05
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
--> 
<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical"
  >
    <MenuItem v-for="item in routerList" :key="item.path" :route="item" :base-path="item.path" />
  </el-menu>
</template>

<script>
import MenuItem from "./menu-item.vue";

export default {
  components: { MenuItem },
  computed: {
    routerList() {
      return this.$store.state.routes;
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu {
  height: 100%;
}
</style>
<style scoped>
.el-menu-vertical >>> .el-menu-item {
  min-width: auto;
}
</style>