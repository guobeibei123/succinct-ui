export interface DialogObj {
  /**
  * @description 提示标题
  * @default Module
  */
  title?: string,

  /**
  * @description 提示内容
  * @default string
  */
  children?: string,

   /**
  * @description 点击确认按钮触发事件
  * @default Function
  */
   onOk: any,

    /**
  * @description 点击取消按钮触发事件
  * @default Function
  */
    onCancel: any,

  /**
  * @description 点击右上角关闭按钮触发事件
  * @default Funtcion
  */ 
   onFocus?: any,


  /**
  * @description 用户输入日期字符串
  * @default 'new Date()'
  */
     isFlag?:boolean
}