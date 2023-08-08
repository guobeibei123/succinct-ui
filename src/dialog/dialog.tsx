import React from "react";
import Css from './index.module.less'
import { DialogObj } from './interface'

export default ({ title, onOk, onCancel, children, onFocus, isFlag }: DialogObj) => {
  if (isFlag) {
    return (
      <div className={[Css['bigbox'], isFlag ? Css['maskLarge'] : Css['maskLittle']].join(' ')}>
        <div className={[Css['modal'], isFlag ? Css['abc'] : Css['def']].join(' ')}>
          <div className={Css['line']}>
            <h3>{title ? title : 'Modal Title'}</h3>
            <span onClick={() => onFocus()}>x</span>
          </div>
          <div className={Css['conent']}>
            {children ? children : 'You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.'}
          </div>
          <div className={Css['button']}>
            <button className={Css['confirm']} onClick={onOk}>确认</button>
            <button className={Css['cancel']} onClick={onCancel}>取消</button>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}