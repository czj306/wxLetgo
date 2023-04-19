/*
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-03-27 00:59:24
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-19 23:34:57
 * @FilePath: /wxLetgo/src/app.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default defineAppConfig({
  pages: [
    'pages/category/index',
    'pages/cart/index',
    'pages/home/index',
    'pages/mine/index',
    'pages/order/index',
  ],
  // usingComponents: {
  //   Navbar: './components/Navbar.vue',
  //   Tabbar: './components/Tabbar.vue'
  // },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#fff',
    selectedColor: '#fff',
    backgroundColor: '#000',
    borderStyle:'black',
    list: [{
      pagePath: 'pages/home/index',
      text: '首页'
    }, {
      pagePath: 'pages/category/index',
      text: '分类'
    }, {
      pagePath: 'pages/cart/index',
      text: '购物车'
    }, {
      pagePath: 'pages/mine/index',
      text: '我的'
    }]
  }
})
