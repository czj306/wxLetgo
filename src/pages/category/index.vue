<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:22:54
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-18 21:00:48
 * @FilePath: /wxLetgo/src/pages/category/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <nabbar></nabbar>
  <tabbar></tabbar>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';
  
  export default {
    props: {},
    // 可以使用所有的 Vue 生命周期方法
    mounted () {},

    // onLoad
    onLoad () {
      // // 跳转到目的页面，打开新页面
      // Taro.navigateTo({
      //   url: '/pages/page/path/name',
      // })

      // // 跳转到目的页面，在当前页面打开
      // Taro.redirectTo({
      //   url: '/pages/page/path/name',
      // })
      // // 传入参数 id=2&type=test
      // Taro.navigateTo({
      //   url: '/pages/page/path/name?id=2&type=test',
      // })
    },

    // onReady
    onReady () {},

    // 对应 onShow
    onShow () {},

    // 对应 onHide
    onHide () {},

    // 对应 onPullDownRefresh
    onPullDownRefresh () {},

    setup() {
      

      return { 

      };
    }
  };
</script>
