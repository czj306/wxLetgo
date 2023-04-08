<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:48:24
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 13:48:43
 * @FilePath: /wxLetgo/src/components/Address.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-cell title="选择地址" :desc="text" is-link @click="showAddressExist"></nut-cell>
    <nut-address
        v-model:visible="showPopupExist"
        type="exist"
        :exist-address="existAddress"
        @close="close"
        :is-show-custom-address="false"
        @selected="selected"
        exist-address-title="配送至"
    ></nut-address>
    </template>
    <script>
      import { ref,reactive,toRefs } from 'vue';
      export default {
        setup() {
            const showPopupExist = ref(false);
            const existAddress = ref([
              {
                id: 1,
                addressDetail: '',
                cityName: '次渠镇',
                countyName: '通州区',
                provinceName: '北京市',
                selectedAddress: true,
                townName: '',
                name: '探探鱼',
                phone: '182****1718'
              },
              {
                id: 2,
                addressDetail: '',
                cityName: '钓鱼岛全区',
                countyName: '',
                provinceName: '钓鱼岛',
                selectedAddress: false,
                townName: '',
                name: '探探鱼',
                phone: '182****1718'
              },
              {
                id: 3,
                addressDetail: '京东大厦',
                cityName: '大兴区',
                countyName: '科创十一街18号院',
                provinceName: '北京市',
                selectedAddress: false,
                townName: '',
                name: '探探鱼',
                phone: '182****1718'
              }
            ]);
    
            const text = ref('请选择地址')
    
            const showAddressExist = () => {
              showPopupExist.value = true;
            };
    
            const close = val => {
              if (val.type == 'exist') {
                const {provinceName,cityName,countyName,townName,addressDetail} = val.data
                text.value = provinceName + cityName + countyName + townName + addressDetail;
              } else {
                text.value = val.data.addressStr;
              }
            };
    
            const selected = (prevExistAdd, nowExistAdd, arr) => {
              console.log(prevExistAdd);
              console.log(nowExistAdd);
            };
    
            return { showPopupExist, existAddress, showAddressExist, text, close, selected };
        }
      }
      </script>
    