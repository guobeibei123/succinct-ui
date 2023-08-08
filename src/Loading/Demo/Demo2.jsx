import React from "react"
import Loading from "../index"

export default (() => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
        }}>
            <Loading size={10} />
            <Loading />
            <Loading size={30} />
        </div>
    )
})