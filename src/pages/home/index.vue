<template>
    <nut-cell title="我是标题" desc="描述文字"></nut-cell>
    <nut-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></nut-cell>
    <nut-cell title="点击测试" @click="testClick"></nut-cell>
    <nut-cell title="圆角设置 0" round-radius="0"></nut-cell>
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
  