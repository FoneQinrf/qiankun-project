<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-29 13:39:41
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-07-02 15:35:54
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
--> 
<template>
  <el-menu :default-active="$route.path" class="el-menu-vertical" :collapse="menuStatus">
    <MenuItem
      v-for="item in computedRouterList"
      :key="item.path"
      :route="item"
      :base-path="item.path"
    />
  </el-menu>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import MenuItem from "./menu-item.vue";

@Component({
  components: { MenuItem }
})
export default class extends Vue {
  @Prop()
  menuStatus: boolean = false;

  get computedRouterList() {
    return this.$store.state.routes;
  }
}
</script>

<style lang="less" scoped>
.el-menu {
  height: 100%;
  border: none;
}
</style>
<style scoped>
.el-menu-vertical >>> .el-menu-item {
  min-width: auto;
}
.el-menu--collapse >>> .el-submenu__icon-arrow {
  display: none;
}
</style>