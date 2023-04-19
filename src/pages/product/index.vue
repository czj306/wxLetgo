<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:22:54
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-19 23:40:41
 * @FilePath: /wxLetgo/src/pages/product/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <nabbar></nabbar>
  <tabbar></tabbar>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';
  import Taro from '@tarojs/taro';

  export default {
    props: {},
    created() {
      // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
      // 而不是频繁地调用此 API
      // this.$instance = Taro.getCurrentInstance()
    },
    
    // 可以使用所有的 Vue 生命周期方法
    mounted() {
      // 获取路由参数
      // console.log(this.$instance.router.params) // 输出 { id: 2, type: 'test' }
    },

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
      

      return { 

      };
    }
  };
</script>
