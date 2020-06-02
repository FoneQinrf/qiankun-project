/*
 * @Author: Fone丶峰
 * @Date: 2020-05-28 11:06:26
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-29 09:57:47
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
};
