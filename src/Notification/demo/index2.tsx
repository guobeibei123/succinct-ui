import React from 'react'
import Notification from '..'

export default function index2() {
  return (
    <div>
      <Notification description={"通知内容"} message={"标题"} duration={2000} >延迟通知</Notification> 
    </div>
  )
}
