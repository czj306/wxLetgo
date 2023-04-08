<!--
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:31:21
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 14:36:39
 * @FilePath: /wxLetgo/src/components/Tabbar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nut-tabbar @tab-switch="tabSwitch" :bottom="true">
       <nut-tabbar-item tab-title="标签" :icon="Home"></nut-tabbar-item>
        <nut-tabbar-item tab-title="标签" :icon="Category"> </nut-tabbar-item>
        <nut-tabbar-item tab-title="标签" :icon="Find"></nut-tabbar-item>
        <nut-tabbar-item tab-title="标签" :icon="Cart"></nut-tabbar-item>
        <nut-tabbar-item tab-title="标签" :icon="My"></nut-tabbar-item>
    </nut-tabbar>
  </template>
  <script>
    import { Home,Category,Find,Cart,My} from '@nutui/icons-vue-taro';
    export default{
      components: {Home,Category,Find,Cart, My },
      setup() {
        function tabSwitch(item, index) {
          console.log(item, index);
        }
        return {
          tabSwitch,
          Home,
          Category,
          Find,
          Cart,
          My 
        };
      },
    }
  </script>
  