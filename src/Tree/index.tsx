import React, { FC, memo, useState } from 'react';
import css from './Tree.module.less';
import { TreeProps, TreeView } from './interface';
const Tree: FC<{ options: TreeProps }> = memo(({ options }) => {
    const [show, setShow] = useState(false);
    const open = () => {
        setShow(!show)
    }
    return (
        <div className={css.container}>
            <div onClick={open} className={css.title}>
                {options.icon}
                {options.name}
            </div>
            {
                show && options.children &&
                options.children.map(item => {
                    return (
                        <Tree key={item.id} options={item}></Tree>
                    )
                })
            }
        </div>
    );
});

const TreeStyle: FC<TreeView> = ({ data }) => {
    return (
        <div>
            {
                data.map(i => {
                    return (
                        <Tree key={i.id} options={i}></Tree>
                    )
                })
            }
        </div>
    );
};
export default TreeStyle;