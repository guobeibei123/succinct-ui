export interface SelectProps {
  //自定义container接口

  /**
   * @description 容器主题
   * @default primary
   */
  type?: String;
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
   * @description 禁用状态
   */
  disabled?: any;
  /**
  * @description 加载状态
  */
  loading?: Boolean;
  /**
  * @description 子节点
  */
  children?: any;

  /**
* @description 控制整页加载
* @default primary
*/
  all?: Boolean;
  /**
* @description 控制显示隐藏
* @default primary
*/
  handleClick?: Function | undefined;
  /**
* @description 控制input的value值
* @default primary
*/
  changeInput?: Function | undefined;
  /**
* @description 下拉选项的数据
* 
*/
  options?: any;
  /**
* @description 下拉选项的数据标签
* 
*/
  item?: any;
  /**
* @description 下拉选项的数据标签
* 
*/
  state?: any;
  /**
* @description 数据信息
* 
*/
  message?: any;
}

export interface SelectStyle {
  width?: String;
  height?: String;
  cursor?: String;
  value?: any
}
// export type NativeSelectProps = Omit<React.InputHTMLAttributes<HTMLElement>, 'type'>; //原生button接口
