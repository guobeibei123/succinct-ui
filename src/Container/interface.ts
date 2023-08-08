export interface ContainerProps {
  //自定义container接口
  /**
   * @description 容器主题
   * @default primary
   */
  type?: String;
  /**
   * @description 宽度
   */
  width?: Number;
  /**
   * @description 高度
   */
  height?: Number;
  /**
  * @description 子节点
  */
  children?: any;

}
export interface ContainerStyle {
  //button样式接口
  width?: String;
  height?: String;

}

