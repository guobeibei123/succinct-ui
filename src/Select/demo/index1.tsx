import React from 'react';
import Select from '..';
export default function SelectDemo1() {
    const options = [
        {
            title: 'a',
            state: true,
        },
        {
            title: 'b',
            state: true,
        },
        {
            title: 'c',
            state: true,
        }]
    return (
        <div >
            <Select options={options}></Select>
        </div>
    );
}
