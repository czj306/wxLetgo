<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 14:03:39
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 14:03:43
 * @FilePath: /wxLetgo/src/components/Menu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-menu>
      <nut-menu-item v-model="state.value1" :options="state.options1" />
      <nut-menu-item v-model="state.value2" @change="handleChange" :options="state.options2" />
    </nut-menu>
  </template>
  
  <script>
  import { reactive, ref } from 'vue';
  
  export default {
    setup() {
      const state = reactive({
        options1: [
          { text: '全部商品', value: 0 },
          { text: '新款商品', value: 1 },
          { text: '活动商品', value: 2 }
        ],
        options2: [
          { text: '默认排序', value: 'a' },
          { text: '好评排序', value: 'b' },
          { text: '销量排序', value: 'c' },
        ],
        value1: 0,
        value2: 'a'
      });
  
      const handleChange = val => {
        console.log('val', val);
      }
  
      return {
        state,
        handleChange
      };
    }
  }
  </script>
  