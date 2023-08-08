import React, { useState, useRef, useEffect } from "react";
import Css from "./index.module.less"

interface Props {
    value: number,  //数值
    addHandle: Function,  //增加触发函数
    reduceHandle: Function, //减少触发函数
    minValue: number,//最小数
    maxValue: number,//最大值
    changeValue: Function,  //手动修改value值的回调函数
    step: number,  //递进数量
    isChange: boolean  //设置是否可以手动改
}

const StepInput = ({ value, addHandle, isChange, reduceHandle, minValue, maxValue, changeValue, step }: Props) => {
    let [num, setNum] = useState(value)
    let [flag, setFlag] = useState(false)
    let minNum = minValue || 0
    let stepNum = step || 1
    // 对input输入框使用ref
    const inputEl: any = useRef(null)
    // 初始化
    useEffect(() => {
        inputEl.current.value = num
    })
    // 增加函数
    let add = function () {
        setFlag(false)
        if (num + stepNum >= maxValue) {
            setNum(maxValue)
        } else {
            if (addHandle) {
                addHandle()
            }
            setNum(num + stepNum)
        }
    }
    // 减少函数
    let reduce = function () {
        // 判断值是否减少之后比最小值小
        if (num - stepNum >= minNum) {
            setFlag(false)
            setNum(num - stepNum)
            if (reduceHandle) {
                reduceHandle()
            }
        } else {
            setFlag(true)
            setNum(minNum)
        }
    }
    // 手动修改
    let changeV = function () {
        setNum(+inputEl.current.value)
        if (changeValue) {
            changeValue(inputEl.current.value)
        }
    }
    return (
        <div className={Css.wrapper}>
            <div className={Css.inputBox}>
                <input type="text" disabled={isChange ? true : false} ref={inputEl} onChange={() => { changeV() }} />
                <div className={Css.StepInput}>
                    <button onClick={() => add()}>︿</button>
                    <button disabled={flag} style={{ cursor: flag ? "not-allowed" : "point" }} onClick={() => reduce()}>﹀</button>
                </div>
            </div>
        </div>
    )
}

export default StepInput