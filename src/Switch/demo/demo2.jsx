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
            <Switch value={true} />
            <Switch value={true} activeColor="rgb(64,158,255)" negativeColor="rgb(220,223,230)" />
            <Switch value={true} activeColor="rgb(210,170,249)" negativeColor="rgb(0,0,0)" />
        </div>
    )
}