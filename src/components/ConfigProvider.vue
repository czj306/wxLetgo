<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 14:07:19
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 14:08:05
 * @FilePath: /wxLetgo/src/components/ConfigProvider.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-config-provider :theme="theme">
        <nut-cell title="切换暗黑">
          <template v-slot:link>
            <nut-switch v-model="switchChecked" @change="switchChange" />
          </template>
        </nut-cell>
        <nut-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></nut-cell>
    </nut-config-provider>
  </template>
  <script lang="ts">
    import { ref } from 'vue';
    export default {
      setup() {
        const switchChecked = ref(false);
        const theme = ref('');
        const switchChange = (v: boolean) => {
          theme.value = v ? 'dark' : '';
        };
  
        return { switchChecked, switchChange, theme };
      }
    };
  </script>
  