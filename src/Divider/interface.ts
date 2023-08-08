export interface DividerProps {
  /**
   * @description 位置
   * @default left|right
   */
  Position?: any;

  /**
  * @description 内容
  * @default 
  */
  children?: string;

  /**
  * @description 嵌入文字中的纵向分割
  * @default true|false
  */
  direction?: boolean
}