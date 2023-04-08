<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 14:04:42
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 14:06:05
 * @FilePath: /wxLetgo/src/components/FixedNav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-fixed-nav :position="{top:'70px' }" v-model:visible="visible" :nav-list="navList" />
  </template>
  <script lang="ts">
  import { ref,reactive } from 'vue';
  export default {
   setup() {
      const visible = ref(false);
      const navList = reactive([
        {
          id: 1,
          text: '首页',
          icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
        },
        {
          id: 2,
          text: '分类',
          icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
        },
        {
          id: 3,
          text: '购物车',
          num: 2,
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
        },
        {
          id: 4,
          text: '我的',
          icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
        }
      ]);
      return {
        visible,
        navList
      };
   }
  }
  </script>
  