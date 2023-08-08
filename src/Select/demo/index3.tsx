import React from 'react';
import Select from '..';
export default function SelectDemo1() {
    const options = [
        {
            title: 'a',
            state: false,
        },
        {
            title: 'b',
            state: true,
        },
        {
            title: 'c',
            state: false
        }]
    return (
        <div >
            <Select options={options} disabled></Select>
        </div>
    );
}
