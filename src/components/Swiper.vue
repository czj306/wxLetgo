<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:39:19
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 13:39:26
 * @FilePath: /wxLetgo/src/components/Swiper.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-swiper :init-page="page3" :loop="true" @change="change">
        <nut-swiper-item>
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
        </nut-swiper-item>
        <nut-swiper-item>
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
        </nut-swiper-item>
        <nut-swiper-item>
          <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
        </nut-swiper-item>
        <nut-swiper-item>
          <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
        </nut-swiper-item>
        <template v-slot:page>
          <div class="page"> {{ current }}/4 </div>
        </template>
    </nut-swiper>
  </template>
  <script lang="ts">
    import { reactive, toRefs } from 'vue';
    export default {
      setup() {
        const state = reactive({
          page3: 0,
          current: 1
        });
        const change = (index: number) => {
          state.current = index + 1;
        };
        return { ...toRefs(state), change };
      }
    };
  </script>
  <style lang="scss">
    .nut-swiper-item {
      line-height: 150px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .page {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 46px;
      height: 22px;
      background: rgba(0, 0, 0, 0.33);
      border-radius: 22px;
      text-align: center;
      color: #fff;
      font-size: 14px;
    }
  </style>
  