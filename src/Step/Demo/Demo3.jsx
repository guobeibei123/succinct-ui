import React from "react";
import StepInput from "../index"

export default () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
        }}>
            <StepInput value={10} />
            <StepInput value={10} minValue={9} maxValue={11} />
            <StepInput value={10} minValue={-1} maxValue={10000} step={10000} />
        </div>
    )
}