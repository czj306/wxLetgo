<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:45:34
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 13:45:47
 * @FilePath: /wxLetgo/src/components/TimeSelect.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-cell @click="handleClick1">
      <span><label>请选择配送时间</label></span>
    </nut-cell>
    <nut-time-select v-model:visible="visible1" height="50%" :current-key="currentKey1" :current-time="currentTime1" @select="handleSelected1">
      <template #pannel>
        <nut-time-pannel name="2月23日(今天)" pannel-key="0" @change="handleChange1"></nut-time-pannel>
        <nut-time-pannel name="2月24日(星期三)" pannel-key="1" @change="handleChange1"></nut-time-pannel>
      </template>
      <template #detail>
        <nut-time-detail :times="times1" @select="selectTime1"></nut-time-detail>
      </template>
    </nut-time-select>
  </template>
  <script lang="ts">
    import { reactive, toRefs, onMounted } from 'vue';
    export default {
      props: {},
      setup() {
        const state = reactive({
          visible1: false,
          currentKey1: 0,
          currentTime1: [] as any[],
          times1: [
            {
              key: 0,
              list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
            },
            {
              key: 1,
              list: ['9:00-10:00', '10:00-11:00']
            },
          ],
        });
  
        const handleChange1 = (pannelKey: number) => {
          state.currentKey1 = pannelKey;
          state.currentTime1 = [];
          state.currentTime1.push({
            key: state.currentKey1,
            list: []
          });
        };
  
        const handleClick1 = () => {
          state.visible1 = true;
        };
  
        const selectTime1 = (item: string) => {
          let curTimeIndex = state.currentTime1[0]['list'].findIndex((time: string) => time === item);
          if(curTimeIndex === -1) {
            state.currentTime1[0]['list'].push(item);
          } else {
            state.currentTime1[0]['list'].splice(curTimeIndex, 1);
          }
        };
  
        const handleSelected1 = (obj: any) => {
          console.log(`您选择了：${JSON.stringify(obj)}`);
        };
  
        onMounted(() => {
          state.currentTime1.push({
            key: state.currentKey1,
            list: []
          });
        });
  
        return { 
          ...toRefs(state), 
          handleChange1,
          handleSelected1,
          selectTime1,
          handleClick1, 
        };
      }
    };
  </script>
  