<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-28 15:15:35
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-07-10 17:27:53
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
--> 
<template>
  <div class="home">
    <img @click="click" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld v-if="false" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    click() {
      console.log(this.$app);
      this.$app.Notification.desktop.message({ body: "消息" });
    }
  }
};
</script>
