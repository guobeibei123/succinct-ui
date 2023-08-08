import React from "react";
import StepInput from "../index"

export default () => {
    return <StepInput
        value={10}
        changeValue={(a) => { console.log(a) }}
    />
}