import React, { useState, useRef } from "react";
import Css from './time.module.less'
import { BackTimeProps } from './interface'

export default ({ data }: BackTimeProps) => {
  let timer: any = useRef()
  let newDate = +new Date(data) || +new Date(new Date((+new Date() + 86400000)).toLocaleDateString())
  let oldDate = +new Date()
  let [count, setCount] = useState(0)
  let date = Math.floor((newDate - oldDate) / 1000)
  let min = Math.floor(date / 60 % 60)
  let hour = Math.floor(date / 60 / 60)
  let ser = Math.floor((newDate - oldDate) / 1000 % 60)
  clearInterval(timer.current)
  timer.current = setInterval(() => {
    setCount(count + 1)
  }, 1000)

  return (
    <div className={Css['Bigbox']}>
      <p>倒计时</p>
      <div className={Css.box}>
        <p>{hour < 10 ? "0" + hour : hour} 时</p>
        <p>{min < 10 ? "0" + min : min} 分</p>
        <p>{ser < 10 ? "0" + ser : ser} 秒</p>
      </div>
    </div>
  )
}