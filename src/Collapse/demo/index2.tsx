import React from 'react';
import Collapse from '..';

export default function ButtonDemo1() {
    const options = [
        {
            key: 1,
            title: '一致性 Consistency',
            children: <p>One</p>
        },
        {
            key: 2,
            title: '反馈 Feedback',
            children: <p>Two</p>
        },
        {
            key: 3,
            title: '效率 Efficiency',
            children: <p>Three</p>
        },
        {
            key: 4,
            title: '可控 Controllability',
            children: <p>Four</p>
        }
    ]
    return (
        <div>
            <Collapse options={options} height={100} state={true}>
            </Collapse>
        </div>
    );
}
