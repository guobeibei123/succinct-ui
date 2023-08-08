import React from "react";
import StepInput from "../index"

export default () => {
    return <StepInput
        value={10}
        addHandle={() => { alert("增加了") }}
        reduceHandle={() => { alert("减少了") }}
    />
}