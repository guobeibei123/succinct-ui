import React from 'react'
import Notification from '..'
export default function index2() {
  return (
    <div>
      <Notification description={"左上角"} message={"标题"} duration={3000}  type="topLeft">左上角</Notification> 
      <Notification description={"右下角"} message={"标题"}  duration={3000}  type="topRight">右上角</Notification> 
      <Notification description={"左下角"} message={"标题"}  duration={3000}  type="bottomLeft">左下角</Notification> 
      <Notification description={"右下角"} message={"标题"}  duration={3000}  type="bottomRight">右下角</Notification> 
    </div>
  )
}