import React from "react"
import Alert from '../index'
export default () => {
  return (
    <div>
      <Alert type="success" />
      <Alert type="error" />
      <Alert type="warning" />
      <Alert type="info" />
    </div>
  )
}