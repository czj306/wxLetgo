<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-21 23:17:02
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-21 23:20:54
 * @FilePath: /wxLetgo/src/components/CusWater.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-cell class="wrap">
      <nut-watermark v-if="!flag" class="mark1" :z-index="1" content="nut-ui-water-mark"></nut-watermark>
      <nut-watermark
        v-if="flag"
        class="mark1"
        :image-width="60"
        :image-height="23"
        :z-index="1"
        :image="imgSrc"
      ></nut-watermark>
    </nut-cell>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue";
    const flag = ref(true);
    const imgSrc = ref(
      "https://img11.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png"
    );
  </script>
  <style lang="scss">
    .wrap {
      width: 100%;
      height: 240px;
      display: block;
      background: #fff;
      >img {
        width: 100%;
      }
      .mark1 {
        width: 100%;
        top: 50px;
      }
      .nut-button{
        margin-right: 10px;
      }
    }
  </style>
  