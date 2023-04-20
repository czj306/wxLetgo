/*
 * @Author: czj306 306205161@qq.com
 * @Date: 2023-04-20 12:44:16
 * @LastEditors: czj306 306205161@qq.com
 * @LastEditTime: 2023-04-20 12:44:29
 * @FilePath: /wxLetgo/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: "myGlobalState",
  // state: 返回对象的函数
  state: ()=> ({
    count: 1
  }),
});
