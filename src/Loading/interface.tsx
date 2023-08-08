export default interface LoadingProps {
  //自定义button接口
  /**
   * @description 尺寸/大小
   * @default px
   */
  size: any,

  /**
   * @description 速率
   */
  duration: string,

  /**
   * @description 方向
   */
  direction: string,

  /**
   * @description 是否暂停
   */
  playState: boolean,

  /**
  * @description 线条颜色
  */
  color: string,

  /**
 * @description 线条尺寸
 */
  border: any,
}