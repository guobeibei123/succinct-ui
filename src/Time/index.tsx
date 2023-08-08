  import React, { useMemo, useState, useRef } from "react";
import Css from './time.module.less'
import { TimeProps } from './interface';
export default ({ handler, resetHandle, WatchTime, width, height }: TimeProps) => {
  let [total, setTotal] = useState(0)
  let [flag, setFlag] = useState(true)
  let timer: any = useRef()
  let [timerArr, setTimeArr] = useState([])
  let sec = useMemo(() => {
    return Math.trunc((total / 1000) % 60)
  }, [total])
  let min = useMemo(() => {
    return Math.trunc((total / 1000) / 60)
  }, [total])
  let msec = useMemo(() => {
    return Math.trunc((total / 10) % 100)
  }, [total])
  let time = () => {
    setFlag(!flag)
    if (!flag) {
      clearInterval(timer.current)
    } else {
      timer.current = setInterval(() => {
        setTotal(v => v + 16.7)
      }, 16.7)
    }
    handler(flag)
  }
  let timerAdd = () => {
    let arr: any = [...timerArr]
    arr.push(`${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}:${msec < 10 ? "0" + msec : msec}`)
    setTimeArr(arr)
    WatchTime(timerArr)
    console.log(timerArr);
  }
  let resetTime = () => {
    clearInterval(timer.current)
    setTotal(0)
    setTimeArr([])
    setFlag(true)
    resetHandle ? resetHandle() : () => { }
  }
  return (
    <div className={Css['bigBox']} style={{
      width: width ? width : '400px',
      height: height ? height : '500px',
    }}>
      <h1 >秒表</h1>
      <div className={Css['top']}>
        <span className={Css["min"]}>{min < 10 ? "0" + min : min}</span>:
        <span className={Css["sec"]}>{sec < 10 ? "0" + sec : sec}</span>:
        <span className={Css["msec"]}>{msec < 10 ? "0" + msec : msec}</span>
      </div>
      <div className={Css["center"]}>
        <button onClick={time}>{flag ? "开始" : "结束"}</button>
        <button onClick={timerAdd} disabled={flag}>分段</button>
        <button onClick={resetTime}>重置</button>
      </div>
      <div className={Css["footer"]}>
        {
          timerArr.map((item, index) => {
            return (
              <p key={index}>
                <span>第{index + 1}段</span>
                <span>时间：{item}</span>
              </p>
            )
          })
        }
      </div>
    </div>
  )
}