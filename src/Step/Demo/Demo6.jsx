import React from "react";
import StepInput from "../index"

export default () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
        }}>
            <StepInput
                value={10}
                isChange={true}
            />
            <StepInput
                value={10}
            />
        </div>
    )
}