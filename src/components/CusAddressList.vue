<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:48:53
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-21 13:37:08
 * @FilePath: /wxLetgo/src/components/AddressList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-address-list
      :data="data"
      swipe-edition
      show-bottom-button
      @edit-icon="editClick"
      @del-icon="delClick"
      @click-item="clickItem"
      @swipe-del="delClickSwipe"
      @add="addAddress"
      :data-options="dataOptions"
    >
    </nut-address-list>
  </template>
  <script lang="ts">
  import { ref, reactive } from 'vue';
  export default {
    setup() {
      const data = ref([
          {
            testid:3,
            testaddressName:'姓名',
            phone:'123****4567',
            defaultAddress:false,
            fullAddress:'北京市通州区测试测试测试测试测试测试测试测试测试'
          },
          {
            testid:4,
            testaddressName:'姓名',
            phone:'123****4567',
            defaultAddress:true,
            fullAddress:'北京市通州区测试测试测试测试测试测试测试测试测试'
          },
        ]);
        const dataOptions = reactive({
          id: 'testid',
          addressDetail:'testaddressDetail',
          addressName:'testaddressName'
        });
        const clickItem = ()=>{
          console.log('Click To Address');
        }
        const editClick = ()=>{
          console.log('Click To Edit');
        }
        const delClick = ()=>{
          console.log('Click To Delete');
        }
        const delClickSwipe = () => {
          console.log('Click On DelClickSwipe');
        };
        const addAddress = ()=>{
          console.log('Click To Add');
        }
        return {
          data,
          clickItem,
          delClick,
          editClick,
          delClickSwipe,
          addAddress,
          dataOptions
        };
      }
    };
  </script>
  