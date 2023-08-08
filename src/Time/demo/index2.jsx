import React from "react";
import Time from '../index'
export default () => {
  let starthandler = (flag) => {
    if (flag) {
      console.log(flag);
    }
  }
  let handlerTime = (time) => {
    console.log(time);
  }

  let resetHandle = () => {
    console.log('点击重置按钮触发');
  }
  
  return (
    <div>
      <Time
        handler={starthandler}
        WatchTime={handlerTime}
        resetHandle={resetHandle}
        width={"300px"}
        height={"400px"}
      />
    </div>
  )
}