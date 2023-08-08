import React from "react"
import Loading from "../index"

export default (() => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
        }}>
            <Loading duration={"0.5s"} />
            <Loading />
            <Loading duration={"7s"} />
        </div>
    )
})