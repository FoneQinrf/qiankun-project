<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-29 13:51:19
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-30 16:15:51
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
--> 
<template>
  <div class="scrollbar">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Scrollbar extends Vue {}
</script>

<style lang="less" scoped>
.scrollbar {
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>