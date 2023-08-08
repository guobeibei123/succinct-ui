import React from 'react';
import Tab from '..';
export default function TabDemo1() {
    const option = [
        {
            title: "用户管理",
            Id: 1,
            component: <div> 用户管理</div>
        },
        {
            title: "配置管理",
            Id: 2,
            component: <div> 配置管理</div>
        },
        {
            title: "角色管理",
            Id: 3,
            component: <div> 角色管理</div>
        },
        {
            title: "定时任务补偿",
            Id: 4,
            component: <div> 定时任务补偿</div>
        }
    ]
    return (
        <div >
            <Tab option={option} box style></Tab>
        </div>
    );
}
