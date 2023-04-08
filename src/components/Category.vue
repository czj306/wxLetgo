<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:37:48
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 13:46:46
 * @FilePath: /wxLetgo/src/pages/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-category :category="category" @change="change">
      <nut-category-pane :categoryChild="categoryChild" @onChange="onChange">
      </nut-category-pane>
    </nut-category>
  </template>
  <script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';
  import { categoryInfo, categoryChild, customCategory } from './data';
  
  export default {
    setup() {
      const data = reactive({
        category: [{}],
        categoryChild: [{}]
      });
  
      onMounted(() => {
        data.category = categoryInfo.category;
        data.categoryChild = categoryChild;
        data.customCategory = customCategory;
      });
  
      const change = (index: any) => {
        data.categoryChild = [].concat(data.category.category[index].children as any);
      };
      const onChange =()=>{
          console.log("当前分类数据");
      }
      return {
        onChange,
        change,
        ...toRefs(data)
      }
    }
  };
  </script>
  