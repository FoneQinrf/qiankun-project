<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-29 15:55:30
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-07-02 15:32:08
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
--> 
<template>
  <div class="menu-wrp">
    <template v-if="route.children && route.children.length">
      <el-submenu :index="basePath">
        <template slot="title">
          <i :class="route.icon"></i>
          <span slot="title">{{route.label}}</span>
        </template>
        <el-menu-item-group>
          <MenuItem
            v-for="item in route.children"
            :key="item.path"
            :route="item"
            :base-path="item.path"
          />
        </el-menu-item-group>
      </el-submenu>
    </template>
    <template v-else>
      <router-link :to="basePath">
        <el-menu-item :index="route.path">
          <i :class="route.icon"></i>
          <span slot="title">{{route.label}}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "MenuItem"
})
export default class MenuItem extends Vue {
  @Prop()
  route?: object;

  @Prop()
  basePath?: string;
}
</script>

<style scoped>
.el-menu--collapse span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
</style>