<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 14:25:30
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 14:25:35
 * @FilePath: /wxLetgo/src/components/Tour.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-cell title="点击试试" @click="showTour = true"></nut-cell>

      <nut-tabbar :bottom="true">
        <nut-tabbar-item id="target1" tab-title="首页"></nut-tabbar-item>
        <nut-tabbar-item id="target2" tab-title="分类"></nut-tabbar-item>
        <nut-tabbar-item id="target3" tab-title="购物车"></nut-tabbar-item>
        <nut-tabbar-item id="target4" tab-title="我的"></nut-tabbar-item>
      </nut-tabbar>

      <nut-tour
        class="nut-customword-tour"
        v-model="showTour"
        :steps="steps"
        location="top-start"
        :offset="[0, 0]"
        maskWidth="60"
        maskHeight="50"
      ></nut-tour>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      showTour: false,
      steps: [
        {
          content: '70+ 高质量组件，覆盖移动端主流场景',
          target: 'target1'
        },
        {
          content: '支持一套代码同时开发多端小程序+H5',
          target: 'target2'
        },
        {
          content: '基于京东APP 10.0 视觉规范',
          target: 'target3',
          location: 'top-end'
        },
        {
          content: '支持定制主题，内置 700+ 个主题变量',
          target: 'target4',
          location: 'top-end'
        }
      ],
    });
    return {...toRefs(state)};
  }
};
</script>
<style>
page{
  padding-top: 200px;
}
.nut-tour-content{
  display: block;
  width: 200px;
}
.nut-tabbar-item_icon-box_nav-word{
  font-size: 14px;
}
</style>
