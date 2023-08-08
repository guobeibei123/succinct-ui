import React, { useState } from "react";
import Css from "./index.module.less"
import LoadingProps from './interface'

export default ({ size, duration, direction, playState, color, border }: LoadingProps) => {
    let [sizes, setSize] = useState(parseInt(size) || 20)
    let [dura, setDura] = useState(duration || "3s")
    let [dire, setDire] = useState(direction || "normal")
    let [colo, setColor] = useState(color || "skyblue")
    let [bord, setBorder] = useState(parseInt(border) || 3)
    return (
        <div className={Css.wrapper}>
            <div style={{
                width: `${sizes}px`,
                height: `${sizes}px`,
                animationDuration: dura,
                animationDirection: dire,
                animationPlayState: playState ? "paused" : "running",
                borderColor: colo,
                borderWidth: `${bord}px`,
                borderTopColor: 'transparent'
            }} className={Css.loadingAni}>
            </div>
        </div>
    )
}