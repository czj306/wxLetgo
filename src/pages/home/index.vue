<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:37:48
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-17 13:50:56
 * @FilePath: /wxLetgo/src/pages/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-cell title="我是标题" desc="描述文字"></nut-cell>
    <nut-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></nut-cell>
    <nut-cell title="点击测试" @click="testClick"></nut-cell>
    <nut-cell title="圆角设置 0" round-radius="0"></nut-cell>
  </template>
  <script>
    import { ref } from 'vue';
    export default {
      // 可以使用所有的 Vue 生命周期方法
      mounted () {},

      // onLoad
      onLoad () {},

      // onReady
      onReady () {},

      // 对应 onShow
      onShow () {},

      // 对应 onHide
      onHide () {},

      // 对应 onPullDownRefresh
      onPullDownRefresh () {},

      setup() {
        const switchChecked = ref(true);
        const testClick = (event) => {
          console.log('Click Test');
        };
        return { testClick, switchChecked };
      }
    };
  </script>
  