import React from 'react';
import TreeStyle from '..';
export default function TreeDemo1() {
    const datas = [
        {
            id: 1,
            name: "one",
            children: [
                {
                    id: 1 - 1,
                    name: '1-1',
                    children: [
                        {
                            id: 1 - 1 - 1,
                            name: '1-1-1',
                        },
                    ]
                },
            ]
        },
        {
            id: 2,
            name: "two",
            children: [
                {
                    id: 2 - 1,
                    name: '2-1',
                    children: [
                        {
                            id: 2 - 1 - 1,
                            name: '2-1-1',
                        },
                    ]
                },
                {
                    id: 2 - 2,
                    name: '2-2',
                    children: [
                        {
                            id: 2 - 2 - 1,
                            name: '2-2-1',
                        },
                    ]
                },
            ]
        },
        {
            id: 3,
            name: "Three",
            children: [
                {
                    id: 3 - 1,
                    name: '3-1',
                    children: [
                        {
                            id: 3 - 1 - 1,
                            name: '3-1-1',
                        },
                    ]
                },
                {
                    id: 3 - 2,
                    name: '3-2',
                    children: [
                        {
                            id: 3 - 2 - 1,
                            name: '3-2-1',
                        },
                    ]
                },
                {
                    id: 3 - 3,
                    name: '3-3',
                    children: [
                        {
                            id: 3 - 3 - 1,
                            name: '3-3-1',
                        },
                    ]
                },

            ]
        }
    ]
    return (
        <div >
            <TreeStyle data={datas}></TreeStyle>
        </div>
    );
}