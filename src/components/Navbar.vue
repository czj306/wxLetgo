<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 14:01:14
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 14:32:49
 * @FilePath: /wxLetgo/src/components/Navbar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-navbar @on-click-back="back" @on-click-title="title" title="订单详情">
      <template #left>
        <div>返回</div>
      </template>
      <template #right>
        <ShareN width="16px"></ShareN>
      </template>
    </nut-navbar>
  
    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-right="rightClick"
      title="浏览记录"
      desc="清空"
    ></nut-navbar>
  
    <nut-navbar
      :left-show="false"
      @on-click-back="back"
      @on-click-title="title"
      @on-click-icon="icon"
      @on-click-right="rightClick"
      title="购物车"
      :titleIcon="true"
      desc="编辑"
    >
      <template #title-icon>
        <Cart2 width="16px"></Cart2>
      </template>
      <template #right>
        <MoreX class="right" width="16px"></MoreX>
      </template>
    </nut-navbar>
  </template>
  
  <script lang="ts">
    // import { ref } from 'vue';
    import { ShareN, Cart2, MoreX } from '@nutui/icons-vue-taro';
    export default {
    components: { ShareN, Cart2, MoreX },
    options: {
      addGlobalClass: true,
    },
    setup() {
      const methods = {
        back() {
          alert('Click Back');
        },
        title() {
          alert('Click Title');
        },
        rightClick() {
          alert('Click Right');
        },
        icon() {
          alert('Click icon');
        }
      };
  
      return {
        ...methods,
      };
    }
  }
  </script>
  
  