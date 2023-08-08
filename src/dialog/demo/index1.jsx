import React, { useState } from "react"
import Dialog from '../dialog.tsx'
export default () => {
  let [flag, setFlag] = useState(false)
  let changeShow = () => {
    console.log(flag);
    setFlag(!flag)
  }
  return (
    <div>
      <Dialog
        isFlag={flag}
        onOk={() => {
          setFlag(false)
          console.log('触发确认按钮');
        }}
        nCancel={() => { setFlag(false); console.log('触发取消按钮'); }}
        onFocus={() => { changeShow(); console.log('点击x按钮触发事件') }}
      >
      </Dialog>
      <button onClick={() => changeShow()} style={{ backgroundColor: '#3c7eff', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>点击显示</button>
    </div>
  )
}