/*
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-08 13:22:46
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-08 14:42:05
 * @FilePath: /wxLetgo/src/app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createApp } from 'vue'

// import './app.less'
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


const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Address);
App.use(AddressList);
App.use(Backtop);
App.use(Category);
App.use(CategoryPane);
App.use(Cell);
App.use(CellGroup);
App.use(Col);
App.use(Comment);
App.use(ConfigProvider);
App.use(Empty);
App.use(FixedNav);
App.use(ImagePreview);
App.use(Menu);
App.use(MenuItem);
App.use(Navbar);
App.use(Noticebar);
App.use(Row);
App.use(Searchbar);
App.use(Swiper);
App.use(SwiperItem);
App.use(Tabbar);
App.use(TabbarItem);
App.use(Tag);
App.use(TimeDetail);
App.use(TimePannel);
App.use(TimeSelect);
App.use(Tour);

export default App
