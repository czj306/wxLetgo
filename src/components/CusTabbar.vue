<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:31:21
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-20 13:51:29
 * @FilePath: /wxLetgo/src/components/Tabbar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <nut-tabbar @tab-switch="tabSwitch" :bottom="true">
    <nut-tabbar-item v-for="(item, index) in List" :key="index" :name="item.name" :tab-title="item.title" :icon="item.icon">
    </nut-tabbar-item>
  </nut-tabbar>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue'
import { Home, Category, Cart, My } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';
const activeName = ref("category");
const List = [
  {
    title: '首页',
    icon: h(Home),
    name: 'home'
  },
  {
    title: '分类',
    icon: h(Category),
    name: 'category'
  },
  {
    title: '购物车',
    icon: h(Cart),
    name: 'cart'
  },
  {
    title: '我的',
    icon: h(My),
    name: 'mine'
  }
]
function tabSwitch(item, index) {
  console.log(item, index);
  Taro.switchTab({
    url: `/pages/${index}/index`
  })
}
</script>
  