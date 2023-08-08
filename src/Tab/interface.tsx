export interface TabProps {
  //自定义container接口

  /**
   * @description tab标签选项
   * 
   */
  option?: any;
  /**
  * @description 内容区选项
  * 
  */
  option1?: any;
  /**
* @description tab标签选项 子选项
*
*/
  item?: String;
  /**
* @description 索引值
*
*/
  i?: Number;
  /**
* @description 判断是哪一个样式
*
*/
  style?: any;
  /**
* @description 判断是哪一个盒子
*
*/
  box?: any;
  /**
* @description 子元素
*
*/
  children?: any;
}