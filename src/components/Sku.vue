<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:44:22
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 13:44:28
 * @FilePath: /wxLetgo/src/components/Sku.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-cell :title="`基础用法`" desc="" @click="base = true"></nut-cell>
    <nut-sku
      v-model:visible="base"
      :sku="sku"
      :goods="goods"
      @selectSku="selectSku"
      @clickBtnOperate="clickBtnOperate"
      @close="close"
    ></nut-sku>
  </template>
  <script lang="ts">
  import { ref,reactive,onMounted,toRefs} from 'vue';
  import Taro from '@tarojs/taro'
  export default {
    setup() {
        const base = ref(false);
        const data = reactive({
          sku: [],
          goods: {}
        });
  
        onMounted(() => {
          Taro.request({
            url: 'https://storage.360buyimg.com/nutui/3x/data.js', //仅为示例，并非真实的接口地址
            success: function (res) {
              console.log(res.data)
              const { Sku, Goods, imagePathMap } = res.data;
                data.sku = Sku;
                data.goods = Goods;
            }
          })
        });
        // 切换规格类目
        const selectSku = (ss: string) => {
          const { sku, skuIndex, parentSku, parentIndex } = ss;
          if (sku.disable) return false;
          data.sku[parentIndex].list.forEach((s) => {
            s.active = s.id == sku.id;
          });
          data.goods = {
            skuId: sku.id,
            price: '4599.00',
            imagePath:
              '//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg' 
          };
        };
        // 底部操作按钮触发
        const clickBtnOperate = (op:string)=>{
          console.log('点击了操作按钮',op)
        } 
        // 关闭商品规格弹框
        const close = ()=>{}
        return { base, selectSku, clickBtnOperate,close, ...toRefs(data) };
    }
  }
  </script>
  