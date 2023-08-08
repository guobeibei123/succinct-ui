import React, { useState } from "react";
import BackTime from '../index.tsx'

export default () => {
  let [time, setTime] = useState('')
  let change = (e) => {
    setTime(e.target.value)
  }

  return (
    <div>
      <input type="date" onChange={(e) => change(e)} />
      <BackTime data={time} />
    </div>
  )
}