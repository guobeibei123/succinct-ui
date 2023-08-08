import React from "react";
import Input from "../Input"

export default () => {
    return (
        <div style={{
            height: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
            <Input widths="200px" size="12px" />
            <Input />
            <Input widths="350px" size="20px" />
        </div>
    )
}