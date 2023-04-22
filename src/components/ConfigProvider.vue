<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 14:07:19
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-22 14:41:45
 * @FilePath: /wxLetgo/src/components/ConfigProvider.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-config-provider :theme="theme">
      <slot></slot>
    </nut-config-provider>
  </template>
  <script lang="ts" setup>
    import { ref } from 'vue';
// dark
    const theme = ref('');
  
  </script>
  