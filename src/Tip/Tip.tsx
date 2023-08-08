import React, { useState } from "react";
import Css from './tip.module.less'
interface TipObj {
  children?: any,   //标签下方元素
  tipText?: any,    //提示标签内容
  bgColor?: any,    //提示标签颜色
  direction?: any,   //方向，默认上边
}
export default ({ children, tipText, bgColor, direction }: TipObj) => {
  let [flag, setFlag] = useState(false)
  // 如果不写或者写别的方向，默认top
  if (!direction && direction != "top" && direction != "bottom" && direction != "left" && direction != "right") {
    direction = "top"
  }
  let classname = [Css.tip, Css[direction], flag ? Css.aniShow : Css.aniHide].join(" ")
  // 进入显示-->show-->flag=true
  let handlerEnter = () => {
    setFlag(true)
  }
  // 移出隐藏
  let handlerLeave = () => {
    setFlag(false)
  }
  return (
    <div className={Css.wrapper}
      onMouseEnter={handlerEnter}
      onMouseLeave={handlerLeave}>
      <span
        className={classname}
        style={{
          backgroundColor: bgColor || "red"
        }}
      >{tipText}</span>
      <div className={Css.content}>
        {children}
      </div>
    </div>
  )
}