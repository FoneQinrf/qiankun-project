<!--
 * @Author: Fone丶峰
 * @Date: 2020-07-09 14:46:56
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-07-09 16:29:13
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
--> 
<template>
  <div ref="loading" class="charts-wrp">
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Emit, Provide, Prop, Watch } from "vue-property-decorator";
import { addListener, removeListener } from "resize-detector";
import { Loading } from "element-ui";

const echarts = require("echarts/lib/echarts");

export default class extends Vue {
  @Provide() charts?: any;

  @Provide() loading?: any;

  @Prop()
  options: object = {};

  @Watch("options", { deep: true })
  handler() {
    this.initCharts();
    this.removeLoading();
  }

  @Emit()
  initCharts() {
    this.charts = echarts.init(this.$refs.charts);
    this.charts.setOption(this.options, true);
    //@ts-ignore: Unreachable code error
    addListener(this.$el, this.charts.resize);
  }

  @Emit()
  init() {
    //@ts-ignore: Unreachable code error
    this.loading = Loading.service({ target: this.$refs.loading });
  }

  @Emit()
  removeLoading() {
    this.loading.close();
  }

  @Emit()
  updata() {
    this.charts.setOption(this.options, true);
    //@ts-ignore: Unreachable code error
    addListener(this.$el, this.charts.resize);
  }

  mounted() {
    this.$nextTick(() => {
      if (Object.keys(this.options).length === 0) {
        this.init();
      }
      this.initCharts();
    });
  }

  destroyed() {
    //@ts-ignore: Unreachable code error
    removeListener(this.$el, this.charts.resize());
  }
}
</script>