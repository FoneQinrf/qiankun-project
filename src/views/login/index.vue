<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-29 11:33:37
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-01 15:42:23
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
--> 
<template>
  <div>
    <span @click="login">登陆</span>
  </div>
</template>

<script>
import { setToken } from "@/utils/auth";

export default {
  methods: {
    login() {
      setToken("token", "token");
      this.$router.push({ path: this.$route.query.redirect || "/" });
    }
  }
};
</script>