import React from 'react';
import Divider from '../Divider';

export default function ButtonDemo1() {
    return (
        <div>
            <span>头上一片晴天，心中一个想念</span>
            <Divider Position="left">少年包青天</Divider>
            <span>饿了别叫妈, 叫饿了么</span>
            <Divider>默认content</Divider>
            <span>为了无法计算的价值</span>
            <Divider Position="right">阿里云</Divider>
        </div>
    );
}