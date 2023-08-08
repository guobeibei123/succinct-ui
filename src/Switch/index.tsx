import React, { useState } from "react";
import Css from "./index.module.less"

interface Props {
    value: boolean,   //数据
    activeColor: string, //自定义成功颜色
    negativeColor: string,  //自定义失败颜色
    activeWord: string,  //自定义成功文字
    negativeWord: string,  //自定义失败文字
    activeWordColor: string, //自定义成功文字颜色
    changeHandle: Function, //自定义事件
    disable: boolean
}
export default ({ value, activeColor, negativeColor, activeWord, negativeWord, activeWordColor, changeHandle, disable }: Props) => {
    let [val, setVal] = useState(value)
    let [dis, setDis] = useState(disable || false)
    let changeValue = () => {
        if (!dis) {          // 不是disable时候生效
            setVal(!val)  // 处理对错
            if (changeHandle) {      // 自定义事件
                changeHandle(!val)
            }
        }
    }
    return (
        <div className={Css.box}>
            <span
                className={Css.activeWord}
                style={{
                    color: val ? activeWordColor || "skyblue" : ""
                }}
            >{activeWord}</span>
            <div
                className={Css.wrapper}
                onClick={changeValue}
                style={{
                    backgroundColor: val ? activeColor || "green" : negativeColor || "red",
                    opacity: dis ? 0.5 : 1,
                    cursor: dis ? "not-allowed" : ""
                }}
            >
                <div
                    className={Css.inner}
                    style={{
                        left: val ? "3px" : "21px",
                    }}
                >
                </div>
            </div>
            <span
                className={Css.negativeWord}
                style={{
                    color: !val ? activeWordColor || "skyblue" : ""
                }}
            >{negativeWord}</span>
        </div>
    )
}