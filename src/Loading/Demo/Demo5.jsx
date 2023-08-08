import React, { useState } from "react"
import Loading from "../index"

export default (() => {
    let [play, setPlay] = useState(true)
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <Loading playState={play} />
                <Loading />
            </div>
            <button
                style={{
                    backgroundCcolor: `#FFFFFF`,
                    border: ` 1px solid rgb(209, 213, 219)`,
                    borderRadius: `7px`,
                    color: `#111827`,
                    padding:"5px 10px"
                }}
                onClick={() => {
                    setPlay(!play)
                }}>暂停/运行</button >
        </>
    )
})