export interface TreeProps {
  //自定义Tree接口
  /**
   * @description 排名
   *
   */
  id?: any;
  /**
   * @description 标签名
   */
  name?: String;
  /**
  * @description 子列表
  */
  children?: TreeProps[];
  /**
  * @description 图标
  */
  icon?: any;

}
export interface TreeView {
  data: TreeProps[]
}
