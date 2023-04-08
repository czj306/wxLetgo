<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:37:40
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 14:37:30
 * @FilePath: /wxLetgo/src/pages/cart/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <nabbar></nabbar>
  <tabbar></tabbar>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const switchChecked = ref(true);
    const testClick = (event) => {
      console.log('Click Test');
    };
    return { testClick, switchChecked };
  }
};
</script>
  