import React from "react";
import Input from "../Input"

export default () => {
    return (
        <div>
            <Input
                placeHolder="请输入内容"
                onBtnSearch={(v) => { alert(v) }}
            />
        </div>
    )
}