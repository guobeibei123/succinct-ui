import React from "react";
import Switch from "../index"

export default () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around"
            }}
        >
            <Switch value={true} disable={true} />
            <Switch value={true} />
        </div>
    )
}