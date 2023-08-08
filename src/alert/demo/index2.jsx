import React from "react"
import Alert from '../index'
export default () => {
  return (
    <div>
      <Alert
        type="success"
        isClose={false}
        handleClose={() => { console.log('这是触发的函数'); }}
      >
        <p>Detailed description and advice about successful copywriting.</p>
      </Alert>
      <Alert type="error" >
        <p>This is an error message about copywriting.</p>
      </Alert>
      <Alert type="warning" >
        <p>This is a warning notice about copywriting.</p>
      </Alert>
      <Alert type="info" >
        <p>Additional description and information about copywriting.</p>
      </Alert>
    </div>
  )
}