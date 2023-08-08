import React, { useState } from "react"
import Dialog from '../dialog.tsx'
export default () => {
  let [flag, setFlag] = useState(false)
  let [flag1, setFlag1] = useState(false)
  let changeShow = () => {
    console.log(flag);
    setFlag(!flag)
  }
  let changeFlag = () => {
    console.log(flag);
    setFlag1(!flag1)
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '300px',
    }}>
      <div>
        <Dialog title={
          <div style={{ textAlign: 'left' }}>
            Modal Title
          </div>
        } isFlag={flag} onOk={() => {
          setFlag(false)
        }} onCancel={() => { setFlag(false) }}
          onFocus={() => { changeShow(); console.log('点击x按钮触发事件') }}
        >
          You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.
        </Dialog>
        <button onClick={() => changeShow()} style={{ backgroundColor: '#3c7eff', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>Left Title</button>
      </div>

      <div>
        <Dialog title={
          <div style={{ textAlign: 'center' }}>
            Modal Title
          </div>
        } isFlag={flag1} onOk={() => {
          setFlag1(false)
        }} onCancel={() => { setFlag1(false) }}
          onFocus={() => { changeShow(); console.log('点击x按钮触发事件') }}
        >
          You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.
        </Dialog>
        <button onClick={() => changeShow()} style={{ backgroundColor: '#3c7eff', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>Center Title</button>
      </div>
    </div>
  )
}