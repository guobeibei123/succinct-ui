import React from "react";
import Switch from "../index"

export default () => {
    return (
        <Switch value={true} changeHandle={(v) => {
            alert("触发自定义事件")
        }} />
    )
}