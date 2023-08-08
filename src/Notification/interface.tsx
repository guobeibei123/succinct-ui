export interface NotProps{
     //自定义button接口
    /**
     * @description 按钮主题
     * @default info
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
    show?:boolean
    /**
     * @description 通知提醒内容
     */
    description?:String;
    /**
     * @description 通知提醒标题
     */
    message?:String;
     /**
     * @description 设置延时器
     */
     duration?:number;
      
     children:any
}


// export interface NotStyle{
//     description?:String;
//     duration?:number;
//     topleft?:number;
// }

// Omit 相当于？ 可选
// export type NotsProps = Omit<React.AllHTMLAttributes<HTMLElement>,'type'>;