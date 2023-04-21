<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 14:01:14
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-21 13:22:48
 * @FilePath: /wxLetgo/src/components/Navbar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <view class="status_bar"> -->
    <nut-navbar :style="style" safe-area-inset-top @on-click-back="back" @on-click-title="title" title="订单详情">
    <!-- <template #left>
      <div>返回</div>
    </template> -->
    <!-- <template #right>
         <ShareN width="16px"></ShareN>
       </template> -->
  </nut-navbar>
  <!--   
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
       </nut-navbar> -->
  <!-- </view> -->
</template>
  
<script lang="ts" setup>
// import { ref } from 'vue';
// import { ShareN, Cart2, MoreX } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro'

const style = {
  paddingTop: Taro['$navBarMarginTop'] + 'px',
  height: '60px',
}

const back = () => {
  alert('Click Back');
}
const title = () => {
  alert('Click Title');
}
    // const rightClick = () => {
    //   alert('Click Right');
    // }
    // const icon = () => {
    //   alert('Click icon');
    // }

</script>
<!-- 
<style>
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
  background: red;
}
</style> -->
  
  