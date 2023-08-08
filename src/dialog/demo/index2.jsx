import React, { useState } from "react"
import Dialog from '../dialog.tsx'
export default () => {
  let [flag, setFlag] = useState(false)
  let changeShow = () => {
    console.log("关闭事件触发了")
    setFlag(!flag)
  }
  return (
    <div>
      <Dialog title="Modal Title" isFlag={flag} onOk={() => {
        setFlag(false)
      }}
        onCancel={() => { setFlag(false) }}
        onFocus={() => { changeShow() }}
      >
        <p>Some content...</p>
        <p>Some content...</p>
        <p>Some content...</p>
        <p>Some content...</p>
        <p>Some content...</p>
      </Dialog>
      <button onClick={() => changeShow()} style={{ backgroundColor: '#3c7eff', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>点击显示</button>
    </div>
  )
}

// 父元素声明响应式数据  子元素根据父元素传递的响应式数据