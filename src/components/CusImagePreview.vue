<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:52:15
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 13:53:01
 * @FilePath: /wxLetgo/src/components/ImagePreview.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-image-preview
        :show="showPreview"
        :images="imgData"
        :pagination-visible="true"
        pagination-color="red"
        @close="hideFn"
    />
    <nut-cell isLink title="设置轮播指示器及颜色" :showIcon="true" @click="showFn"></nut-cell>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
        const resData = reactive({
            showPreview: false,
            imgData: [
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
                },
            ]
        });

        const showFn = () => {
            resData.showPreview = true;
        }

        const hideFn = () => {
            resData.showPreview = false;
        }
        
        return {
            ...toRefs(resData),
            showFn,
            hideFn
        };
    }
  };
</script>
