import React from "react";
import Tip from '../Tip.tsx'

export default () => {
  return (
    <div>
      <Tip tipText="我是标签内容" bgColor="skyblue" direction="top">
        <b>我是内部元素</b>
      </Tip>

      <Tip tipText="我是标签内容" bgColor="skyblue" direction="bottom">
        <b>我是内部元素</b>
      </Tip>
      
      <Tip tipText="我是标签内容" bgColor="skyblue" direction="left">
        <b>我是内部元素</b>
      </Tip>

      <Tip tipText="我是标签内容" bgColor="skyblue" direction="right">
        <b>我是内部元素</b>
      </Tip>
    </div>
  )
}