export interface CollapseProps {
  //自定义container接口
  /**
   * @description 标题
   * 
   */
  title?: String;
  /**
   * @description 宽度
   * @default 200px
  */
  width?: Number;
  /**
  * @description 高度
  * @default 60px
 */
  height?: Number;
  /**
   * @description 设置选型
   */
  options?: any;
  /**
 * @description 获取dom
 */
  ref?: any;
  /**
* @description 设置打开元素的状态
*/
  state?: Boolean

  children?:any
}

