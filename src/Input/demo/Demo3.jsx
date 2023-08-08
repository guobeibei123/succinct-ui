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
            <Input placeHolder="请输入内容" />
            <Input btnhWord="search" />
            <Input headerText="http://"/>
        </div>
    )
}