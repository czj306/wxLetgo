<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-21 23:38:15
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-21 23:46:44
 * @FilePath: /wxLetgo/src/components/CusComponent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
    <config-provider>
        <cus-navbar :title="title"></cus-navbar>
        <slot></slot>
        <cus-tabbar></cus-tabbar>
    </config-provider>
</template>
<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';

interface Props {
    title: string
}
withDefaults(defineProps<Props>(), {
    title: ''
})

</script>