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
      <Dialog title={
        <div style={{ textAlign: 'center' }}>
          Modal Title
        </div>
      } isFlag={flag} onOk={() => {
        setFlag(false)
      }} onCancel={() => { setFlag(false) }}
      onFocus={() => {  changeShow();console.log('点击x按钮触发事件') }}
      >
        You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.
      </Dialog>
      <button onClick={() => changeShow()} style={{ backgroundColor: '#3c7eff', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>点击显示</button>
    </div>
  )
}