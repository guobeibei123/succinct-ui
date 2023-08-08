import React from "react";
import StepInput from "../index"

export default () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
        }}>
            <StepInput value={10}  />
            <StepInput value={10} step={3} />
            <StepInput value={10} step={10} />
        </div>
    )
}