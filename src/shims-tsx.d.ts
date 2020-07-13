/*
 * @Author: Fone丶峰
 * @Date: 2020-05-28 11:06:26
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-07-09 15:11:10
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode { }
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
