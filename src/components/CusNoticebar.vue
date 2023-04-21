<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:54:31
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 13:56:56
 * @FilePath: /wxLetgo/src/components/Noticebar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- <template>
    <nut-noticebar
        text="NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"
        :background="`rgba(251, 248, 220, 1)`"
        :color="`#D9500B`"
      ></nut-noticebar>
  </template> -->

<template>
    <nut-noticebar
      :scrollable="false"
    >
      <template v-slot:left-icon>
        <img
          src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
          style="width: 20px; height: 20px"
        />
      </template>
      <a href="https://www.jd.com">京东商城</a>
    </nut-noticebar>
</template>

  
  