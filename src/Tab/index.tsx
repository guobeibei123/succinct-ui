import React, { FC, memo, useState } from 'react';
import { TabProps } from './interface';
import css from './Tab.module.less'
const Tab: FC<TabProps> = memo((props) => {
    const { option, option1, item, i, children, style, box } = props;
    let [active, setActive] = useState(option[0].Id)
    const handleTabClick = (res: any) => {
        setActive(res)
    }
    return (
        <div className={box ? css.container1 : css.container}>
            <ul className={style ? css.header1 : css.header}>
                {
                    option.map((item: any, i: any) => {
                        return (
                            <li key={item.Id} className={[css.title, item.Id === active ? css.active : ""].join(" ")} onClick={() => handleTabClick(item.Id)}>{item.title}</li>
                        )
                    }) 
                }
            </ul>
            <div className={css.main}>
                {
                    option.map((item: any, i: any) => {
                        if (item.Id === active) {
                            return (<div>
                                {item.component}
                                {children}
                            </div>)
                        }
                    })
                }
            </div>
        </div>
    );
});

export default Tab;
