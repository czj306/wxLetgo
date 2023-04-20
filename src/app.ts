/*
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:22:46
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-20 12:45:42
 * @FilePath: /wxLetgo/src/app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia';

// import './app.scss'
import {  
  Address,
  AddressList,
  Backtop,
  Category, 
  CategoryPane,
  Cell,
  CellGroup,
  Col,
  Comment,
  ConfigProvider,
  Empty,
  FixedNav,
  ImagePreview,
  Menu,
  MenuItem,
  Navbar,
  Noticebar,
  Row, 
  Searchbar,
  Swiper,
  SwiperItem,
  Tabbar, 
  TabbarItem,
  Tag,
  TimeDetail,
  TimePannel,
  TimeSelect, 
  Tour,
} from '@nutui/nutui-taro';

const nutuiList = [
  Address,
  AddressList,
  Backtop,
  Category, 
  CategoryPane,
  Cell,
  CellGroup,
  Col,
  Comment,
  ConfigProvider,
  Empty,
  FixedNav,
  ImagePreview,
  Menu,
  MenuItem,
  Navbar,
  Noticebar,
  Row, 
  Searchbar,
  Swiper,
  SwiperItem,
  Tabbar, 
  TabbarItem,
  Tag,
  TimeDetail,
  TimePannel,
  TimeSelect, 
  Tour,
]


const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia());
nutuiList.forEach((item) => {

  App.use(item);
})

export default App
