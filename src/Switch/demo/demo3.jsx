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
            <Switch value={true} activeWord="按月续费" negativeWord="按年续费" />
            <Switch value={true} activeWord="按月续费" negativeWord="按年续费" activeWordColor="green" />
        </div>
    )
}