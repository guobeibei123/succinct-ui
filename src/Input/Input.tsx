import React, { useRef, useState } from 'react';
import Css from "./Input.module.less"
import { InputPorps } from './interface';

export default function Input({ widths, size, placeHolder, btnhWord, onBtnSearch, headerText, clearIcon }: InputPorps) {
    // 点击框子的值
    let [focusCol, setFocusCol] = useState(false)
    // 聚焦input输入框的值
    let [isEnter, setEnter] = useState(false)
    // 创建input中的ref对象
    let inputEl: any = useRef()
    let goSearch = () => {
        if (onBtnSearch) {
            // 如果按钮有事件，发送事件，并传递搜索框的value值
            if (headerText) {
                onBtnSearch("headerText" + inputEl.current.value)
            } else {
                onBtnSearch(inputEl.current.value)
            }
        }
    }
    return (
        <div className={Css.wrapper}
            style={{
                width: widths ? widths : "280px",  //用户传入的宽度
                borderColor: focusCol || isEnter ? 'rgb(64,150,255)' : "rgb(217,217,217)",
                fontSize: size ? size : "16px", //设定大小
            }}
            //移入移出变色要素
            onMouseEnter={() => {
                setEnter(true)
            }}
            onMouseLeave={() => {
                setEnter(false)
            }}>
            {/* 左侧提示 */}
            <div
                style={{
                    paddingRight: "5px",
                    display: headerText ? "block" : "none",
                }}
            >{headerText}</div>
            {/* 中间输入框 */}
            <input type="text"
                ref={inputEl}
                // 选中/不选变色要素
                onFocus={() => {
                    setFocusCol(true)
                }}
                onBlur={() => {
                    setFocusCol(false)
                }}
                placeholder={placeHolder ? placeHolder : ""}
                style={{
                    fontSize: size ? size : "16px", //设定大小
                }}
            />
            {/* 清空标志 */}
            <div style={{
                display: clearIcon ? "block" : "none",
                fontSize: size ? size : "16px", //设定大小
            }}
                onClick={() => { inputEl.current.value = "" }}
                className={Css.clear}>
                ×
            </div>
            {/* 搜索框 */}
            <button
                onClick={goSearch}
                style={{
                    fontSize: size ? size : "16px", //设定大小
                }}
            >{btnhWord ? btnhWord : "搜索"}</button>
        </div>
    )
}