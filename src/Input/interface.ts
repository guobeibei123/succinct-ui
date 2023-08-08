export interface InputPorps {
    /**
     * @description 宽度设置
     * @default px|%
     */
    widths: string,

    /**
     * @description 字体大小设置
     * @default px
     */
    size: string,

    /**
     * @description input占位
     * @default function
     */
    placeHolder: string,

        /**
     * @description 字体大小设置
     * @default function
     */
    btnhWord: string,

    /**
     * @description 点击搜索按钮事件
     * @default function
     */
    onBtnSearch: Function,

    /**
     * @description 前端头文字添加
     * @default function
     */
    headerText: string,

    /**
     * @description 添加清空按钮
     * @default function
     */
    clearIcon: boolean,
}