<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-29 11:33:37
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-04 09:34:42
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
import { restRouter } from "@/router";

export default {
  methods: {
    login() {
      setToken("token", "token");
      this.$store.state.hasInited = false;
      restRouter();
      if (this.$route.query.redirect === "/") {
        this.$router.replace("/");
        return;
      }
      this.$router.replace({ path: this.$route.query.redirect || "/" });
    }
  }
};
</script>