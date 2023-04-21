<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-21 13:19:13
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-21 14:00:30
 * @FilePath: /wxLetgo/src/components/Card.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <nut-list :height="200" :listData="count" @scroll-bottom="handleScroll">
    <template v-slot="{ item, index }">
      <nut-card :img-url="state.imgUrl" :title="state.title" :price="state.price" :vipPrice="state.vipPrice"
        :shopDesc="state.shopDesc" :delivery="state.delivery" :shopName="state.shopName"></nut-card>
    </template>
  </nut-list>
</template>
<script>
import { onMounted, reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      count: new Array(10).fill(0),
      imgUrl:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
      price: '388',
      vipPrice: '378',
      shopDesc: '自营',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>'
    });

    const handleScroll = () => {
      let arr = new Array(10).fill(0);
      const len = state.count.length;
      state.count = state.count.concat(arr.map((item: number, index: number) => len + index + 1));
    };

    onMounted(() => {
      state.count = state.count.map((item: number, index: number) => index + 1);
    })
    return {
      state: state,
      count: state.count,
      handleScroll
    };
  }
}
</script>
  
<style>
 .nut-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    padding-top: 18px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  </style>