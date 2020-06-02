<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-29 13:51:19
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-29 14:01:47
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
--> 
<template>
  <div class="scrollbar">
    <slot />
  </div>
</template>

<style lang="less" scoped>
.scrollbar {
  overflow-y: auto;
}
</style>