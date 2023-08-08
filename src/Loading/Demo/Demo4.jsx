import React from "react"
import Loading from "../index"

export default (() => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
        }}>
            <Loading />
            <Loading direction="reverse" />
        </div>
    )
})