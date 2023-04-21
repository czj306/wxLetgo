<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:43:24
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 13:43:52
 * @FilePath: /wxLetgo/src/components/Comment.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-comment
        :images="cmt.images"
        :videos="cmt.videos"
        :info="cmt.info"
        @click="handleclick"
        @clickImages="clickImages"
        :operation="['replay']"
      >
        <template #comment-labels>
          <img
            style="height:15px;width:50px"
            src="https://img11.360buyimg.com/imagetools/jfs/t1/211858/17/4258/12101/618e6f78Ed0edcadc/e83a673555edf59f.jpg"
          />
        </template>
    </nut-comment>
    </template>
    <script lang="ts">
    import { reactive, ref,onMounted } from 'vue';
    import Taro from '@tarojs/taro';
    export default {
      setup() {
        let cmt = ref({});
        onMounted(()=>{
            Taro.request({
              url: 'https://storage.360buyimg.com/nutui/3x/comment_data.json', //仅为示例，并非真实的接口地址
              success: function (res) {
                cmt.value = res.data.Comment;
              }
            })
        })
        const handleclick = (info: any) => {
          console.log('进行跳转', info);
        };
        const clickImages = (imgs)=>{
          console.log('进行图片展示',imgs)
        }
        return {
          cmt,
          handleclick,
          clickImages
        };
      }
    }
    </script>
    