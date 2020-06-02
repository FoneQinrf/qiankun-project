<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-29 15:55:30
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-01 14:56:14
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
          <span>{{route.label}}</span>
        </template>
        <el-menu-item-group>
          <menu-item
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
          <span>{{route.label}}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "menu-item",
  props: {
    route: Object,
    basePath: String
  }
};
</script>