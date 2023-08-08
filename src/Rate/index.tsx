import React, { useState } from "react";
import Css from "./index.module.less"

interface Props {
    totalScore: number,   //总评分(必填)
    score: number,   //传来分数
    text: boolean,   //是否添加文本
    children: string,  //自定义选择内容
    readonly: boolean  //是否只读
}

const Rate = ({ totalScore, score, text, children, readonly }: Props) => {
    let [deter, setDeter] = useState(score || 1)  //设置确定分数   
    let [rate, setRate] = useState(deter)   //设置分数   
    let arr = new Array(totalScore).fill(children || "⚝")
    // 鼠标移入设置rate评分
    function enterRate(index: number) {
        if (!readonly) {
            setRate(index + 1)
        }
    }
    // 鼠标移除返回选中评分
    function leaveRate() {
        if (!readonly) {
            setRate(deter)
        }
    }
    // 鼠标点击选中评分
    function choiceRate(index: number) {
        if (!readonly) {
            setDeter(index + 1)
        }
    }
    return (
        <div className={Css.wrapper}>
            <div style={{ display: text ? "block" : "none" }}>评分:{rate}</div>
            <ul className={Css.rateList}>
                {
                    arr.map((value, index) => {
                        return (
                            <li
                                key={index}
                                className={rate >= index + 1 ? Css.selectChoice : ""}
                                // 鼠标移入
                                onMouseEnter={() => {
                                    enterRate(index)
                                }}
                                // 鼠标移除
                                onMouseLeave={() => {
                                    leaveRate()
                                }}
                                // 鼠标点击
                                onClick={() => {
                                    choiceRate(index)
                                }}
                            >{value}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Rate