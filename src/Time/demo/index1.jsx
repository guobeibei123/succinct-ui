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
  return (
    <div>
      <Time
        handler={starthandler}
        WatchTime={handlerTime}
      />
    </div>
  )
}