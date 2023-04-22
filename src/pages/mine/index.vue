<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:22:54
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-21 23:41:59
 * @FilePath: /wxLetgo/src/pages/mine/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <cus-component title="我的">

    <cus-fixed-nav></cus-fixed-nav>
  
    <nut-grid :column-num="3">
      <nut-grid-item text="文字"><Dongdong /></nut-grid-item>
      <nut-grid-item text="文字"><Dongdong /></nut-grid-item>
      <nut-grid-item text="文字"><Dongdong /></nut-grid-item>
    </nut-grid>
    <cus-watermark></cus-watermark>
    <cus-sku></cus-sku>
    <cus-time-select></cus-time-select>
    <cus-address></cus-address>
    <nut-cell title="地址管理" @click="testClick"></nut-cell>
    <!-- <cus-cell></cus-cell> -->
    <cus-image-preview></cus-image-preview>
    <!-- <cus-tour></cus-tour> -->
    <cus-comment></cus-comment>
    <cus-empty></cus-empty>
  </cus-component>

</template>
<script lang="ts" setup>
    import Taro from '@tarojs/taro';
    import { Dongdong } from '@nutui/icons-vue-taro';

    const testClick = () => {
      Taro.navigateTo({
        url: '/pages/base/address/index'
      })
    };
  
</script>
