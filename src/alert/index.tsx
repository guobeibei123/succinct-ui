import React, { useState } from "react";
import Css from './index.module.less'

interface Alert {
  isClose?: boolean,
  type?: 'info' | 'success' | 'warning' | 'error',
  children?: any,
  handleClose?: any,
}

export default function myAlert(props: Alert) {
  let { isClose, type, children, handleClose } = props
  let [isFlag, setFlag] = useState(isClose)
  if (!type) {
    type = 'info'
  }
  let handleClick = () => {
    setFlag(!isClose)
    if(handleClose){
      handleClose()
    }
  }
  let classStyle = [Css['alertbox'], Css[type]]

  return (
    <div style={{ display: isFlag ? "none" : "block" }} className={classStyle.join(" ")}>
      <div className={Css.mytitle}>
        <p>{type}</p> 
        <span onClick={() => handleClick()} style={{cursor:"pointer"}}>×</span>
      </div>
      <div className={Css.content}>
        {children}
      </div>

    </div>
  )
}