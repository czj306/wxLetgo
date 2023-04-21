<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:59:38
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-21 13:24:42
 * @FilePath: /wxLetgo/src/components/Searchbar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-searchbar v-model="searchValue">
      <!-- <template v-slot:leftout>
        <Left />
      </template> -->
      <template v-slot:leftin>
        <Search2 />
      </template>
      <template v-slot:rightin>
        <Photograph />
      </template>
      <template v-slot:rightout>
        <Message />
      </template>
    </nut-searchbar> 
  </template>
  <script lang="ts">
    import { toRefs, reactive } from 'vue';
    import { Search2, Left, Photograph, Message } from '@nutui/icons-vue-taro';
    export default {
      components: { Search2, Left, Photograph, Message },
      setup() {
        const state = reactive({
          searchValue: ""
        });
  
        return {
          ...toRefs(state),
        };
      }
    };
  </script>
  